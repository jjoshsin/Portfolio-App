import "./Home.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useInView, motion } from "framer-motion";
import { home } from "../assets"

export default function Home() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Student", "Software Engineer", "Web Developer"]
    const [text, settext] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        settext(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <section className="home-container">
            <motion.div className="home-left"
                initial={{ x: "-300px", opacity: 0 }}
                animate={{ x: "0px", opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <h1 >Welcome to my Portfolio!</h1>
                <h1>I am a <span>{text}</span></h1>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contacts" className="btn">Contact</Link>
            </motion.div>
            <motion.img
                className="home-right"
                src={home}
                alt=""
                initial={{ x: "300px", opacity: 0 }}
                animate={{ x: "0px", opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />
        </section >
    )
}