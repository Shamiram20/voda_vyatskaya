import "./Image.css"

function Image() {
    return (
        <div className="image">
            <div className='relative'><img src='images/bottle.png' alt="bottle"  className=""/></div>
            <div className='absolute'><img src='images/bottle.png' alt="bottle"  /></div>
        </div>
    );
}

export default Image;