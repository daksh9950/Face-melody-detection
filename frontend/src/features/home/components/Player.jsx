import React, { useRef, useState } from 'react';
import './player.scss';

import { useSong } from '../hooks/useSong.js';

const Player = () => {
    const { song } = useSong();
    const audioRef = useRef(null);
    const [speed, setSpeed] = useState(1);

    const handleForward = () => {
        if (audioRef.current) {
            audioRef.current.currentTime += 5;
        }
    };

    const handleBackward = () => {
        if (audioRef.current) {
            audioRef.current.currentTime -= 5;
        }
    };

    const handleSpeedChange = (e) => {
        const newSpeed = parseFloat(e.target.value);
        setSpeed(newSpeed);
        if (audioRef.current) {
            audioRef.current.playbackRate = newSpeed;
        }
    };

    return (
    <div className="player-container">

        {song ? (
            <audio ref={audioRef} src={song.url} controls />
        ) : (
            <p>Loading song...</p>
        )}

        <div className="controls">
            <button className="backward" onClick={handleBackward}>
                Backward 5s
            </button>

            <button className="forward" onClick={handleForward}>
                Forward 5s
            </button>

            <select
                className="speed-selector"
                value={speed}
                onChange={handleSpeedChange}
            >
                <option value={0.5}>0.5x</option>
                <option value={1}>1x</option>
                <option value={1.5}>1.5x</option>
                <option value={2}>2x</option>
            </select>
        </div>

    </div>
);
};

export default Player;
