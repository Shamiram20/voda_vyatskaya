import Categories from "../../components/catalog/Categories";
import CallProduct from "../../components/catalog/CallProduct";
import CalculatorHeader from "../../components/waterCalculator/CalculatorHeader";
import "./MainCatalog.css"

function MainCatalog() {
    return (
        <div className="main-catalog">
            <CalculatorHeader title="Основной каталог" />
            <Categories/>
            <CallProduct/>
        </div>
    );
}
export default MainCatalog;