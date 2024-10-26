import "./Projects.css";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <div className="projects-container">
            <motion.div
                className="project-name"
                initial={{ x: "-300px", opacity: 0 }}
                animate={{ x: "0px", opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}>
                Project Name:
                <p>YelpCamp Clone</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <p>Portfolio App</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <p>Spelling Beehive</p>
            </motion.div>
            <motion.div
                className="project-description"
                initial={{ y: "-300px", opacity: 0 }}
                animate={{ y: "0px", opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}>
                Project Description:
                <p> • Following Colt Steele’s bootcamp videos, created a web app that allows a user to use CRUD applications based on
                    campgrounds around the U.S using mock data and languages like JavaScript, HTML, and Node as well
                    as other resources like MongoDB, an API, Express, etc.
                    <br />
                    • Organized in a RESTful routing principle, users can add, edit, see, and delete posts about campgrounds.
                    They may also add reviews and also edit, see, delete reviews.
                    <br />
                    • Has full error validation for all routes and also uses BootStrap as its framework</p>
                <br />
                <p> • Created this portfolio application using Reactjs.
                    <br />
                    • Used languages like JavaScript and CSS as well as other resources such as three.js, framer-motion, react-router-dom, etc.,
                    <br />
                    • Has a responsive navigation bar that allows for people to view a home page, about me page, projects page, and a contacts page.
                </p>
                <br />
                <p> • Created a mock spelling beehive game using Java.
                    <br />
                    • With the creation of multiple classes, linked lists, and the use of different libraries, we display a GUI that uses Grid
                    Layout, JMenus, ActionListener to display to the user the letters available on the left, and the words the user
                    guessed on the right while checking data validation of input.
                    <br />
                    • Allows user to input and guess words using JOptionPane and created own class PuzzleGUI that extends the
                    methods of JFrame to create own GUI that holds the dimensions of the GUI.</p>
            </motion.div>
            <motion.div
                className="project-link"
                initial={{ x: "300px", opacity: 0 }}
                animate={{ x: "0px", opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                Project Links:
                <a href="https://yelpcamp-0kb2.onrender.com/" className="website-links">Website Link</a>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <p>No Link yet</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <a href="https://github.com/jjoshsin/Spelling-Beehive" className="website-links">Github Link</a>
            </motion.div>
        </div>
    )
}