import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import './MusicPlayer.css';
import Vinyl from './Vinyl3-unscreen.gif'; 
import Sampang from './Sampang.png';
import Piringans from '../src/Remove Bg2.png';
import Sound from '../src/Sound.mpeg';

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(Sound));
  const [imageSrc, setImageSrc] = useState(Vinyl);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setImageSrc(Vinyl);
    } else {
      audio.play();
      setIsPlaying(true);
      setImageSrc(Piringans); // Change image when play button is clicked
    }
    toggleAnimation(); 
  };

  const handlePause = () => {
    audio.pause();
    setIsPlaying(false);
    setImageSrc(Piringans); // Change image when pause button is clicked
    toggleAnimation(); 
  };

  const toggleAnimation = () => {
    const vinylImage = document.getElementById('vinyl-image');
    if (vinylImage) {
      vinylImage.classList.toggle('rotate');
    }
  };

  return (
    <div className="App">
      <div className="background-container" style={{backgroundImage: `url(${Sampang})`}}>
        <div className="container">
          <header className="App-header">
            <h1>Radio Sampang</h1>
          </header>
          <div className="radio-player">
            <div className="image-container">
              <img id="vinyl-image" src={imageSrc} alt="Piringan Hitam" className="responsive-image" />
              {!isPlaying ? (
                <button className="play-button" onClick={togglePlay}>
                  <FontAwesomeIcon icon={faPlay} className="play-icon" />
                </button>
              ) : (
                <button className="pause-button" onClick={handlePause}>
                  <FontAwesomeIcon icon={faPause} className="pause-icon" />
                </button>
              )}
            </div>
            <h2 style={{color: "white"}}>Dengarkan sekarang</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
