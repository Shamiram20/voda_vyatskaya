import './App.css';
import Navbar from './pages/nav/Nav';
import Order from './pages/order/Order';
import Reasons from './pages/reasons/Reasons-section';



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-background">
        <Order />
        <Reasons />
      </div>
    </div>
  );
}

export default App;
