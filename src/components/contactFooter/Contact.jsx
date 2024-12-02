import './Contact.css'

const Contact = () => {
    return (
        <div className='footer-contact'>
            <div className='tel'>
                <img src='images/logo1.png' className='logo' />

            </div>
            <button className='tel'>
                <img src='images/iconTel.png' className='footer-contact-img' />
                +7 (8334) 3-83-66
            </button>
            <button className='tel'>
                <img src='images/iconWhatsapp.png' className='footer-contact-img' />
                +7 (953) 696-83-66
            </button>
            <button className='tel'>
                <img src='images/iconLoc.png' className='footer-contact-img' />
                г. Вятские Поляны ул. Чехова дом 34
            </button>
            <div className='tel bottom'>
                Вода Вятская (с) 2022

            </div>
        </div>
    );
}

export default Contact;