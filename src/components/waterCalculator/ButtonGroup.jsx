import "./ButtonGroup.css"


function ButtonGroup({ buttons }) {
    return (
        <div className="button-group">
            {buttons.map((btn, index) => (
                <button key={index} className={index === 0 ? "first" : "second"}>
                    {btn}
                </button>
            ))}
        </div>
    );
}

export default ButtonGroup;
