import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export function Help() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2016/11/21/15/44/blur-1842302_1280.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
        fontFamily: "'Poppins', sans-serif",
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      <div
        className="container p-4"
        style={{
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          boxShadow: "0 0 30px rgba(255,255,255,0.1)",
        }}
      >
        {/* Header Section */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h1 className="fw-bold text-light">Help & Support</h1>
          <p className="text-white-50 fs-5">
            We're here to assist you. Search for answers or reach out directly.
          </p>
        </div>

        {/* Search Bar */}
        <div className="d-flex justify-content-center mb-5" data-aos="fade-up">
          <div className="input-group w-75">
            <input
              type="text"
              className="form-control bg-transparent text-white border-white border-opacity-25"
              placeholder="Search your issue (e.g., How to change password)"
            />
            <button className="btn btn-success px-4">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>

        {/* Quick Help Options */}
        <div className="row text-center g-4 mb-5" data-aos="zoom-in">
          <div className="col-md-4">
            <div
              className="p-4 rounded-4 h-100"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <i className="bi bi-chat-dots-fill fs-1 text-success mb-3"></i>
              <h5 className="fw-bold text-light">Live Chat</h5>
              <p className="text-white-50">
                Get instant help from our support team via chat.
              </p>
              <button className="btn btn-success px-4 mt-2">Chat Now</button>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="p-4 rounded-4 h-100"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <i className="bi bi-telephone-fill fs-1 text-success mb-3"></i>
              <h5 className="fw-bold text-light">Call Support</h5>
              <p className="text-white-50">
                Talk directly to our helpdesk for personalized assistance.
              </p>
              <button className="btn btn-outline-success px-4 mt-2">
                +91 72219 76207
              </button>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="p-4 rounded-4 h-100"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <i className="bi bi-envelope-fill fs-1 text-success mb-3"></i>
              <h5 className="fw-bold text-light">Email Us</h5>
              <p className="text-white-50">
                Send us your questions — we’ll respond within 24 hours.
              </p>
              <button className="btn btn-outline-success px-4 mt-2">
                pratik793singh@gmail.com
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center mb-4" data-aos="fade-down">
          <h2 className="fw-bold text-light">Frequently Asked Questions</h2>
          <p className="text-white-50">Find answers to the most common questions.</p>
        </div>

        <div className="accordion" id="faqAccordion" data-aos="fade-up">
          <div className="accordion-item bg-transparent border-white border-opacity-25">
            <h2 className="accordion-header">
              <button
                className="accordion-button bg-transparent text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq1"
              >
                How do I reset my password?
              </button>
            </h2>
            <div
              id="faq1"
              className="accordion-collapse collapse show"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body text-white-50">
                Click “Forgot Password” on the login page, enter your registered email, and follow the link we send to reset your password.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent border-white border-opacity-25 mt-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-transparent text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq2"
              >
                How can I contact support?
              </button>
            </h2>
            <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body text-white-50">
                You can reach us via Live Chat, Call Support, or by emailing <span className="text-success">support@aci.com</span>.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent border-white border-opacity-25 mt-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-transparent text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq3"
              >
                How can I join your community?
              </button>
            </h2>
            <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body text-white-50">
                You can join our <span className="text-success">YouTube channel</span> or follow us on social media for learning updates.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent border-white border-opacity-25 mt-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-transparent text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq4"
              >
                Can I request a custom tutorial?
              </button>
            </h2>
            <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body text-white-50">
                Absolutely! Use our Contact form to share what topic you want us to cover next — we love suggestions!
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-5" data-aos="fade-up">
          <p className="text-white-50">
            Still need help? Email us at{" "}
            <span className="text-success">pratik793singh.com</span> — we’ll respond within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );

    
  
}