import "./OrderSection.css"


function OrderSection({ bottles }) {
    return (
        <div className="order-section">
            <p>Ориентировочное количество воды</p>
            <div className="containerNum">
                <img src="images/SmallBottle.png" className="bottle" alt="Bottle" />
                <p className="number">{bottles}</p>
            </div>
            <p>Цена со скидкой 10% - от 20 бутылей</p>
            <div className="containerNum">
                <img src="images/CardCredit.png" className="bottle" alt="Card" />
                <p className="number">{bottles * 100}₽</p>
            </div>
            <button className="orderbutton">ЗАКАЗАТЬ</button>
        </div>
    );
}

export default OrderSection;