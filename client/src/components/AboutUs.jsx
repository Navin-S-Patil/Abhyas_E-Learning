import React from "react";
import Instagram from "./img/instagram_PNG10.png";
import Github from "./img/github.png";
import Linkedin from "./img/linkedIn_PNG32.png";

//photo img
import Navin from "./img/Navin.jpg";
import Saikiran from "./img/Saikiran.jpg";
import Rajat from "./img/Rajat.jpg";
import Arpita from "./img/Arpita.jpg";

function AboutUs() {
  const teams = [
    {
      name: "Navin Patil",
      img: Navin,
      footTitle: "",
      instagram: "https://www.instagram.com/_navin_patil/",
      github: "https://github.com/Navin-S-Patil",
      linkedin: "https://www.linkedin.com/in/navin-patil-33844b193/",
    },
    {
      name: "Rajat Nayak",
      img: Rajat,
      footTitle: "",
      instagram: "https://www.instagram.com/rajat_7_1/",
      github: "https://github.com/Rajat71",
      linkedin: "https://www.linkedin.com/in/rajat-nayak-442491221/",
    },
    {
      name: "Saikiran Rao",
      img: Saikiran,
      footTitle: "",
      instagram: "https://www.instagram.com/golgappa_sai/",
      github: "https://github.com/PirateSai",
      linkedin: "https://www.linkedin.com/in/saikiran-rao-1b9327212",
    },
    {
      name: "Arpita Acharya",
      img : Arpita,
      footTitle: "", 
      instagram: "https://www.instagram.com/_silentmaniac_/",
      github: "https://github.com/ALMANADO",
      linkedin: "",
    }
  ];

  return (
    <section className="decoration section bd-container" id="explore">
      <h1 className="section-title">Our Team</h1>
      <br />
      <h3 className="mid">
        This project wouldn't have been possible without the contribution of
        each and every member of our team
      </h3>

      <br />

      <div class="decoration_container bd-grid">
        {teams.map((team) => {
          return (
            <div className="decoration_data pad">
              <img src={team.img} className="img-responsive" alt="Member Photo" />
              <h3 class="decoration_title">{team.name}</h3>
              <div class="footer_content">
                <h3 class="footer_title"></h3>
                <a href={team.instagram} className="footer_social">
                  <img src={Instagram} className="about_logo" alt="Instagram" />
                </a>
                <a href={team.github} className="footer_social">
                <img src={Github} className="about_logo" alt="Github" />
                </a>
                <a href={team.linkedin} className="footer_social">
                <img src={Linkedin} className="about_logo" alt="Linkedin" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AboutUs;
