import './Download.css'; 
import Header from './components/header/Header';
import qrcode from './assets/qrcode.png';
import apple from './assets/apple.png';
import playstore from './assets/playstore.png';
import TextToSpeech from './components/TextToSpeech/TextSpeechDown'

function Download() {
    const textToSpeak = 'Baixe agora mesmo! A ponte sua câmera para o QR code para escanear e acessar o aplicativo.';

    return (
        <section>
            <Header />
            <div className='container-download'>
                <div className='qr-code'>
                    <img src={qrcode} alt='qrcode' />
                </div>
                <div className='downloads'>
                    <h1>Baixe agora mesmo!</h1>
                    <div className='plataform'>
                        <img src={apple} alt='download' />
                        <img src={playstore} alt='download' />
                    </div>
                </div>
            </div>
            <TextToSpeech text={textToSpeak} />
        </section>
    );
}

export default Download;
