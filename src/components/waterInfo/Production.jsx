import "./Production.css"


const Production = () => {
    return(
        <div className="production-section">
<h2>Наше производство</h2>
<div className="video-container">
  <img src='images/Production.png' alt="Production"/>
  <button className="play-button">
    <img src='images/YoutubePlayButton.png' alt="Play"/>
  </button>
</div>
</div>
    );
}

export default Production;
