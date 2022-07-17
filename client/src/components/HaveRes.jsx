import React from "react";

function HaveRes() {
  return (
    <section className="send section" id="Contribute">
      <div className="send_container bd-container bd-grid">
        <div className="send_content">
          <h2 className="section-title-center send_title">
            Have A Resource To Share?
          </h2>
          <p className="send_description">
            Want to contribute towards community and add more roadmaps for new
            developers?
            <br />
            Feel free to send us a link and we'll look forward to incorporate
            it.
          </p>
          <form action="">
            <div className="send_direction">
              <input placeholder="Send Resource" className="send_input" />
              <a
                href="mailto:vijay.saikiran@gmail.com"
                className="fas fa-arrow-right fa-3x"
              >
                Send
              </a>
            </div>
          </form>
        </div>
        <div className="send_img">
          <img
            src="https://media.istockphoto.com/photos/kids-hands-share-each-other-colored-pencils-on-a-white-background-picture-id1248290466?k=20&m=1248290466&s=612x612&w=0&h=lXzr52NjREHlMaccxPfvRM_2PblxDjslwkjNwPA5NkQ="
            alt="#"
          />
        </div>
      </div>
    </section>
  );
}

export default HaveRes;
