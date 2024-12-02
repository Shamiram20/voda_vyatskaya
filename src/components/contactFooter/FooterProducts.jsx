import './FooterProducts.css'

const FooterProducts = () =>{
    return(
        <div className="footer-products">
        <button className="footer-products-button"><a href="#production">Производство</a></button>
        <button className="footer-products-button"><a href="#water">Вода</a></button>
        <button className="footer-products-button"><a href="#drinks">Напитки</a></button>
        <button className="footer-products-button"><a href="#delivery">Доставка</a></button>
        <button className="footer-products-button"><a href="#contacts">Контакты</a></button>
 <div className='prod-bottom'>Политика конфеденциальности </div>
      </div>
    );
}

export default FooterProducts;

