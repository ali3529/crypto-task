import React from 'react'
import { useParams } from 'react-router-dom';
import TradingViewWidget from 'react-tradingview-widget';


function CurrencySingleChart() {
    const { simbol } = useParams();
    const refactorSombol=simbol=="litecoin"?"ltc":simbol=="bitcoin"?"btc":''
  return (
    <div><TradingViewWidget symbol={refactorSombol} /></div>
  )
}

export default CurrencySingleChart