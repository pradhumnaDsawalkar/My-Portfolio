//service id = service_fxhr19e
//template id = template_kxt3o5u
//public key = 0RcVL6JISz29vOEn6
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import './Contact.css';
import VoiceControl from "../VoiceControl/VoiceControl"; // Import the VoiceControl component

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_fxhr19e", // Replace with your EmailJS Service ID
        "template_kxt3o5u", // Replace with your EmailJS Template ID
        formData,
        "0RcVL6JISz29vOEn6" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Message sent successfully!", response);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log("Failed to send message.", error);
          alert("Failed to send message.");
        }
      );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
    <VoiceControl />
     <div className="SectionTitle" style={{ textAlign: "center", fontSize: "2rem", marginTop:"20px",marginBottom: "50px" }}>
        Contact Me
      </div>
    <div className="contact-container">
  

  {/* 🌟 Contact Form */}
  <form onSubmit={handleSubmit} className="contact-form">
    <label>Name:</label>
    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
    
    <label>Email:</label>
    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
    
    <label>Message:</label>
    <textarea name="message" value={formData.message} onChange={handleChange} required />

    <button type="submit">Send Message</button>
  </form>
</div>
</div>
  );
};

export default ContactForm;
