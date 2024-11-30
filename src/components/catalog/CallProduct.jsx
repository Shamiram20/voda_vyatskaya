import "./CallProduct.css"
import Product from "./Product";

const CallProduct = () => {

    const products = [
        { image: 'images/product19l.png', volume: "19 литров", price: 100 },
        { image: 'images/product6l.png', volume: "6 литров", price: 50 },
        { image: 'images/product1.5l.png', volume: "1.5 литра", price: 35 },
        { image: 'images/product0.5l.png', volume: "0.5 литра", price: 20 },
    ];
    return (
        <div className="prod-catalog">
            {products.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </div>
    )
}

export default CallProduct;