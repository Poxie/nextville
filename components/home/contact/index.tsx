import ContactForm from "./ContactForm";

export default function Contact() {
    return(
        <div className=' from-white via-white to-[#FCC383] from-60% w-full'>
            <section className="px-[22.5px] py-28 bg-gradient-to-b" id="contact">
            <h2 className="mb-8 text-5xl text-center">
                {`Let's get in touch`}
            </h2>
            <ContactForm />
        </section>
        </div>
      
    )
}