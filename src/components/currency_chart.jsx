import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function CurrencyChart() {
  const [CurrencyData, setCurrencyData] = useState([]);
  const [simbol, setsimbol] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getCurrencyData();
  }, []);

  const getCurrencyData = (async) => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Clitecoin%2Cripple%2Cbitcoin-cash%2Ctornado-cash&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true"
      )
      .then((res) => {
        setsimbol(Object.keys(res.data));
        setCurrencyData(res.data);
      });
  };

  const showChart = (simbol) => {
    navigate(`/chart/${simbol}`);
  };
  return (
    <div dir="rtl" class="flex w-full flex-col mt-10 rtl">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="border-b ">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-right"
                  >
                    نام
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-right"
                  >
                    آخرین قیمت
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-right"
                  >
                    تغییرات 24 ساعت اخیر
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-right"
                  >
                    حجم 24 ساعت اخیر
                  </th>
                </tr>
              </thead>
              <tbody>
                {simbol.map((curencySimbol) => (
                  <tr class="border-b cursor-pointer" onClick={() => showChart(curencySimbol)}>
                    <td class="text-sm text-gray-900 flex items-center font-light px-6 py-4 whitespace-nowrap">
                      <img
                        className="rounded-full ml-3 w-12 h-12"
                        src={`/images/simbol/${curencySimbol}.png`}
                      />
                      {curencySimbol}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {CurrencyData[curencySimbol]?.usd?.toFixed(2)}
                    </td>
                    <td
                      class={`text-sm  ${
                        CurrencyData[curencySimbol]?.usd_24h_change > 0
                          ? "text-green-300"
                          : " text-red-600"
                      } font-light px-6 py-4 whitespace-nowrap`}
                    >
                      {CurrencyData[curencySimbol]?.usd_24h_change?.toFixed(2)}
                    </td>

                    <td
                      class={`text-sm  ${
                        CurrencyData[curencySimbol]?.usd_24h_vol > 0
                          ? "text-green-300"
                          : " text-red-600"
                      } font-light px-6 py-4 whitespace-nowrap`}
                    >
                      {CurrencyData[curencySimbol]?.usd_24h_vol?.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyChart;
