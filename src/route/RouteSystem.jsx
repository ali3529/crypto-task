import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import App from '../App';
import CurrencyChart from '../components/currency_chart';
import CurrencySingleChart from '../pages/currency_single_chart';
import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';
function RouteSystem() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="Login" element={<Login />} />
      <Route path="chart/:simbol" element={<CurrencySingleChart />} />
    </Routes>

  )
}

export default RouteSystem