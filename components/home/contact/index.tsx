import ContactForm from "./ContactForm";

export default function Contact() {
    return(
        <section className="main-width py-28" id="contact">
            <h2 className="mb-8 text-5xl text-center">
                {`Let's get in touch`}
            </h2>
            <ContactForm />
        </section>
    )
}