import NavBar from "./NavBar"
import StockChart from "./StockChart"
import StockInfo from "./StockInfo"
import StockList from "./StockList"
import stockChartImage from "./assets/stock-chart-5-year.png"
const Home = () => {

    return (
        <>
        <NavBar />  
        <div className="home">
        <div className="stock-data">
        <StockChart />
        <StockInfo />
        </div>
        <div className="list">
        <StockList />
        </div>
        </div>
        </>
    )
}

export default Home