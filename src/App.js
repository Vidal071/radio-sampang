import React, { useState } from 'react';
import './MusicPlayer.css';
import Vinyl from './Vinyll.gif'; 
import Sampang from './Sampang.png';
import Piringans from '../src/Vinyl2.gif';
import Sound from '../src/Sound.mpeg'
function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="App">
      <div className="background-container" style={{backgroundImage: `url(${Sampang})`, backgroundSize: 'cover'}}>
        <header className="App-header">
          <h1>Radio Sampang</h1>
        </header>
        <div className="container">
          <div className="radio-player">
            <div className="image-container">
              {isPlaying ? (
                <img src={Vinyl} alt="Piringan Hitam" className="rotate" />
              ) : (
                <img src={Piringans} alt="Piringan Hitam" />
              )}
            </div>
            <h2>Dengarkan sekarang</h2>
            <audio controls onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}>
              <source src={Sound} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
