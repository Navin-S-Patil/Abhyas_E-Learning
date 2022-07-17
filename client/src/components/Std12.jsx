import React from "react";
import InsiderCard from "./InsiderCard";

function Std12() {

    const std12Info = [{
        id: 1,
        src: "https://images.hindustantimes.com/rf/image_size_444x250/HT/p2/2020/04/15/Pictures/_a6aa061c-7f1c-11ea-aedf-4d2519fcedc3.jpg",
        text: "Mathemtics",
        youtube: "https://youtube.com/playlist?list=PLKKfKV1b9e8qRtBEpJNyt8jy4OZ4sWYy_"
    }, {

        id: 2,
        src: "https://jobs.newscientist.com/getasset/c40a5488-11be-43b0-843f-a2e6ef9f0612/",
        text: "Chemistry",
        youtube: "https://www.youtube.com/playlist?list=PLbu_fGT0MPssj3hcRSLZS3V5Y8GrRUNZD"
    }, {
        id: 3,
        src: "https://thumbs-prod.si-cdn.com/s-jZTk0XtVmp-89MlOgFXqaAVe4=/fit-in/1600x0/https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png",
        text: "Physics",
        youtube: "https://www.youtube.com/playlist?list=PLbu_fGT0MPssdFZwufRvGRvlrSVpnVAun"
    }, 
    {
        id: 4,
        src: "https://thumbs-prod.si-cdn.com/s-jZTk0XtVmp-89MlOgFXqaAVe4=/fit-in/1600x0/https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png",
        text: "Biology",
        youtube: "https://youtube.com/playlist?list=PLVLoWQFkZbhU9wgMK7nJv0eZK4gcaI8FJ"
    }]

    return (
        <section class="decoration section bd-container" id="explore">
            <h2 class="section-title"> Std 12 <br />
                Subjects
            </h2>
            <div class="decoration_container bd-grid">
                {std12Info.map((info) => {
                    return <InsiderCard key={info.id} src={info.src} text={info.text} youtube={info.youtube} />
                })}
            </div>
        </section>
    )

}

export default Std12;