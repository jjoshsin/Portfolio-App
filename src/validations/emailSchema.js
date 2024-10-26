import * as yup from "yup";

export const emailSchema = yup.object().shape({
    name: yup.string().required("Name required!"),
    email: yup.string().email("Please enter a valid email!").required("Email required!"),
    subject: yup.string(),
    message: yup.string().required("Please enter a message!"),
})