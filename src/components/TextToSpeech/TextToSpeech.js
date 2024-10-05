import { useEffect } from 'react';

function TextToSpeech() {
    useEffect(() => {
        const text = 'O projeto Visually Impaired Map é uma iniciativa dedicada a auxiliar pessoas com deficiência visual a chegarem a locais específicos. Por meio de um aplicativo para smartphones, os usuários podem indicar o destino desejado por comando de voz, e o app traçará a rota até lá. Utilizando o alto-falante do dispositivo, o aplicativo fornecerá instruções verbais para o usuário indicando quando seguir em frente, virar à esquerda, virar à direita ou voltar, conforme necessário.';

       
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


