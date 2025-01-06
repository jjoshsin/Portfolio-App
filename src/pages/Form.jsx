import { useFormik } from "formik";
import { emailSchema } from "../validations/emailSchema";
import "./Form.css";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";

export default function Form() {
    const form = useRef();
    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
    } = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validationSchema: emailSchema,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
        if (!values.name) {
            validationErrors.name = "Name is required!"
        }

        if (!values.email) {
            validationErrors.email = "Email is required!"
        }
        if (!values.message) {
            validationErrors.message = "Message is required!"
        }

        if (Object.keys(validationErrors).length === 0) {
            values.name = "";
            values.email = "";
            values.subject = "";
            values.message = "";
            emailjs
                .sendForm('service_rgiy7e3', 'template_704jnuq', form.current, {
                    publicKey: 'eFA-uDCCZoKllOKny',
                })
                .then(
                    (e) => {
                        toast.success("SUCCESSFULLY SUBMITTED");
                        e.target.reset();
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
        else {
            toast.alert("SOMETHING WENT WRONG!")
        }
    }

    return (
        <motion.div
            className="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
        >
            <form ref={form} onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name && touched.name ? "input-error" : ""}
                />
                {errors.name && touched.name && <p className="error">{errors.name}</p>}
                <label htmlFor="email">Email</label>
                <input
                    value={values.email}
                    onChange={handleChange}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    onBlur={handleBlur}
                    className={errors.email && touched.email ? "input-error" : ""}
                />
                {errors.email && touched.email && <p className="error">{errors.email}</p>}
                <label htmlFor="subject">Subject</label>
                <input
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Enter a subject"
                />
                <label htmlFor="message">Message</label>
                <textarea
                    value={values.message}
                    onChange={handleChange}
                    rows="6"
                    name="message"
                    onBlur={handleBlur}
                    id="message"
                    className={errors.message && touched.message ? "input-error" : ""}
                ></textarea>
                {errors.message && touched.message && (<p className="error">{errors.message}</p>)}
                <button type="submit" className="btn ">Submit</button>
                <Toaster position="top-center" />
            </form>
        </motion.div>
    );
};