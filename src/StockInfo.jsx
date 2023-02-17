import { useEffect, useState } from "react";

const StockInfo = ({volume, price, user, stockSymbol}) => {
const [buyingPower, setBuyingPower] = useState(user.buying_power)
const [buyQuantity, setBuyQuantity] = useState(1)
const [totalStockQuantity, setTotalStockQuantity] = useState(0)
const [sellQuantity, setSellQuantity] = useState(1)

      const handleBuyButton = () => {
        setBuyingPower(buyingPower - (price * buyQuantity))
        console.log(totalStockQuantity)
        setTotalStockQuantity(parseInt(totalStockQuantity) + parseInt(buyQuantity))
      }

      const handleSellButton = () => {
        if(totalStockQuantity > 0 ){
        setBuyingPower(buyingPower + (price * sellQuantity))
        setTotalStockQuantity(parseInt(totalStockQuantity) - parseInt(sellQuantity))}
      }

    return (
        <>
        <div className="stock-info">
        <div className="stock-info-left">
            <div className="info">
            <h1>{stockSymbol}</h1>
            <h3>Price: ${price}</h3>
            <h3>Volume: {volume}m</h3>
            </div>
            <div className="buy-sell-btns">
            <div className="buy-input-container">
            <button onClick={() => handleBuyButton()} className="buy-btn">Buy</button>
            <input value={buyQuantity} className="buy-input"  onChange={(e) => setBuyQuantity(e.target.value)} type="number" min={0}  />
            </div>
            <div className="sell-input-container">
            <button  onClick={() => handleSellButton()} className="sell-btn">Sell</button>
            <input className="sell-input" value={sellQuantity} onChange={(e) => setSellQuantity(e.target.value)} type="number" max={totalStockQuantity}  />
            </div> 
            </div>
        </div>
        <div className="stock-info-right">
         <h2 className="balance">Balance: <span id="balance">{user.total_balance}</span></h2>
         <h2 className="buying-power">Buying Power: <span id="buying-power">{buyingPower}</span></h2>
        </div>
        </div>
        </>
    )
}

export default StockInfo