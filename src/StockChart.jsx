import stockChartImage from "./assets/stock-chart-5-year.png"
const StockChart = () => {

    return (
        <div className="stock-chart">
            <img className="stock-chart"  src={stockChartImage} alt="chart" />
        </div>
    )
}

export default StockChart