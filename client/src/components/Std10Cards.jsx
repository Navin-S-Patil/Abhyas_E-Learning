import React from "react";
import { Link } from "react-router-dom";

function Std10Cards(props) {
  return (
    <div className="decoration_data">
      <img src={props.src} alt="frontend" className="decoration_img" />
      <h3 className="decoration_title">{props.text}</h3>
      <Link to={props.youtube} className="fas ">
        {" "}
        View{" "}
      </Link>
    </div>
  );
}

export default Std10Cards;
