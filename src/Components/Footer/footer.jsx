import React from "react";
import {BodyBg} from '../BodyTheams/BodyBg';
import { Link } from "react-router-dom";
import {Contect} from "../Contact/contect";
import {ServiceComp} from "../ServiceComp/ServiceComp";

export function Footer() {
  return (
    <footer
      className="mt-5 pt-5 pb-3"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)", // transparent-glass effect
        backdropFilter: "blur(10px)", // soft blur background
        border: "1px solid rgba(255, 255, 255, 0.2)", // soft transparent border
        borderRadius: "15px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)", // 3D shadow
        transition: "all 0.3s ease",
      }}
    >
      <div className="container text-light">
        {/* Top Row */}
        <div className="row align-items-center border-bottom pb-4 mb-4 border-secondary text-center text-md-start">
          {/* Col 1 */}
          <div className="col-md-4 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start">
            <Link to="/contect" className="btn btn-outline-light d-flex align-items-center gap-2 px-4 py-2">
              📩 Contact us
            </Link>
          </div>

          {/* Col 2 */}
          <div className="col-md-4 mb-3 mb-md-0">
            <p className="mb-0 small">
              Sai baba colony Ameerpet,Hyderabad,India
            </p>
          </div>

          {/* Col 3 */}
          <div className="col-md-4 text-center text-md-end">
            <Link to="/service">
            <button
              className="btn text-white fw-semibold px-4 py-2 rounded"
              style={{
                backgroundColor: "#00B386",
                boxShadow: "0 3px 10px rgba(0, 179, 134, 0.5)",
              }}
            >
              Get started with Fully Tech!
            </button>
            </Link>
            <div>
              <a href="#" className="small text-muted text-decoration-underline">
                or see our plans & pricing
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="row gy-4 text-light">
          {[
            { title: "PRODUCT", items: ["Features", "Pricing", "Free Trial"] },
            { title: "HELP", items: ["Knowledge Base", "Academy", "API Docs"] },
            { title: "COMMUNITY", items: ["Blog", "Webinars", "Ambassador Program"] },
            { title: "TOOLS", items: ["Top Websites", "SEO Tools", "Tech Analyzers"] },
            { title: "COMPANY", items: ["About Us", "Careers", "Contact"] },
            { title: "FOLLOW US", items: ["LinkedIn", "Instagram", "YouTube"] },
          ].map((section, i) => (
            <div key={i} className="col-6 col-sm-4 col-md-2">
              <h6 className="fw-bold mb-3 text-white">{section.title}</h6>
              <ul className="list-unstyled small">
                {section.items.map((item, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-secondary text-decoration-none d-block mb-1"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="border-top border-secondary mt-4 pt-3 d-flex flex-column flex-sm-row justify-content-between align-items-center text-muted small">
          <div className="d-flex align-items-center gap-2 mb-2 mb-sm-0">
            <div
              className="fw-bold rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "#00B386",
                color: "#fff",
                boxShadow: "0 0 8px rgba(0, 179, 134, 0.8)",
              }}
            >
              ACI
            </div>
            <span>© 2025 About Computer Info. </span>
           <BodyBg/>
          </div>
          <span>Made with ❤️ by ACI Team</span>
        </div>
      </div>
    </footer>
  );
}
