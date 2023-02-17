import { useState } from "react"
import StockChart from "./StockChart"
import StockList from "./StockList"

const Home = ({user}) => {
    const [stockSymbol, setStockSymbol] = useState("tsla")
    const [volume, setVolume] = useState(12)



    return (
        <>
        <div className="home">
        <div className="stock-data">
        <StockChart volume={volume} user={user} stockSymbol={stockSymbol} />
        </div>
        <div className="list">
        <StockList setVolume={setVolume}  
        user={user} setStockSymbol={setStockSymbol} />
        </div>
        </div>
        </>
    )
}

export default Home

