import React from "react";
import InsiderCard from "./InsiderCard";

function Sem1() {
  const Sem1 = [
    {
      id: 1,
      src: "https://www.pnnl.gov/sites/default/files/styles/hero_1600x1200/public/media/image/Applied-Mathematics_0.jpg?itok=ZdX2R_As",
      text: "Applied Mathematics - 1",
      youtube:
        "https://www.youtube.com/playlist?list=PL5fCG6TOVhr73GZ2jh3QzQ6xDOKeqxtL-",
    },
    {
      id: 2,
      src: "https://images.theconversation.com/files/191827/original/file-20171025-25516-g7rtyl.jpg?ixlib=rb-1.1.0&rect=0%2C70%2C7875%2C5667&q=45&auto=format&w=926&fit=clip",
      text: "Applied Physics - 1",
      youtube:
        "https://www.youtube.com/playlist?list=PL0s3O6GgLL5eHtvSjz8Cv6zLoxinuZQh9",
    },
    {
      id: 3,
      src: "https://chemistry.iitd.ac.in/public/storage/img_gallery/1_0001_jobs.newscientist_1621397928.jpg",
      text: "Applied Chemistry - 1",
      youtube:
        "https://www.youtube.com/playlist?list=PLm_MSClsnwm9p_yaZ8zIW1LxkK7_n98gD",
    },
    {
      id: 4,
      src: "https://images.idgesg.net/images/article/2018/10/artificial-intelligence_brain_machine-learning_digital-transformation_world-networking-100777429-large.jpg",
      text: "C Language",
      youtube:
        "https://youtube.com/playlist?list=PLVONEN7ojmy8Qmffq2-Gfa07QrKDjP8zr",
    },
    {
      id: 5,
      src: "https://ceramics.org/wp-content/uploads/2017/07/circuit-board-low-res.jpg",
      text: "Electronics",
      youtube:
        "https://www.youtube.com/playlist?list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80", 
      text: "Introduction to Computers",
      youtube:
        "https://www.youtube.com/playlist?list=PLWPirh4EWFpF_2T13UeEgZWZHc8nHBuXp",
    },
  ];

  return (
    <section class="decoration section bd-container" id="explore">
      <h2 class="section-title"> Sem 1 </h2>
      <div class="decoration_container_About bd-grid">
        {Sem1.map((info) => {
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

export default Sem1;
