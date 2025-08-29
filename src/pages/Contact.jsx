import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j9y2ttq",   // ✅ Replace with your Service ID
        "template_h8ckh1u",  // ✅ Replace with your Template ID
        form.current,
        "_HlD821MyBCQWGTz-"  // ✅ Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("❌ Something went wrong, please try again.");
        }
      );
  };

  return (
    <section className="section">
      <div className="container-page grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-3xl md:text-4xl mb-4">Let’s work together</h1>
          <p className="max-w-md">Tell me about your project or opportunity. I’ll get back to you soon.</p>
        </div>

        {/* ✅ Add form ref and submit handler */}
        <form ref={form} onSubmit={sendEmail} className="grid gap-4 max-w-xl w-full">
          <input name="name" className="bg-white/5 border border-white/10 rounded px-3 py-2" placeholder="Name" required />
          <input name="email" className="bg-white/5 border border-white/10 rounded px-3 py-2" type="email" placeholder="Email" required />
          <textarea name="message" className="bg-white/5 border border-white/10 rounded px-3 py-2" placeholder="Message" rows="6" required />
          <button type="submit" className="btn btn-primary w-fit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
