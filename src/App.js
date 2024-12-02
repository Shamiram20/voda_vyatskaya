import './App.css';
import WaterCalculator from './pages/calculator/WaterCalculator';
import Footer from './pages/footer/Footer';
import WaterInfo from './pages/information/WaterInfo';
import MainCatalog from './pages/mainCatalog/MainCatalog';
import Order from './pages/order/Order';
import Reasons from './pages/reasons/Reasons-section';


function App() {
  return (

    <div className="App">
      <div className="content-background">
        <Order />
        <Reasons />
        <WaterCalculator />
        <MainCatalog />
        <WaterInfo />
        <Footer />
      </div>
    </div>
  );
}

export default App;
