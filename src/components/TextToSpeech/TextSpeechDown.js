import { useEffect } from 'react';

function TextToSpeech() {
    useEffect(() => {
        const text = 'Baixe agora mesmo! A ponte sua câmera para o QR code para escanear e acessar o aplicativo.';

       
        if ('speechSynthesis' in window) {
            console.log('API de síntese de fala está disponível.');

            
            window.speechSynthesis.cancel();

            
            const utterance = new SpeechSynthesisUtterance(text);
            
           
            utterance.lang = 'pt-BR';

            
            utterance.onstart = () => {
                console.log('Iniciou a fala.');
            };

            utterance.onend = () => {
                console.log('Fala finalizada.');
            };

            utterance.onerror = (event) => {
                console.error('Erro na fala: ', event.error);
            };

            
            window.speechSynthesis.speak(utterance);
        } else {
            console.error('API de síntese de fala não suportada neste navegador.');
        }
    }, []); 

    return null;
}

export default TextToSpeech;
