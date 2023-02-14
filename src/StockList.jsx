import StockListItem from "./StockListItem"


const StockList = () => {

    return (
        <ul className="stock-list">
            <div>
            <h1 className="watchlist-text">Watchlist</h1>
            <StockListItem />
            <StockListItem />
            <StockListItem />
            </div>
            <div className="all-stocks">
            <h1 className="all-stocks-text">All Stocks</h1>
            <StockListItem />
            <StockListItem />
            <StockListItem />
            <StockListItem />
            <StockListItem />
            <StockListItem />
            <StockListItem />
            <StockListItem />
            <StockListItem />
            <StockListItem />
            <StockListItem />
            <StockListItem />
            </div>
        </ul>
    )
}

export default StockList

