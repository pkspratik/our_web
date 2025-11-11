import {BodyBg} from '../BodyTheams/BodyBg';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export function About() {




   useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <>
    <div
      className="container py-5"
      style={{
        background: "rgba(255, 255, 255, 0.85)",
        borderRadius: "15px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      {/* Header */}
      <div className="text-center mb-5" data-aos="fade-down">
        <h1 className="fw-bold text-success">About Computer Info</h1>
        <p className="text-muted">
          Learn. Explore. Innovate. We simplify complex computer and technology
          concepts so that everyone can understand and apply them easily.
        </p>
      </div>

      {/* About Section */}
      <div className="row align-items-center g-5 mb-5">
        <div className="col-md-6" data-aos="fade-right">
          <img
            src="asert/abotcomputer.PNG"
            alt="About Computer Info"
            className="img-fluid rounded-4 shadow-sm"
          />
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <h3 className="fw-bold text-success mb-3">Who We Are</h3>
          <p className="text-muted">
            We are passionate tech enthusiasts creating easy tutorials and
            practical tips on computer basics, AI tools, software tricks, and
            digital productivity. Our mission is to make technology learning
            <strong> accessible for everyone</strong> — from beginners to
            professionals.
          </p>
          <p className="text-muted">
            Whether you’re a student, developer, or just curious about tech,
            <span className="fw-semibold text-success"> About Computer Info </span>
            is your go-to source for tutorials, guides, and learning.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="row text-center g-4 mb-5">
        <div className="col-md-4" data-aos="zoom-in">
          <div className="p-4 rounded shadow-sm h-100 bg-light">
            <i className="bi bi-lightbulb-fill text-success fs-1 mb-3"></i>
            <h5 className="fw-bold">Our Mission</h5>
            <p className="text-muted">
              To make computer education simple and accessible by creating
              interactive and easy-to-follow tutorials.
            </p>
          </div>
        </div>
        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
          <div className="p-4 rounded shadow-sm h-100 bg-light">
            <i className="bi bi-rocket-takeoff-fill text-success fs-1 mb-3"></i>
            <h5 className="fw-bold">Our Vision</h5>
            <p className="text-muted">
              To empower millions to grow their tech knowledge and skills for
              future-ready careers.
            </p>
          </div>
        </div>
        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="400">
          <div className="p-4 rounded shadow-sm h-100 bg-light">
            <i className="bi bi-people-fill text-success fs-1 mb-3"></i>
            <h5 className="fw-bold">Our Community</h5>
            <p className="text-muted">
              Join thousands of learners who share ideas, learn from tutorials,
              and improve their tech skills every day.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-4" data-aos="fade-up">
        <h3 className="fw-bold text-success">Meet Our Team</h3>
        <p className="text-muted">
          The creative minds behind <strong>About Computer Info</strong>
        </p>
      </div>
      <div className="row text-center g-4">
        <div className="col-md-4" data-aos="flip-left">
          <div className="card border-0 shadow-sm">
            <img
               src="asert/teamimage/pratik.jpg"
              alt="CEO"
              className="card-img-top rounded-top"
            />
            <div className="card-body">
              <h6 className="fw-bold text-success">C.E.O :- P. Singh</h6>
              <p className="text-muted mb-1">Full Stack Developer</p>
              <i className="bi bi-linkedin text-primary me-2"></i>
              <i className="bi bi-youtube text-danger me-2"></i>
              <i className="bi bi-github"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4" data-aos="flip-up" data-aos-delay="150">
          <div className="card border-0 shadow-sm">
            <img
             src="asert/teamimage/ujjwal.jpg"
              alt="Team Member"
              className="card-img-top rounded-top"
            />
            <div className="card-body">
              <h6 className="fw-bold text-success">M.D :- Ujjwal Singh</h6>
              <p className="text-muted mb-1">Application Developer</p>
              <i className="bi bi-linkedin text-primary me-2"></i>
              <i className="bi bi-behance text-info me-2"></i>
              <i className="bi bi-dribbble text-danger"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4" data-aos="flip-right" data-aos-delay="300">
          <div className="card border-0 shadow-sm">
            <img
              src="asert/teamimage/naincy.jpg"
              alt="Team Member"
              className="card-img-top rounded-top"
            />
            <div className="card-body">
              <h6 className="fw-bold text-success">M.D :- Achal Priya</h6>
              <p className="text-muted mb-1">Web Developer</p>
              <i className="bi bi-linkedin text-primary me-2"></i>
              <i className="bi bi-twitter text-info me-2"></i>
              <i className="bi bi-instagram text-danger"></i>
            </div>
          </div>
        </div>


        <div className="col-md-4" data-aos="flip-right" data-aos-delay="300">
          <div className="card border-0 shadow-sm">
            <img
              src="asert/teamimage/adarsh.jpg"
              alt="Team Member"
              className="card-img-top rounded-top"
            />
            <div className="card-body">
              <h6 className="fw-bold text-success">Co-Founder :- Adarsh Singh</h6>
              <p className="text-muted mb-1">Business Analyst</p>
              <i className="bi bi-linkedin text-primary me-2"></i>
              <i className="bi bi-twitter text-info me-2"></i>
              <i className="bi bi-instagram text-danger"></i>
            </div>
          </div>
        </div>

      
      </div>
  
  {/* Contect us to make web site */}
      <div className="text-center mb-4 m-4 p-2" data-aos="fade-up">
        <h3 className="fw-bold text-success">For Meaking This Type of Website And Application</h3>
        <h3 className="fw-bold text-success">Please Contect Us! </h3>
        <p className="text-muted">
          The creative minds behind <strong>About Computer Info</strong>
        </p>
      </div>

       <div className="row text-center g-3">
        <div className="col-md-10" data-aos="flip-left">
          <div className="card border-0 shadow-sm">
            
       

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
                <span>Sai baba colony Ameerpet, Near by AAA Mall, Hyderabad, India</span>
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

              
            </div>
          </div>



          </div>
        </div>
        </div>
    </div>
     
     </>
  );






  // return(
  //    <div className="container-fluid">
    


  //    <div
  //     className="container py-5"
  //     style={{
  //       background: "rgba(255, 255, 255, 0.85)",
  //       borderRadius: "15px",
  //       boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  //     }}
  //   >
  //     {/* Header Section */}
  //     <div className="text-center mb-5">
  //       <h1 className="fw-bold text-success">About Computer Info</h1>
  //       <p className="text-muted">
  //         Learn. Explore. Innovate. We simplify complex computer and technology
  //         concepts so that everyone can understand and apply them easily.
  //       </p>
  //     </div>

  //     {/* About Section */}
  //     <div className="row align-items-center g-5 mb-5">
  //       <div className="col-md-6">
  //         <img
  //           src="https://cdn.pixabay.com/photo/2016/11/29/12/54/computer-1869306_1280.jpg"
  //           alt="About Computer Info"
  //           className="img-fluid rounded-4 shadow-sm"
  //         />
  //       </div>
  //       <div className="col-md-6">
  //         <h3 className="fw-bold text-success mb-3">Who We Are</h3>
  //         <p className="text-muted">
  //           We are passionate tech enthusiasts creating easy tutorials and
  //           practical tips on computer basics, AI tools, software tricks, and
  //           digital productivity. Our mission is to make technology learning
  //           **accessible for everyone** — from beginners to professionals.
  //         </p>
  //         <p className="text-muted">
  //           Whether you’re a student, developer, or just curious about tech,
  //           <span className="fw-semibold text-success">
  //             {" "}
  //             About Computer Info{" "}
  //           </span>
  //           is your go-to source for tutorials, guides, and learning.
  //         </p>
  //       </div>
  //     </div>

  //     {/* Mission & Vision Section */}
  //     <div className="row text-center g-4 mb-5">
  //       <div className="col-md-4">
  //         <div className="p-4 rounded shadow-sm h-100 bg-light">
  //           <i className="bi bi-lightbulb-fill text-success fs-1 mb-3"></i>
  //           <h5 className="fw-bold">Our Mission</h5>
  //           <p className="text-muted">
  //             To make computer education simple and accessible by creating
  //             interactive and easy-to-follow tutorials.
  //           </p>
  //         </div>
  //       </div>
  //       <div className="col-md-4">
  //         <div className="p-4 rounded shadow-sm h-100 bg-light">
  //           <i className="bi bi-rocket-takeoff-fill text-success fs-1 mb-3"></i>
  //           <h5 className="fw-bold">Our Vision</h5>
  //           <p className="text-muted">
  //             To empower millions to grow their tech knowledge and skills for
  //             future-ready careers.
  //           </p>
  //         </div>
  //       </div>
  //       <div className="col-md-4">
  //         <div className="p-4 rounded shadow-sm h-100 bg-light">
  //           <i className="bi bi-people-fill text-success fs-1 mb-3"></i>
  //           <h5 className="fw-bold">Our Community</h5>
  //           <p className="text-muted">
  //             Join thousands of learners who share ideas, learn from tutorials,
  //             and improve their tech skills every day.
  //           </p>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Team Section */}
  //     <div className="text-center mb-4">
  //       <h3 className="fw-bold text-success">Meet Our Team</h3>
  //       <p className="text-muted">
  //         The creative minds behind <strong>About Computer Info</strong>
  //       </p>
  //     </div>
  //     <div className="row text-center g-4">
  //       <div className="col-md-4">
  //         <div className="card border-0 shadow-sm">
  //           <img
  //             src="https://cdn.pixabay.com/photo/2016/03/23/22/15/man-1276384_1280.jpg"
  //             alt="Team Member"
  //             className="card-img-top rounded-top"
  //           />
  //           <div className="card-body">
  //             <h6 className="fw-bold text-success">P. Singh</h6>
  //             <p className="text-muted mb-1">Founder & Tech Creator</p>
  //             <i className="bi bi-linkedin text-primary me-2"></i>
  //             <i className="bi bi-youtube text-danger me-2"></i>
  //             <i className="bi bi-github"></i>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="col-md-4">
  //         <div className="card border-0 shadow-sm">
  //           <img
  //             src="https://cdn.pixabay.com/photo/2016/11/29/03/36/man-1867009_1280.jpg"
  //             alt="Team Member"
  //             className="card-img-top rounded-top"
  //           />
  //           <div className="card-body">
  //             <h6 className="fw-bold text-success">Rahul Verma</h6>
  //             <p className="text-muted mb-1">UI/UX Designer</p>
  //             <i className="bi bi-linkedin text-primary me-2"></i>
  //             <i className="bi bi-behance text-info me-2"></i>
  //             <i className="bi bi-dribbble text-danger"></i>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="col-md-4">
  //         <div className="card border-0 shadow-sm">
  //           <img
  //             src="https://cdn.pixabay.com/photo/2019/11/14/12/11/woman-4621252_1280.jpg"
  //             alt="Team Member"
  //             className="card-img-top rounded-top"
  //           />
  //           <div className="card-body">
  //             <h6 className="fw-bold text-success">Neha Sharma</h6>
  //             <p className="text-muted mb-1">Content Manager</p>
  //             <i className="bi bi-linkedin text-primary me-2"></i>
  //             <i className="bi bi-twitter text-info me-2"></i>
  //             <i className="bi bi-instagram text-danger"></i>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>

      
  //       <BodyBg/>

  //   </div>
  // )
  
}