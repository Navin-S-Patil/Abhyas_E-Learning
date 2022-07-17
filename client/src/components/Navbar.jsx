import { React, useState } from "react";
import NavbarItems from "./NavbarItems";
import { Link } from "react-router-dom";
import axios from "axios";
import "./navbar.css";

const items = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Courses", link: "" },
  { id: 3, title: "Contribute", link: "" },
  { id: 4, title: "Our Team", link: "ourTeam" },
  { id: 5, title: "Login", link: "login" },
];

function Navbar() {
  // const username = async ()=>{
  //     const config = {
  //         headers: {
  //           "content-type": "application/json",
  //           "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
  //       }
  //     };

  //     try {
  //       const { data } = await axios.get("/api/auth/private", config);
  //       console.log(data)
  //       setPrivateData(data.data);
  //     }catch(error){
  //       localStorage.removeItem("authToken");
  //       setError("You are not authorized, please login again");
  //     }
  // }

  return (

   <header style={{ position: "sticky" }}>
      <nav className="nav bd-container">
        <Link to="/" className="nav_logo">
          Abhyas
        </Link>

        <div className="nav_menu" id="nav-menu">
          <ul className="nav_list">
            <NavbarItems detail="Home" link="/" />
            <NavbarItems detail="Courses" link="" />
            <NavbarItems detail="Contribute" link="" />
            <NavbarItems detail="Our Team" link="ourTeam" />
            {localStorage.getItem("authToken") ? (
              <NavbarItems detail={"Logout"} link="logout" />
            ) : (
              <NavbarItems detail={"Login"} link="login" />
            )}
          </ul>
        </div>

        <div className="nav_toggle" id="nav-toggle">
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>

    
  );
}

export default Navbar;

{/* <header style={{ position: "sticky" }}>
      <nav className="nav bd-container">
        <Link to="/" className="nav_logo">
          Abhyas
        </Link>

        <div className="nav_menu" id="nav-menu">
          <ul className="nav_list">
            <NavbarItems detail="Home" link="/" />
            <NavbarItems detail="Courses" link="" />
            <NavbarItems detail="Contribute" link="" />
            <NavbarItems detail="Our Team" link="ourTeam" />
            {localStorage.getItem("authToken") ? (
              <NavbarItems detail={"Logout"} link="logout" />
            ) : (
              <NavbarItems detail={"Login"} link="login" />
            )}
          </ul>
        </div>

        <div className="nav_toggle" id="nav-toggle">
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header> */}


// const [error, setError] = useState("");
// const [privateData, setPrivateData] = useState("");

// useEffect(() => {
//   if(!localStorage.getItem("authToken")){
//     let log = "Logout";
//   }

//   const fetchPrivateData = async () => {
//     const config = {
//       headers: {
//         "content-type": "application/json",
//         "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
//     }
//   };
//   try {
//     const { data } = await axios.get("/api/auth/private", config);
//     setPrivateData(data.user);
//   }catch(error){
//     localStorage.removeItem("authToken");
//     setError("You are not authorized, please login again");
//   }
//   }
//   fetchPrivateData();
// }, [history])
