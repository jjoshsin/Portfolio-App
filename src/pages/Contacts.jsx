import Form from "./Form";
import "./Contacts.css";
import { motion } from "framer-motion";


export default function Contacts() {
    return (
        <section className="contact-container">
            <motion.div
                initial={{ x: "-300px", opacity: 0 }}
                animate={{ x: "0px", opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h1 className="heading">Contact Me! </h1>
                <div className="contact-message">
                    <p>I am open to internships/job opportunities as of right now. Please feel free to contact me through this page or through linkedin.
                        You can also just send me personal messages as well just to talk!</p>
                </div>
            </motion.div>
            <motion.div
                initial={{ x: "300px", opacity: 0 }}
                animate={{ x: "0px", opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <Form></Form>
            </motion.div>
        </section>
    )
}