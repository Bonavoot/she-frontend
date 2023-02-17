const StockInfo = ({price, prevPrice, volume, stockSymbol}) => {

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
      }

      const handleBuyButton = () => {
        
      }

    return (
        <>
        <div className="stock-info">
        <div className="stock-info-left">
            <h1>{stockSymbol}</h1>
            <h3>Price: ${price}</h3>
            <h3>Volume: {getRandomIntInclusive(12, 150)}m</h3>
        </div>
        <div className="stock-info-right">
            <button className="buy-btn">Buy</button>
            <button className="sell-btn">Sell</button>
        </div>
        </div>
        </>
    )
}

export default StockInfo