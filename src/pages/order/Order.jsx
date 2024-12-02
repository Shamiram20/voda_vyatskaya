import "./Order.css"
import ContactContainer from "../../components/contactContainer/ContactContainer";
import Image from "../../components/img/Image";
import Navbar from "../../components/nav/Nav";


function Order() {
    return (
        <div className="background">
            <Navbar/>
            <div className="text">
                артезианская вода <br />
                с доставкой <br />
                по казани   </div>
            <div className="container">
                <input type="tel" placeholder="ваш телефон" className="phone-input" />
                <button className="order-button">ЗАКАЗАТЬ</button>
            </div>
            <ContactContainer />
            <Image />
        </div>
    );
}

export default Order;