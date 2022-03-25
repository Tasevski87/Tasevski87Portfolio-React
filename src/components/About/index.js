import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

    return (
        <section className="my-5" >
            <h3 id="about">Who am I?</h3>

        
            <div className="my-2">
                <p>
                    Hi. My name is Toshe Tasevski.
                    Im born 10th of January 1987 in Veles, Republic of Macedonia. I went to college in city of Bitola to the University of Kliment Ohridski where i attned three year program of Computer Science where I studyed C++. June 5th 2008 I moved to the united states where first I lived and worked for the National Park Yellowstone. Later on I decide to move to Columbu Ohio where i met my wife. I always have pation towards programing so i decide to continue and upgrade my self. October 2021 I joined the Ohio State Cooding Bootcamp amd im studying to be a Full Stack Developer.
                </p>
                <img src={coverImage} className="my-2" style={{ width: "30%" }} alt="cover" />
            </div>
        </section>
    )
}

export default About

