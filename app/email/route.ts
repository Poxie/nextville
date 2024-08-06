import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_PASSWORD
    }
});

const mailOptions = {
    from: `${process.env.EMAIL_FROM}:`,
    to: process.env.EMAIL_RECEIVER,
    subject: process.env.EMAIL_SUBJECT,
    text: ''
}

const sendResponse = (message: string, status: number) => new Response(
    JSON.stringify({ message }),
    {
        status,
        headers: {
            'Content-Type': 'application/json',
        },
    }
)

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    if(!name || !email || !message) {
        return sendResponse('Please fill out all fields.', 400);
    }

    mailOptions.text = `${name} (${email}) said: ${message}`;

    const data = await transporter.sendMail(mailOptions);

    if(data.accepted) {
        return sendResponse('Thank you for your message. We will reach back as soon as possible.', 200);
    }

    console.log(data.rejected);
    return sendResponse('Something went wrong, please try again.', 500);
}