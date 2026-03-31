"use client";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
// import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/anushramesh07/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — anushramesh07
              </a>
            </p>
            <p>
              <a
                href="mailto:anushramesh2023@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                anushramesh2023@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech Electrical & Computer Engineering, Amrita Vishwa Vidyapeetham, Coimbatore — 2023–Present
            </p>
            <p style={{ marginTop: "1rem" }}>
              Senior Secondary Schooling, Delhi Public School, Ruby Park, Kolkata — 2009–2023
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/CoderAnush"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <FaGithub /> GitHub <MdArrowOutward style={{ marginLeft: "auto" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/anushramesh07/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <FaLinkedin /> LinkedIn <MdArrowOutward style={{ marginLeft: "auto" }} />
            </a>
            <a
              href="mailto:anushramesh2023@gmail.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <FaEnvelope /> Email <MdArrowOutward style={{ marginLeft: "auto" }} />
            </a>
            <a
              href="https://www.instagram.com/itzz_anush_7/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <FaInstagram /> Instagram <MdArrowOutward style={{ marginLeft: "auto" }} />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Anush Ramesh</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
