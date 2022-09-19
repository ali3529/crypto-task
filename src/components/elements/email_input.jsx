import React from "react";

function EmailInput({formik}) {
  return (
    <>
      <div className="w-full flex justify-end">
        <lable>نام کاربری</lable>
      </div>
      <div
        class="  my-2 mx-auto   focus:shadow-outline border bg-white border-[#E9EBFF] w-full
   justify-end flex items-center rounded-xl"
      >
        <div class="  w-full h-full py-1">
          <input
           name="email"
            type="search"
            x-model="input3"
            class="appearance-none px-1  rounded-lg w-full h-full text-right
        py-3  text-gray-700   focus:outline-none text-sm placeholder:text-sm placeholder:text-[#6B72B6]"
            placeholder="ایمیل یا کد ملی خود را وارد کنید"
            onChange={formik.handleChange}
         value={formik.values.email}
          />
        </div>
        <div className="mr-2 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-8 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>

        {/* <div>
      <button
        type=" submit"
        class="flex items-center bg-white rounded-l-md border border-white justify-center w-12 h-12 text-white "
      >
      

         
      </button>
    </div> */}
      </div>
    </>
  );
}

export default EmailInput;
