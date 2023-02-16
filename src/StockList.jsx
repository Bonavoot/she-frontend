import StockListItem from "./StockListItem"

const StockList = () => {

    return (
        <ul className="stock-list">
            <div>
            <h1 className="watchlist-text">Watchlist <span className="material-symbols-outlined">star</span></h1>
            <StockListItem />
            <StockListItem />
            <StockListItem />
            </div>
            <div className="all-stocks">
            <h1 className="all-stocks-text">All Stocks <span className="material-symbols-outlined">newspaper</span></h1>
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

