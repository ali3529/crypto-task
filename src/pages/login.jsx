import axios from "axios";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import EmailInput from "../components/elements/email_input";
import PasswordInput from "../components/elements/password_input";
import { loginUser } from "../utils/ApiCilent";
import { LOGIN_VALIDATION_SCHEMA } from "../constans/Validation";
import { Link } from "react-router-dom";
import { login } from "../redux/AuthSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/AuthSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [lodaing, setlodaing] = useState(false);
  const [confirmCaptcha, setconfirmCaptcha] = useState(false);
  function onChange(value) {
    setconfirmCaptcha(true);
  }

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: LOGIN_VALIDATION_SCHEMA,
    onSubmit: (values) => {
      if (confirmCaptcha) {
        setlodaing(true);
        loginUser(values).then((res) => {
          dispatch(
            login({
              token: res.data.token,
              isLogin: true,
            })
          );
          setlodaing(false);

          toast.success("login successfully");
          navigate("/", { replace: true });
        });
      }else{
        toast.error("Captcha invalid");
      }
    },
  });

  useEffect(() => {
    if (user?.user?.isLogin || user?.user?.token != null) {
      navigate("/", { replace: true });
    }
  }, []);
  return (
    <>
      <Toaster />
      <div class="container font-dana w-full flex flex-row justify-center h-full bg-gray-100">
        <div class="m-[50px] bg-white h-[1024px] w-[1440px] rounded-[3rem] shadow-md shadow-gray-400 flex flex-row justify-between">
          <div class="flex flex-col w-1/3 bg-[#F8F8FB] justify-center items-center rounded-[3rem] ">
            <div class="flex flex-rocolw space-x-7">
              <div class="flex flex-col text-right">
                <p className="font-bold text-2xl"> ورود به حساب کاربری</p>
                <p className="text-gray-500 text-xl">
                  شرکت توسعه و پخش مک دونالد
                </p>
              </div>
              <img src="/images/logo.png" />
            </div>
            {/* input */}
            <form onSubmit={formik.handleSubmit} className="w-10/12 mt-8">
              <EmailInput formik={formik} />
              {formik.errors.email && formik.touched.email && (
                <small className="text-red-700">{formik.errors.email}</small>
              )}
              <PasswordInput formik={formik} />
              {formik.errors.password && formik.touched.password && (
                <small className="text-red-700">{formik.errors.password}</small>
              )}
              <div className="mt-8 w-full flex justify-center">
                <ReCAPTCHA
                  sitekey="6LfTSA4iAAAAAMzrBEoO3p7xn93RQqDxReOdSVPw"
                  onChange={onChange}
                />
              </div>
              <div className="flex flex-row justify-end items-center space-x-3 mt-6">
                <label className="text-[#282C52]">مرا به خاطر داشته باش</label>
                <input
                  className="w-4 h-4 rounded-xl border-gray-300 focus:rounded-xl bg-[#D4D8FF]"
                  type="checkbox"
                />
              </div>

              <div className="w-full flex justify-center mt-8">
                <button
                  type="submit"
                  className="text-white bg-[#0116CB] flex justify-center items-center rounded-xl w-full h-14"
                >
                  {lodaing ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-16 h-10 animate-pulse"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  ) : (
                    "ورود"
                  )}
                </button>
              </div>

              <div className="flex flex-row space-x-2 mt-6 justify-end w-10/11">
                <Link className="text-[#0116CB]" to="/register">
                  ثبت نام{" "}
                </Link>
                <label>کاربر جدید هستید ؟</label>
              </div>
            </form>

            <div className="w-10/12 mt-8 flex justify-center items-center">
              <span className="bg-[#E9EBFF] w-1/3 h-[1px]"> </span>
              <span className="">یا</span>
              <span className="bg-[#E9EBFf] w-1/3  h-[1px]"></span>
            </div>

            <div className="w-10/12 mt-8 ">
              <button className="bg-[#E9EBFF] rounded-xl w-full h-16 flex flex-row justify-center items-center">
                ورود از طریق حساب گوگل
                <img src="/images/google-icon.png" />
              </button>
            </div>
          </div>

          {/* <div class="flex flex-col w-2/3 mt-4 t">
                <input
                  class=" appearance-none border border-[#E9EBFF]  rounded-lg w-full text-right
             py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="ایمیل یا کد ملی خود را وارد کنید"
                />
              </div>
              <img src="image/mdi-light_account.png"/>
            </div> */}

          <div class="flex flex-row w-2/3 justify-end items-center rounded-[3rem]">
            <img className="rounded-[3rem]" src="/images/View.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
