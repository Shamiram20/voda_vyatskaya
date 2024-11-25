import "./CalculatorRow.css"
import React from "react";
import Counter from "./Counter";
import ButtonGroup from "./ButtonGroup";

function CalculatorRow({ label, buttons, counterValue, onIncrement, onDecrement, suffix }) {
    return (
        <div className="calculator-row">
            <span className="calcSpan">{label}</span>
            {buttons && <ButtonGroup buttons={buttons} />}

            {counterValue !== undefined && (
                <>
                    <Counter
                        value={counterValue}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                    />
                    <span>{suffix}</span>
                </>
            )}
        </div>
    );
}

export default CalculatorRow;