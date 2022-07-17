import React from "react"

function EntryImg() {

  function handleClick() {
    document.getElementById("Courses").scrollIntoView();
}

    return (<section className="home" id="home">
    <div className="home_container bd-container bd-grid">
      <div className="home_img">
        <img
          src="https://ied.eu/wp-content/uploads/2020/06/digital-transformation-webinars.jpg"
          alt="map"
        />
      </div>
      <div className="home_data">
        <h1 className="home_title">
          LET US MAKE LEARNING EASY
        </h1>
        <p className="home_description">
          Find A Compilation Of Resources To
          Get Started
        </p>
        <a onClick={handleClick} className="fas fa-arrow-right fa-3x cursor">View Resources</a>
      </div>
    </div>
  </section>)
}

export default EntryImg;