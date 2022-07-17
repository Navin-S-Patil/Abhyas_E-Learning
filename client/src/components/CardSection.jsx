import React from "react";
import Cards from "./Cards";

function CardSection(props) {
  const cardsInfo = [
    {
      id: 1,
      card_text: "class 10",
      card_link: "class10",
      card_src:
        "https://static.scientificamerican.com/blogs/cache/file/FE946D19-DD8A-4F50-968B5E142460AFCE_source.jpg?w=590&h=800&F34CBDA2-EC01-40A3-93FC20A458CC0C05"
    },
    {
      id: 2,
      card_text: "class 11",
      card_link: "class11",
      card_src:
        "https://media.gettyimages.com/photos/abstract-curly-tendrils-background-picture-id888421376?s=2048x2048"
    },
    {
      id: 3,
      card_text: "class 12",
      card_link: "class12",
      card_src:
        "https://media.gettyimages.com/photos/blackboard-full-of-equations-picture-id154932300?s=2048x2048"
    },
    {
      id: 4,
      card_text: "BTech",
      card_link: "Btech",
      card_src:
        "https://media.gettyimages.com/photos/scientific-ideas-picture-id1165359452?s=2048x2048"
    }
  ];

  return (
    <section
      className="decoration section bd-container"
      id="Courses"
      style={{ paddingTop: "6%" }}
    >
      <h2 className="section-title" style={{ marginBottom: "4%" }}>
        {" "}
        OUR COURSE CATEGARIES
      </h2>

      <div className="decoration_container bd-grid">
        {cardsInfo.map((info) => {
          return (
            <Cards
              key={info.id}
              text={info.card_text}
              src={info.card_src}
              link={info.card_link}
            />
          );
        })}
      </div>
    </section>
  );
}

export default CardSection;
