import "./styles.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import React, { useState, useLayoutEffect } from "react";

import Navbar from "./components/Navbar";
import EntryImg from "./components/EntryImg";
import CardSection from "./components/CardSection";
import AboutUs from "./components/AboutUs";
import Std10 from "./components/Std10";
import Std11 from "./components/Std11";
import Std12 from "./components/Std12";
import Btech from "./components/Btech";
import BottomSame from "./components/BottomSame";
import It from "./components/It";
import Login from "./components/Login.jsx";
import Sem1 from "./components/Sem1";
import Sem2 from "./components/Sem2";
import Sem3 from "./components/Sem3";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

function App() {
  // const [user, setUser] = useState({});

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <BrowserRouter>
      <Wrapper>
        <Navbar/>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <EntryImg /> <CardSection />
              </div>
            }
          />
          {/* <Route path="login" /> */}
          {/* Work here */}

          {/* user&&user._id ? <Navigate to="/" /> :  */}

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<Navigate to="/" />} />
          <Route exact path="/login/register" element={<Register />} />
          <Route exact path="/login/forgetpassword" element={<ForgotPassword />} />
          <Route exact path="/passwordreset/:resetToken" element={<ResetPassword />} />

          {/* forgetpassword */}
          {/* <Route exact path="/forgetpassword" element={<Register />} />
        <Route exact path="/passwordreset/:resetToken" element={<Register />} /> */}

          <Route path="/ourTeam" element={<AboutUs />} />
          <Route path="/class10" element={<Std10 />} />
          <Route path="/class11" element={<Std11 />} />
          <Route path="/class12" element={<Std12 />} />


          <Route exact path="/Btech" element={<Btech />} />
          <Route exact path="/Btech/it" element={<It />} />
          <Route exact path="/Btech/it/sem1" element={<Sem1 />} />
          <Route exact path="/Btech/it/sem2" element={<Sem2 />} />
          <Route exact path="/Btech/it/sem3" element={<Sem3 />} />
        </Routes>
        <BottomSame />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
