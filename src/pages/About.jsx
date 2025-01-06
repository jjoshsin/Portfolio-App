import "./About.css";
import BallCanvas from "./canvas/BallCanvas";
import { technologies } from "../constants/index.js";
import { motion } from "framer-motion";

export default function About() {

    return (
        <section className="about-container">
            <div
                className="about-top"
            >
                <p>I am currently a 20 year old junior at CUNY Queens College with an expected
                    graduation date of May 2026, pursuing a Bachelor's in Computer Science. This
                    is actually my very first personal project after finishing my bootcamp on web development.
                    I am looking to become a full-stack software developer in the future.</p>
                <br />
                <p>For my strongest language, I would have to say that I honestly do not have one.
                    I would say that I have an equal amount of skill in all the languages I have learned so far, which is decent.
                    As for my future projects, I will likely immerse myself in both front end like this project as well as back end, using a variety of languages.
                    I enjoy the process of working with data and learning how to best implement them into applications.
                    This is also my first step into React.js as well and would like to get more comfortable using it. Below are my current languages and technologies
                    I have learned so far.
                    Please look forward to my journey as a developer and engineer!
                </p>
            </div>
            <br />
            <div
                className="about-bottom"
            >
                {technologies.map((technology) => (
                    <div key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div>
        </section>
    )
}