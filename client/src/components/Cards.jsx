import React from "react";
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <div className="decoration_data">
      <img src={props.src} alt="frontend" className="decoration_img" />
      <h3 className="decoration_title" style={{ color: "whitesmoke" }}>
        {props.text}
      </h3>
      <Link to={props.link} className="fas arrow">
        {" "}
        &#8594;{" "}
      </Link>
    </div>
  );
}

export default Cards;
