import {useState, useEffect} from "react"
import Chart from 'react-apexcharts';
import StockInfo from "./StockInfo";

const StockChart = ({volume, user, stockSymbol}) => {
     const [price, setPrice] = useState(10)
     const [prevPrice, setPrevPrice] = useState(-1)
     const [priceTime, setPriceTime] = useState(null)
     const [series, setSeries] = useState([{data: []}])
     const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
     // let API_Call = `${proxyUrl}https://query1.finance.yahoo.com/v8/finance/chart/${stockSymbol}`;
 
    console.log(stockSymbol)
    
     const round = (number) => {
        return number ? +(number.toFixed(2)) : null;
      };


    useEffect(() => {
       // let timeoutId;
       async function fetchStocks() {
        const res = await fetch("")//`${proxyUrl}https://query1.finance.yahoo.com/v8/finance/chart/${stockSymbol}`)
        console.log(res)
        return res.json()
    }
    fetchStocks()
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
            
            //setTimeout(getLatestPrice, 10000);
        }
        getLatestPrice()
  }, [stockSymbol])

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
    <div className="stock-data">
     <div className={["price", prevPrice < price ? "up" : prevPrice > price ? "down" : ""].join(" ")}>
    {price}
    </div>  
    <Chart options={chart.options} series={series} type="candlestick" width="1000" height={350} />
    <StockInfo volume={volume}  user={user} price={price} stockSymbol={stockSymbol.toUpperCase()} prevPrice={prevPrice} />
    </div>
    )
  }


export default StockChart;

// buying_power = 10000
// total_balance = 10000

// on buy
// current_user.buying_power = current_user.buying_power - (stock.price * quantity)

// on sell
// current_user.buying_power = current_user.buying_power + (stock.price * quantity)



// data.chart.result[0].meta.symbol  outputs => "GME"