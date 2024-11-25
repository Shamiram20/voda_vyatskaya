import "./Nav.css"

const Navbar = (props) => {
  return (

    <div className="navbar">
      <div className="navbar-logo">
        <img src='images/logo1.png'></img>
      </div>
      <div className="navbar-links">
        <a href="#production">производство</a>
        <a href="#water">вода</a>
        <a href="#drinks">напитки</a>
        <a href="#delivery">доставка</a>
        <a href="#contacts">контакты</a>
      </div>
    </div>
  )
}

export default Navbar;
