import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          Email: <a href="mailto:khamliche@gmail.com">E-mail me here</a>
        </p>
        <p>
          CV:{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            PDF Link
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/Tarikcn"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/tarik-khamliche-62046b50"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>
      </div>
      <form className="contact-form">
        <h3>Contact Form</h3>
        <div className="form-input">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="form-input">
          <label htmlFor="message">Message</label>
          <textarea id="message" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
