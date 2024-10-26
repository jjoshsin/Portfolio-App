import "./NavigationBar.scss";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion"
import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";


export default function NavigationBar() {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="nav">
            <Link to="/" className="site-title a"><span>Joshua Sin</span></Link>
            <ul className="app-bar-links">
                <CustomLink to="/" name="Home" className="a" />
                <CustomLink to="/about" name="About Me" className="a" />
                <CustomLink to="/projects" name="Projects" className="a" />
                <CustomLink to="/contacts" name="Contact" className="a" />
                <li>
                    <Link to="https://www.linkedin.com/in/joshua-sin-453b5017a/"> <FaLinkedin className="linkedin-icon" /> </Link>
                </li >
                <li>
                    <Link to="https://github.com/jjoshsin"> <FaGithub className="github-icon" /> </Link>
                </li >
            </ul>

            <div className="app-navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: "easeOut" }}>
                        <HiX onClick={() => setToggle(false)} />
                        <ul className="menu-links">
                            <ul>
                                <li>
                                    <a href="/" onClick={() => setToggle(false)}>Home</a>
                                </li>
                                {['about', 'projects', 'contacts'].map((item) => (
                                    <li key={item}>
                                        <a href={`/${item}`} onClick={() => setToggle(false)}>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </ul>
                    </motion.div>
                )
                }
            </div >
        </nav >
    );
}