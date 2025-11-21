import "./Support.css";

import {
  ChevronDown,
  HelpCircle,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import logo from "../assets/logos/santry-logo.png";
import { motion } from "framer-motion";

function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // Smooth scroll handler
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const webhookURL = import.meta.env.VITE_GOOGLE_SHEET_SUPPORT_TICKET;

      // Send support ticket to Google Sheets via webhook
      await fetch(webhookURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Failed to submit support message:", error);
      // Still show success to user even if submission fails
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Santry?",
      answer:
        "Santry is an AI-powered food management app that helps you track your groceries, predict expiry dates, reduce food waste, and plan meals smarter.",
    },
    {
      question: "How does Santry track my food?",
      answer:
        "You can add items in three ways: Receipt Scanning – Snap a photo and Santry extracts your items automatically. Voice Input – Just say what you bought. Manual Entry – Add custom items easily. You can also interact directly with the AI agent inside the app to manage your food or ask anything related to your pantry.",
    },
    {
      question: "How does Santry know expiry dates?",
      answer:
        "Santry uses AI predictions, product-type rules, and region-specific guidelines to estimate expiry dates. You can always edit them manually.",
    },
    {
      question: "How do reminders work?",
      answer:
        "Santry sends friendly, automated reminders when your food is close to expiring — usually 3 days before and 1 day before the expiry date. Users cannot change the frequency yet.",
    },
    {
      question: "Can Santry suggest recipes using what I already have?",
      answer:
        "Yes! Santry recommends recipes based on the items in your pantry and fridge, and can adapt suggestions based on your dietary preferences.",
    },
    {
      question: "Is my data private and secure?",
      answer:
        "Absolutely. Santry never sells your data. All personal and nutrition-related information is encrypted and stored securely.",
    },
    {
      question: "How do I delete my Santry account?",
      answer:
        "Go to Settings → Delete Account inside the app. Your entire account and all associated data will be permanently deleted.",
    },
    {
      question: "Is Santry free?",
      answer:
        "Santry is a paid app with a free trial. You can explore all features before your subscription begins.",
    },
    {
      question: "What happens to my subscription if I delete my account?",
      answer:
        "Deleting your Santry account does not cancel your App Store subscription. To avoid future charges, cancel your subscription through the App Store.",
    },
    {
      question: "Which devices does Santry support?",
      answer:
        "Santry currently supports iOS devices (iPhone). Android support is planned for the future.",
    },
    {
      question: "Do I need an internet connection?",
      answer:
        "Santry does require an internet connection for most features. However, you can still view your inventory and see previously suggested recipes even when offline.",
    },
    {
      question: "Does Santry support shared households?",
      answer:
        "Not yet. Shared household and multi-user support are planned for future releases.",
    },
    {
      question: "I have an issue. How do I contact support?",
      answer: "Email us anytime at support@santry.app.",
    },
    {
      question: "Is the recipe generation safe for allergies?",
      answer:
        "Santry allows you to mark dietary restrictions, and recipes will respect them. Still, always double-check ingredients if you have severe allergies.",
    },
    {
      question: "How accurate is Santry's nutritional and AI analysis?",
      answer:
        "Our AI provides smart estimates based on available data. Accuracy is continuously improving as we train and refine our systems.",
    },
    {
      question: "Will Santry ever sell my data?",
      answer: "No. Santry will never sell your data.",
    },
  ];

  return (
    <div className="support-page">
      <Header />

      <main className="support-content">
        {/* Hero Section */}
        <motion.section
          className="support-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="support-hero-content">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <HelpCircle size={64} className="support-hero-icon" />
            </motion.div>
            <motion.h1
              className="support-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              How Can We <span className="gradient-text">Help You?</span>
            </motion.h1>
            <motion.p
              className="support-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Have questions or need assistance? We're here to help!
            </motion.p>
          </div>
        </motion.section>

        {/* Contact Form Section */}
        <motion.section
          id="contact-form"
          className="contact-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-container">
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="contact-form-header">
                <MessageCircle size={40} className="form-icon" />
                <h2 className="contact-form-title">Send Us a Message</h2>
                <p className="contact-form-description">
                  Fill out the form below and we'll get back to you as soon as
                  possible
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your question or issue..."
                      rows="6"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="submit-button"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  <Mail size={48} className="success-icon" />
                  <h3>Message Sent Successfully!</h3>
                  <p>
                    Thank you for contacting us. We'll get back to you within 24
                    hours.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Alternative Contact Info */}
            <motion.div
              className="alternative-contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Other Ways to Reach Us</h3>
              <div className="contact-methods">
                <div className="contact-method">
                  <Mail size={24} />
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:support@santry.app">support@santry.app</a>
                  </div>
                </div>
              </div>
              <p className="response-time">
                Average response time: <strong>24 hours</strong>
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          className="faq-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-container">
            <motion.div
              className="faq-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="faq-title">Frequently Asked Questions</h2>
              <p className="faq-subtitle">
                Find quick answers to common questions about Santry
              </p>
            </motion.div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className={`faq-item ${
                    expandedFAQ === index ? "expanded" : ""
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={expandedFAQ === index}
                  >
                    <span>{faq.question}</span>
                    <motion.div
                      animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={24} />
                    </motion.div>
                  </button>
                  <motion.div
                    className="faq-answer"
                    initial={false}
                    animate={{
                      height: expandedFAQ === index ? "auto" : 0,
                      opacity: expandedFAQ === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="faq-cta"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p>Can't find what you're looking for?</p>
              <a href="#contact-form" className="faq-contact-button">
                Contact Support
              </a>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Santry Logo" className="footer-logo-image" />
          </div>
          <div className="footer-text">
            <p>
              &copy; 2025 Santry. Reducing food waste, one household at a time.
            </p>
            <div className="footer-links">
              <a href="/terms-and-conditions">Terms and Conditions</a>
              <span className="footer-separator">•</span>
              <a href="/privacy-policy">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Support;
