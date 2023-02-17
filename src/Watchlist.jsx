import { useEffect, useState } from "react"
import StockListItem from "./StockListItem";
import WatchlistItem from "./WatchlistItem";

const Watchlist = ({setStockSymbol, user}) => {
    const [watchlist, setWatchlist] = useState([])
    
    console.log(user)

    useEffect(() => {
        const fetchWatchList = async () => {
          const res = await fetch(`http://localhost:3000/users/${user.id}`)
          const req = await res.json()
          setWatchlist(req)
        }
        fetchWatchList()
      }, []);

    //   const addWatchlistStock = async () => {
    //    const response = await fetch(`http://localhost:3000/users/1/watchlist_records`, {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //           },
    //         body: JSON.stringify(
    //             {
    //                 "user_id": user.id,
    //                 "symbol": 
                    
    //             }
    //         ),
            
    //         return response.json()
    //     });
    //   }

      console.log(watchlist)

  return (
    <div>
     <h1 className="watchlist-text">Watchlist <span className="material-symbols-outlined">star</span></h1>
    {watchlist.map((item) => {
        return <WatchlistItem watchedStock={item.symbol} setStockSymbol={setStockSymbol} />
    })}
    </div>
  )
}

export default Watchlist


