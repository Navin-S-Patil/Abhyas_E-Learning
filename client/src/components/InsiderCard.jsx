import React from "react";
import { Link } from "react-router-dom";

function InsiderCard(props) {
  return (
    <div className="decoration_data">
      <img src={props.src} alt="frontend" className="decoration_img" />
      <h3 className="decoration_title">{props.text}</h3>

      {localStorage.getItem("authToken") ? (
        <a href={props.youtube} className="fas" target="_blank">
          {" "}
          View{" "}
        </a>
      ) : (
        <Link className="fas" to="/login">
          {" "}
          View{" "}
        </Link>
      )}
    </div>
  );
}

export default InsiderCard;
