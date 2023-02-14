const StockInfo = () => {

    return (
        <>
        <div className="stock-info">
        <div className="stock-info-left">
            <h1>APPLE - APPL</h1>
            <h3>PRICE: $212</h3>
            <h3>VOLUME: 12m</h3>
        </div>
        <div className="stock-info-right">
            <button className="buy-btn">BUY</button>
            <button className="sell-btn">SELL</button>
            <button className="skip-btn">SKIP DAY --</button>
        </div>
        </div>
        </>
    )
}

export default StockInfo