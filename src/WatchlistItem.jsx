const WatchlistItem = ({watchedStock, setStockSymbol}) => {
    
    const handleClick = () => {
        console.log(watchedStock)
        setStockSymbol(watchedStock)
    }

    return (
    <li key={watchedStock} onClick={handleClick} className="stock-list-item"><h2 onClick={handleClick} className="stock-list-item-name">{watchedStock}</h2><span class="material-symbols-outlined">
        grade
        </span></li>
    )
}

export default WatchlistItem