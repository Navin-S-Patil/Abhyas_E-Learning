import React from "react";
import Std10Cards from "./Std10Cards";
import InsiderCard from "./InsiderCard";

function Btech() {
  const BtechInfo = [
    // {
    //   id: 1,
    //   src:
    //     "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg",
    //   text: "Informtion Technology",
    //   youtube: "/Btech/it"
    // },
    {
      id: 2,
      src:
        "https://images.idgesg.net/images/article/2018/10/artificial-intelligence_brain_machine-learning_digital-transformation_world-networking-100777429-large.jpg",
      text: "Computer Science",
      youtube:
        "https://youtube.com/playlist?list=PLVONEN7ojmy8Qmffq2-Gfa07QrKDjP8zr"
    },
    {
      id: 3,
      src:
        "https://ceramics.org/wp-content/uploads/2017/07/circuit-board-low-res.jpg",
      text: "Electronics and Computer Engineering",
      youtube:
        "https://youtube.com/playlist?list=PLVLoWQFkZbhXAipqg8dmzLQOED1uxgUTx"
    }
  ];

  return (
    <section class="decoration section bd-container" id="explore">
      <h2 class="section-title">
        {" "}
        B.Tech Majors <br />
        Subjects
      </h2>
      <div class="decoration_container_About bd-grid">
        <Std10Cards
              src="https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"
              text="Information Technology"
              youtube="/Btech/it"
              />
        {BtechInfo.map((info) => {
          return (
            <InsiderCard
              key={info.id}
              src={info.src}
              text={info.text}
              youtube={info.youtube}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Btech;
