import "./Order.css"
import ContactContainer from "../../components/contact-container/ContactContainer";
import Image from "../../components/img/Image";


function Order() {
    return (
        <div className="background">
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