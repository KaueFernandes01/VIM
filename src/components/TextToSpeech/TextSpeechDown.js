import React, { useEffect } from 'react';

function TextToSpeech({ text }) {
    useEffect(() => {
        if (!window.speechSynthesis.speaking) {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        }
    }, [text]);

    return null;
}

export default TextToSpeech;
