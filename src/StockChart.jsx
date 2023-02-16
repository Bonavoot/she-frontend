// import stockChartImage from "./assets/stock-chart-5-year.png"
// const StockChart = () => {
//     return (
//         <div className="stock-chart">
//             <img className="stock-chart"  src={stockChartImage} alt="chart" />
//         </div>
//     )
// }
// export default StockChart
// import React, { useEffect } from 'react';

import {useState, useEffect} from "react"
import Chart from 'react-apexcharts';



const StockChart = () => {
     const [price, setPrice] = useState(-1)
     const [prevPrice, setPrevPrice] = useState(-1)
     const [priceTime, setPriceTime] = useState(null)
     const [series, setSeries] = useState([{data: []}])
     

     const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
     let stockSymbol = 'tsla';
     let API_Call = `${proxyUrl}https://query1.finance.yahoo.com/v8/finance/chart/${stockSymbol}`;
    
     const round = (number) => {
        return number ? +(number.toFixed(2)) : null;
      };
      

     async function fetchStocks() {
        const res = await fetch(API_Call)
        return res.json()
    }

    useEffect(() => {
       // let timeoutId;
        async function getLatestPrice() {
            const data = await fetchStocks()
            const gme = data.chart.result[0]
            setPrevPrice(price);
            setPrice(gme.meta.regularMarketPrice.toFixed(2))
            setPriceTime(new Date(gme.meta.regularMarketTime * 1000))
            const quote = gme.indicators.quote[0];
            const prices = gme.timestamp.map((timestamp, index) => ({
                x: new Date(timestamp * 1000),
                y: [quote.open[index], quote.high[index], quote.low[index], quote.close[index]].map(round)
              }));
              setSeries([{
                data: prices,
              }]);
            
            // setTimeout(getLatestPrice, 10000);
        }

        getLatestPrice()
        // don't need ** timeoutId = setTimeout(getLatestPrice, 10000);
        // return () => {
        //   clearTimeout(timeoutId)
        // };
  }, [])

  const chart = {
    options: {
      chart: {
        type: 'candlestick',
        height: 350
      },
      title: {
        text: 'CandleStick Chart',
        align: 'left'
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      }
    },
  };
  

    return (
        <>
        {/* <div className={["price", prevPrice < price ? "up" : prevPrice > price ? "down" : ""].join(" ")}>
        {price}
      </div> */}
      <Chart options={chart.options} series={series} type="candlestick" width="900" height={350} />
        </>
      
    )
  }


export default StockChart;