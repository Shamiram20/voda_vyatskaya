import Contact from '../../components/contactFooter/Contact';
import FooterProducts from '../../components/contactFooter/FooterProducts';
import SocialLinks from '../../components/contactFooter/SocialLinks';
import './Footer.css'

const Footer = () =>{
    return(
        <div className='footer'>
            <Contact/>
            <FooterProducts />
            <SocialLinks />
        </div>
    );
}

export default Footer;