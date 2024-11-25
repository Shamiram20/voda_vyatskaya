import React from "react";

import "./WaterCalculator.css"
import CalculatorHeader from "../../components/waterCalculator/CalculatorHeader";
import OrderSection from "../../components/waterCalculator/OrderSection";
import CalculatorRow from "../../components/waterCalculator/CalculatorRow";


function WaterCalculator() {
    const [drinkers, setDrinkers] = React.useState(1);

    return (
        <div className="calculator-container">
            <CalculatorHeader />
            <div className="calculator-section">
                <CalculatorRow
                    label="МЫ ЗАКАЗЫВАЕМ ВОДУ"
                    buttons={["В офис", "Домой"]} />
                <div className="vertical-line"></div>

                <CalculatorRow
                    label="БУДУТ ПИТЬ"
                    counterValue={drinkers}
                    onIncrement={() => setDrinkers(drinkers + 1)}
                    onDecrement={() => setDrinkers(drinkers > 1 ? drinkers - 1 : 1)}
                    suffix="ЧЕЛОВЕК"
                />
                <div className="vertical-line"></div>
                <CalculatorRow
                    label="НАМ НУЖЕН ЗАПАС НА"
                    counterValue={drinkers}
                    onIncrement={() => setDrinkers(drinkers + 1)}
                    onDecrement={() => setDrinkers(drinkers > 1 ? drinkers - 1 : 1)}
                    suffix="ДНЕЙ"
                />
                <div className="vertical-line"></div>

                <CalculatorRow
                    label="ГОТОВКА"
                    buttons={["С ГОТОВКОЙ", "БЕЗ ГОТОВКИ"]}
                />

            </div>
            <OrderSection bottles={drinkers} />
        </div>
    );
}

export default WaterCalculator;