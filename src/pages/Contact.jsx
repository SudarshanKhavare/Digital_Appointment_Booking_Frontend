/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kzfl46r",   // Replace with your EmailJS Service ID
        "template_bzd996l",  // Replace with your EmailJS Template ID
        form.current,
        "RCKiR9BTB_NWvPaQX"       // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Got a technical issue? Want to send feedback about a beta feature? Let us know.
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="example@gmail.com"
              className="form__input mt-1"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Let us know how we can help you"
              className="form__input mt-1"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Your Message
            </label>
            <textarea
              rows="6"
              type="text"
              id="message"
              name="message"
              placeholder="Leave a comment...."
              className="form__input mt-1"
            />
          </div>
          <button type="submit" className="btn rounded sm:w-fit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
