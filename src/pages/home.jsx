import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/AuthSlice";
import { useNavigate } from "react-router-dom";
import CurrencyChart from "../components/currency_chart";
function Home() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.user?.isLogin || user?.user?.token == null) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <div class="container font-dana w-full flex flex-row justify-center h-full bg-gray-100">
        <div class="m-[50px] bg-white h-[1024px] w-[1440px] rounded-[1rem] shadow-md shadow-gray-400 flex p-24 flex-row  justify-center">
          <CurrencyChart />
        </div>

        
      </div>

    </div>
  );
}

export default Home;
