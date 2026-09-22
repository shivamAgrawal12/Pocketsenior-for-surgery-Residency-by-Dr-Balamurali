import { useState } from "react";
import emailjs from "@emailjs/browser";

import { contact } from "../../data/cloudinary";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove old status when user starts editing again
    if (statusMessage) {
      setStatusMessage("");
      setStatusType("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trim values before validation/submission
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    // Mandatory field validation
    if (!name || !email || !message) {
      setStatusType("error");
      setStatusMessage("Please fill in all fields.");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setStatusType("error");
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("");
    setStatusType("");

    const serviceID = "service_xp0uqj9";
    const templateID = "template_94glit5";
    const publicKey = "TN8v4bWE9lk2m01ro";

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    try {
      await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      setStatusType("success");
      setStatusMessage(
        "Your message has been sent successfully!"
      );

      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatusType("error");
      setStatusMessage(
        "Unable to send your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="contact-section"
      id="reachout-section"
    >
      <div className="contact-container">

        {/* Heading */}
        <h2 className="contact-heading">
          CONTACT US
        </h2>

        <div className="contact-content">

          {/* Contact Image */}
          <div className="contact-image">
            <img
              src={contact}
              alt="Contact Medical Study"
              className="contact-pic"
            />
          </div>

          {/* Contact Form */}
          <div className="form-box">

            <form
              onSubmit={handleSubmit}
              noValidate
            >

              {/* Name */}
              <div className="form-group">

                <label htmlFor="name">
                  Name <span className="required">*</span>
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                  disabled={isSubmitting}
                />

              </div>


              {/* Email */}
              <div className="form-group">

                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                  disabled={isSubmitting}
                />

              </div>


              {/* Message */}
              <div className="form-group">

                <label htmlFor="message">
                  Message <span className="required">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                  disabled={isSubmitting}
                />

              </div>


              {/* Status Message */}
              {statusMessage && (
                <div
                  className={`form-status ${statusType}`}
                  role="alert"
                >
                  {statusMessage}
                </div>
              )}


              {/* Submit */}
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="submit-spinner"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;