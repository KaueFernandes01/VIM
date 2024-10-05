import './Home.css';
import Header from './components/header/Header';
import TextToSpeech from './components/TextToSpeech/TextToSpeech' 

function Home() {
    return (
        <section>
            <Header />
            <p>
                O projeto Visually Impaired Map é uma iniciativa dedicada a auxiliar pessoas com deficiência visual a chegarem a locais específicos. Por meio de um aplicativo para smartphones, os usuários podem indicar o destino desejado por comando de voz, e o app traçará a rota até lá.
                <br />
                <br />
                Utilizando o alto-falante do dispositivo, o aplicativo fornecerá instruções verbais para o usuário indicando quando seguir em frente, virar à esquerda, virar à direita ou voltar, conforme necessário.
            </p>
            <TextToSpeech />
        </section>
    );
}

export default Home;
