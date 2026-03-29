import React, { useState } from "react";
import "../styles/Contact.css";


const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container contact-page">
      <h1>Contact Us</h1>

      <div className="contact-wrapper">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            Have questions about our products or your order? Our team is here
            to help you.
          </p>

          <p><strong>Email:</strong> support@motormart.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> Chennai, Tamil Nadu, India</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;