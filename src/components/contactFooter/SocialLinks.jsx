import "./SocialLinks.css";

const SocialLinks = () => {
    return (
        <div className="social-links">
            <div className="link-item">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    youtube.com
                </a>
                <span className="icon"><img src='images/iconYoutube.png' /></span>
            </div>
            <div className="link-item">
                <a href="vk.com/vodakzn" target="_blank" rel="noopener noreferrer">
                    vk.com/vodakzn
                </a>
                <span className="icon"><img src='images/iconVK.png' /></span>
            </div>
            <div className="link-item">
                <a href="@vodakzn" target="_blank" rel="noopener noreferrer">
                    @vodakzn        </a>
                <span className="icon"><img src='images/iconInst.png' /></span>
            </div>
            <div className="link-item">
                <a href="voda@gmail.com" target="_blank" rel="noopener noreferrer">
                    voda@gmail.com        </a>
                <span className="icon"><img src='images/iconMessage.png' /></span>
            </div>
        </div>
    );
}

export default SocialLinks;