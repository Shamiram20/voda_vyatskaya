import './App.css';
import WaterCalculator from './pages/calculator/WaterCalculator';
import Order from './pages/order/Order';
import Reasons from './pages/reasons/Reasons-section';


function App() {
  return (

    <div className="App">
      <div className="content-background">
        <Order />
        <Reasons />
        <WaterCalculator/>
      </div>
    </div>
  );
}

export default App;
