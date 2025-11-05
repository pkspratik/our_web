import {BodyBg} from '../BodyTheams/BodyBg';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


export function ServiceComp() {

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const courses = [
    {
      title: "Basic Computer Course",
      desc: "Learn essential computer skills — MS Word, Excel, PowerPoint, Internet usage, and more.",
      icon: "bi-laptop",
      color: "text-success",
      img: "https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333_1280.jpg",
    },
    {
      title: "Advanced Excel Mastery",
      desc: "Master Excel formulas, pivot tables, dashboards, and automation for business insights.",
      icon: "bi-file-earmark-spreadsheet-fill",
      color: "text-warning",
      img: "asert/advanceexcel.PNG",
    },
    {
      title: "Web Development",
      desc: "Learn HTML, CSS, JavaScript, and React to create stunning and responsive websites.",
      icon: "bi-code-slash",
      color: "text-info",
      img: "asert/webdevlopement.PNG",
    },
    {
      title: "Graphic Design",
      desc: "Master Canva, Photoshop, and design principles to create beautiful digital content.",
      icon: "bi-brush-fill",
      color: "text-danger",
      img: "asert/graphic.PNG",
    },
    {
      title: "AI Tools & Automation",
      desc: "Explore ChatGPT, Bard, and other AI tools to automate work and boost creativity.",
      icon: "bi-robot",
      color: "text-primary",
      img: "asert/Ai.PNG",
    },
    {
      title: "Cyber Security Basics",
      desc: "Understand the fundamentals of online security, safe browsing, and ethical hacking.",
      icon: "bi-shield-lock-fill",
      color: "text-light",
      img: "asert/cybersecurity.PNG",
    },
  ];

  return (
    <div
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2016/11/29/15/36/blur-1867434_1280.jpg')",
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
        {/* Header */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h1 className="fw-bold text-light">Our Computer Courses</h1>
          <p className="text-white-50 fs-5">
            Explore our hands-on computer and tech learning programs designed to
            make you future-ready.
          </p>
        </div>

        {/* Course Grid */}
        <div className="row g-4">
          {courses.map((course, index) => (
            <div
              className="col-md-4"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div
                className="card h-100 border-0 rounded-4 shadow-sm text-center"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(0,255,100,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 0 10px rgba(255,255,255,0.1)";
                }}
              >
                <img
                  src={course.img}
                  alt={course.title}
                  className="card-img-top"
                  style={{
                    height: "180px",
                    objectFit: "cover",
                    opacity: 0.9,
                  }}
                />
                <div className="card-body">
                  <i
                    className={`bi ${course.icon} fs-1 ${course.color} mb-3`}
                  ></i>
                  <h5 className="fw-bold text-light">{course.title}</h5>
                  <p className="text-white-50">{course.desc}</p>
                  <button className="btn btn-success fw-semibold mt-2 px-4">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5" data-aos="fade-up">
          <h4 className="fw-bold text-light">
            Ready to Start Your Learning Journey?
          </h4>
          <p className="text-white-50 mb-3">
            Join thousands of students already learning from our tutorials.
          </p>
          <button className="btn btn-success px-4 py-2 fw-semibold">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
  
}