import { useState } from "react"
import StockChart from "./StockChart"
import StockList from "./StockList"

const Home = () => {
    const [stockSymbol, setStockSymbol] = useState("tsla")

    return (
        <>
        <div className="home">
        <div className="stock-data">
        <StockChart stockSymbol={stockSymbol} />
        </div>
        <div className="list">
        <StockList setStockSymbol={setStockSymbol} />
        </div>
        </div>
        </>
    )
}

export default Home

