import React from "react";
import { Link } from "react-router-dom";
import InstagramBAW from "./img/Instagram_BlackAndWhite.png";
import GithubBAW from "./img/Github_BlackAndWhite.png";
import LinkedinBAW from "./img/Linkedin_BlackAndWhite.png";

function Footer() {
  return (
    <footer className="footer section" id="contact">
      <div className="footer_container bd-container bd-grid">
        <div className="footer_content">
          <h3 className="footer_title">
            <Link to="/" className="footer_logo">
              Abhyas
            </Link>
          </h3>
          <p className="footer_description">
            Perfect place to find your <br />
            pathway.
          </p>
        </div>

        <div className="footer_content">
          <h3 className="footer_title">Our Categaries</h3>
          <ul>
            <li>
              <Link to="/class10" className="footer_link">
                Std 10
              </Link>
            </li>
            <li>
              <Link to="/class11" className="footer_link">
                Std 11
              </Link>
            </li>
            <li>
              <Link to="/class12" className="footer_link">
                Std 12
              </Link>
            </li>
            <li>
              <Link to="/Btech" className="footer_link">
                Btech
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer_content">
          <h3 className="footer_title">Our Services</h3>
          <ul>
            <li>
              <Link to="/ourTeam" className="footer_link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="" className="footer_link">
                Video Courses
              </Link>
            </li>
            <li>
              <a href="#send" className="footer_link">
                Share Resources
              </a>
            </li>
          </ul>
        </div>

        <div className="footer_content">
          <h3 className="footer_title">Social</h3>
          <a href="https://www.instagram.com/" className="footer_social">
            <img src={InstagramBAW} className="Footer_logos" alt="Instagram" />
          </a>
          <a href="https://github.com/" className="footer_social">
            <img src={GithubBAW} className="Footer_logos" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/" className="footer_social">
            <img src={LinkedinBAW} className="Footer_logos" alt="Instagram" />
          </a>
        </div>
      </div>

      <p className="footer_copy">&#169; 2022 ABHYAS All right reserved</p>
    </footer>
  );
}

export default Footer;
