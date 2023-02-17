const StockListItem = ({setVolume, stock, setStockSymbol}) => {
    


    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
      }


    const handleClick = () => {
        setStockSymbol(stock)
        setVolume(getRandomIntInclusive(12, 155))
    }

    return (    
        <li key={stock} onClick={handleClick} className="stock-list-item"><h2 onClick={handleClick} className="stock-list-item-name">{stock}</h2><span class="material-symbols-outlined">
        grade
        </span></li>
    )
}

export default StockListItem


// const handleFavoriteClick = () => {
//     fetch("/watchlist", {
//         method: 'POST', // or 'PUT'
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             stock_id: stock.id,
//             user_id: user.id
//         }),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log('Success:', data);
//         })
//         .catch((error) => {
//           console.error('Error:', error);
//         });
// }