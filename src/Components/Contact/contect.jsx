import {BodyBg} from '../BodyTheams/BodyBg';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

export function Contect() {
 
  // this code for display everytime this screen on top
      useEffect(() => {
         window.scrollTo(0, 0);
       }, []);


      return (
    // <div className="container py-5">
    //   {/* Header */}

    //   <div className="text-center mb-5">
    //     <h2 className="fw-bold text-success">Get in Touch with Us</h2>
    //     <p className="text-muted">
    //       We’d love to hear from you! Whether you have a question, feedback, or
    //       partnership idea — our team is here to help.
    //     </p>
    //   </div>

    //   <div className="row g-4">
    //     {/* Contact Info */}
    //     <div className="col-md-5">
    //       <div className="bg-light p-4 rounded shadow-sm">
    //         <h5 className="fw-bold mb-3 text-success">Contact Details</h5>
    //         <p><i className="bi bi-geo-alt-fill text-success me-2"></i> Sai Baba Boys Hostel, Near by AAA Malls, Hyderabad, India</p>
    //         <p><i className="bi bi-telephone-fill text-success me-2"></i> +91 72219 76207</p>
    //         <p><i className="bi bi-envelope-fill text-success me-2"></i> pratik793singh@gmail.com</p>
    //         <p><i className="bi bi-clock-fill text-success me-2"></i> Mon – Sat: 10:00 PM – 6:00 PM</p>
    //         {/* <p><i className="bi bi-globe text-success me-2"></i> www.aci.com</p> */}

    //         {/* Map */}
    //         <div className="mt-4">
    //           <iframe
    //             title="ACI Location"
    //             src="https://www.google.com/maps/embed?pb=!1m18..."
    //             width="100%"
    //             height="200"
    //             style={{ border: 0 }}
    //             allowFullScreen=""
    //             loading="lazy"
    //           ></iframe>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Contact Form */}
    //     <div className="col-md-7">
    //       <div className="bg-white p-4 rounded shadow-sm border">
    //         <h5 className="fw-bold mb-3 text-success">Send Us a Message</h5>
    //         <form>
    //           <div className="mb-3">
    //             <label className="form-label fw-semibold">Your Name</label>
    //             <input type="text" className="form-control" placeholder="Enter your name" required />
    //           </div>
    //           <div className="mb-3">
    //             <label className="form-label fw-semibold">Email</label>
    //             <input type="email" className="form-control" placeholder="Enter your email" required />
    //           </div>
    //           <div className="mb-3">
    //             <label className="form-label fw-semibold">Message</label>
    //             <textarea className="form-control" rows="4" placeholder="Write your message..." required></textarea>
    //           </div>
    //           <button type="submit" className="btn btn-success w-100 fw-semibold">
    //             Send Message
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Call to Action */}
    //   <div className="text-center mt-5">
    //     <p className="fw-semibold">
    //       📞 Need instant help? Call us directly at{" "}
    //       <span className="text-success">+91 72219 76207</span> or message us on WhatsApp.
    //     </p>
    //   </div>
    //     <BodyBg/>
    // </div>


   // new look
   <>
   <div
      className="contact-page d-flex align-items-center justify-content-center py-5"
      style={{
        // background: "linear-gradient(135deg, #e6f9e6, #c8f7c5)",
        // minHeight: "100vh",
      
        background: "transparent", // ✅ Fully transparent background
        minHeight: "100vh",
      

      }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold text-success display-5">Get in Touch</h1>
          <p className="text-muted fs-5">
            We’d love to hear from you — let’s talk about your ideas, feedback, or collaborations!
          </p>
        </div>

        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-lg-5">
            <div
              className="p-4 rounded-4 shadow-lg text-dark"
              style={{
                background: "white",
                borderLeft: "5px solid #28a745",
              }}
            >
              <h4 className="fw-bold text-success mb-4">
                <i className="bi bi-person-lines-fill me-2"></i> Contact Details
              </h4>

              <div className="mb-3">
                <i className="bi bi-geo-alt-fill text-success me-2 fs-5"></i>
                <span>Sai baba colony Ameerpet,near by AAA mall, Hyderabad,India</span>
              </div>

              <div className="mb-3">
                <i className="bi bi-telephone-fill text-success me-2 fs-5"></i>
                <span>+91 72219 76207</span>
              </div>

              <div className="mb-3">
                <i className="bi bi-envelope-fill text-success me-2 fs-5"></i>
                <span>pratik793singh@gmail.com</span>
              </div>

              <div className="mb-3">
                <i className="bi bi-clock-fill text-success me-2 fs-5"></i>
                <span>Mon – Sat: 10:30 AM – 6:00 PM</span>
              </div>

              {/* <div className="mb-3">
                <i className="bi bi-globe text-success me-2 fs-5"></i>
                <span>www.aci.com</span>
              </div> */}

              <div className="mt-4 rounded overflow-hidden shadow-sm">
                <iframe
                  title="ACI Location"
                  src="https://www.google.com/maps/embed?pb=!1m18..."
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div
              className="p-4 rounded-4 shadow-lg border-0"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(8px)",
              }}
            >
              <h4 className="fw-bold text-success mb-4">
                <i className="bi bi-chat-dots-fill me-2"></i> Send Us a Message
              </h4>

              <form>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Your Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea
                    className="form-control form-control-lg rounded-3"
                    rows="4"
                    placeholder="Write your message..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100 py-2 fw-semibold rounded-3"
                  style={{
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)")}
                  onMouseLeave={(e) => (e.target.style.boxShadow = "none")}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <p className="fw-semibold fs-5">
            📞 Need instant help? Call us directly at{" "}
            <span className="text-success">+91 72219 76207</span> or message us on WhatsApp!
          </p>
        </div>
      </div>

    </div>


 
  </>


  );

  
}