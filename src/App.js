import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import './MusicPlayer.css';
import Vinyl from './Vinyll.gif'; 
import Sampang from './Sampang.png';
import Piringans from '../src/Vinyl2.gif';
import Sound from '../src/Sound.mpeg';

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(Sound));

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="App">
      <div className="background-container" style={{backgroundImage: `url(${Sampang})`}}>
        <div className="container">
          <header className="App-header">
            <h1>Radio Sampang</h1>
          </header>
          <div className="radio-player" style={{width:'800px'}}>
            <div className="image-container">
              <img src={isPlaying ? Vinyl : Piringans} alt="Piringan Hitam" />
              {!isPlaying ? (
                <button className="play-button" onClick={togglePlay}>
                  <FontAwesomeIcon icon={faPlay} className="play-icon" />
                </button>
              ) : (
                <button className="pause-button" onClick={togglePlay}>
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
