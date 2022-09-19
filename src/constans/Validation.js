import * as Yup from "yup";
export const LOGIN_VALIDATION_SCHEMA=()=>{
    return Yup.object({
        email: Yup.string()
        .email()
        .required("لطفا ایمیل خود را وارد کنید")
        .email("فرمت ایمیل اشتباه است"),
        password: Yup.string().required("لطفا پسورد خود را وارد کنید"),
    })
}