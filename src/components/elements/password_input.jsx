import React from "react";

function PasswordInput({formik}) {
  return (
    <>
      <div className="w-full flex justify-end">
        <lable>کلمه عبور</lable>
      </div>
      <div
        class="  my-2 mx-auto   focus:shadow-outline border bg-white border-[#E9EBFF] w-full
 justify-end flex items-center rounded-xl"
      >
        <div class="  w-full h-full py-1">
          <input
           name="password"
            type="search"
            x-model="input3"
            class="appearance-none px-1  rounded-lg w-full h-full text-right
      py-3  text-gray-700   focus:outline-none text-sm placeholder:text-[#6B72B6]"
            placeholder="کلمه عبور خود را وارد کنید"
            onChange={formik.handleChange}
         value={formik.values.password}
          />
        </div>
        <div className="mr-2 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
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

export default PasswordInput;
