const StockInfo = () => {

    return (
        <>
        <div className="stock-info">
        <div className="stock-info-left">
            <h1>Apple - APPL</h1>
            <h3>Price: $212</h3>
            <h3>Volume: 12m</h3>
        </div>
        <div className="stock-info-right">
            <button className="buy-btn">Buy</button>
            <button className="sell-btn">Sell</button>
            <button className="skip-btn">Skip Day --</button>
        </div>
        </div>
        </>
    )
}

export default StockInfo