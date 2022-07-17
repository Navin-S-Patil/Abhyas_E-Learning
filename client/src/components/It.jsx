import React from "react";
import Std10Cards from "./Std10Cards";

function It() {
  const It = [
    {
      id: 1,
      src:
        "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg",
      text: "Sem 1",
      youtube: "/Btech/it/sem1"
    },
    {
      id: 2,
      src:
        "https://images.idgesg.net/images/article/2018/10/artificial-intelligence_brain_machine-learning_digital-transformation_world-networking-100777429-large.jpg",
      text: "Sem 2",
      youtube: "sem2"
    },
    {
      id: 3,
      src:
        "https://ceramics.org/wp-content/uploads/2017/07/circuit-board-low-res.jpg",
      text: "Sem 3",
      youtube: "sem3"
    }
  ];

  return (
    <section class="decoration section bd-container" id="explore">
      <h2 class="section-title"> Semister </h2>
      <div class="decoration_container_About bd-grid">
        {It.map((info) => {
          return (
            <Std10Cards
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

export default It;
