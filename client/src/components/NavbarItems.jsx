import React from "react";
import { Link } from "react-router-dom";

function NavbarItems(props) {
  function handleClick() {
    props.detail === "Courses" &&
      document.getElementById(props.detail).scrollIntoView();
    props.detail === "Contribute" &&
      document.getElementById(props.detail).scrollIntoView();
      if (props.detail === "Logout") {
        localStorage.removeItem("authToken");
        window.location.reload();
      }
  }


  return (
    <li className="nav_item">
      {
        <Link onClick={handleClick} to={props.link} className="nav_link">
          {props.detail}
        </Link>
      }

    </li>
  );
}

export default NavbarItems;
