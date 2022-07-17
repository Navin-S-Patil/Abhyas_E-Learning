import React from "react";
import InsiderCard from "./InsiderCard";

function Std10() {

    const std10Info = [{
        id: 1,
        src: "https://images.hindustantimes.com/rf/image_size_444x250/HT/p2/2020/04/15/Pictures/_a6aa061c-7f1c-11ea-aedf-4d2519fcedc3.jpg",
        text: "Mathemtics",
        youtube: "https://youtube.com/playlist?list=PLVLoWQFkZbhUOneTVM7EqHEeYLW8MfGuH"
    }, {

        id: 2,
        src: "https://jobs.newscientist.com/getasset/c40a5488-11be-43b0-843f-a2e6ef9f0612/",
        text: "Chemistry",
        youtube: "https://youtube.com/playlist?list=PLVONEN7ojmy8Qmffq2-Gfa07QrKDjP8zr"
    }, {
        id: 3,
        src: "https://s3-ap-south-1.amazonaws.com/blogmindler/bloglive/wp-content/uploads/2018/12/12163355/Pure-Science-Courses-After-Class-12th.png",
        text: "Physics",
        youtube: "https://youtube.com/playlist?list=PLVLoWQFkZbhXAipqg8dmzLQOED1uxgUTx"
    }]

    return (
        <section class="decoration section bd-container" id="explore">
            <h2 class="section-title"> Std 10 <br />
                Subjects
            </h2>
            <div class="decoration_container_About bd-grid">
                {std10Info.map((info) => {
                    return <InsiderCard key={info.id} src={info.src} text={info.text} youtube={info.youtube} />
                })}
            </div>
        </section>
    )

}

export default Std10;