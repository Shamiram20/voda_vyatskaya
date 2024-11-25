import "./Reasons-section.css"


function Reasons() {
    return (
        <div className="reasons-section">
            <h1><p>Три причины</p> заказать воду Вятскую</h1>
            <div className="reasons-container">
                <div className="reason-item">
                    <img src='images/image1.png' alt="bottle" className="" />
                    <p>Содержит все необходимые макро и микроэлементы — кальций, магний, натрий и йод.</p>
                </div>
                <div className="reason-item">
                    <img src='images/image2.png' alt="bottle" className="" />
                    <p>Более 10 лет на рынке питьевой воды.
                        2000 клиентов каждый день получают воду.
                        5000 клиентов обслуживаются в месяц.
                    </p>
                </div>
                <div className="reason-item">
                    <img src='images/image3.png' alt="bottle"  className="" />
                    <p>Доставка воды домой и в офис
                        без задержек. Развозим воду по Казани.
                        Возможны поставки в Иннополис, Зеленодольск
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Reasons;