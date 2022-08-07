import React, { useEffect } from 'react';
import { initBgAudio } from '../../actions';

const BgAudioPlayer = () => {
    useEffect( () => {
        initBgAudio();
    });
    return (
        <audio className='bg-audio-player'>
            <source src={document.location + "/media/bg-sound-1.webm"} type="audio/mpeg"></source>
            <source src={document.location + "/media/bg-sound-1.ogg"} type="audio/ogg"></source>
            <source src={document.location + "/media/bg-sound-1.mp3"} type="audio/mpeg"></source>
        </audio>
    )
};

export default BgAudioPlayer;
