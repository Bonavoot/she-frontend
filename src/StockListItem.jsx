

const StockListItem = ({stock, setStockSymbol}) => {
    
    const handleClick = () => {
        setStockSymbol(stock)
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