import StockChart from "./StockChart"
import StockList from "./StockList"

const Home = () => {
    return (
        <>
        <div className="home">
        <div className="stock-data">
        <StockChart />
        </div>
        <div className="list">
        <StockList />
        </div>
        </div>
        </>
    )
}

export default Home