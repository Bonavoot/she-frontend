import StockListItem from "./StockListItem"
import { useEffect, useState } from "react"
import Watchlist from "./Watchlist"

const StockList = ({setVolume, setStockSymbol, user}) => {
    const [stocks, setStocks] = useState([])

    

    const fetchStockSymbols = async () => {
            const req = await fetch('http://localhost:3000/stocks')
            const res = await req.json()

            setStocks(res)
            console.log(res)
        }
    useEffect(() => {
        fetchStockSymbols()
    }, [])

     console.log(stocks)

    const alphabeticalOrder = stocks.sort(function(a, b){
        if(a.symbol < b.symbol) { return -1; }
        if(a.symbol > b.symbol) { return 1; }
        return 0;
    })

    return (
        <ul className="stock-list">
            <div>
            <Watchlist user={user} setStockSymbol={setStockSymbol} />
            </div>
            <div className="all-stocks">
            <h1 className="all-stocks-text">All Stocks <span className="material-symbols-outlined">newspaper</span></h1>
            {alphabeticalOrder.map((stock) => {
                return <StockListItem setVolume={setVolume} setStockSymbol={setStockSymbol} stock={stock.symbol} />
            })}
            </div>
        </ul>
    )
}

export default StockList

