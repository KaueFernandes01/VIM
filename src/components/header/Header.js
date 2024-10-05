import './Header.css';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import menuIcon from '../icons8-menu.svg';  
import closeIcon from '../icons8-close.svg';  
import { useNavigate } from 'react-router-dom'; 

export default function Header() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const navButtonRef = useRef(null);
    const navigate = useNavigate(); 

    const showNav = () => {
        setIsNavVisible(!isNavVisible);
        
        if (navButtonRef.current) {
            navButtonRef.current.src = isNavVisible ? menuIcon : closeIcon;
        }
    };

    const handleTextToSpeech = (text, path, event) => {
        event.preventDefault(); 
        const utterance = new SpeechSynthesisUtterance(text);

        
        utterance.onend = () => {
            navigate(path); 
        };

        window.speechSynthesis.speak(utterance);
    };

    return (
        <header>
            <nav>
                <img
                    ref={navButtonRef}
                    onClick={showNav}
                    src={menuIcon}  
                    alt="menu"
                    className="navButton"
                />
                <ul className={`navBar ${isNavVisible ? 'show' : ''}`}>
                    <li>
                        <Link to="/" onClick={(event) => handleTextToSpeech('Você está em Página Inicial', '/', event)}>
                            Página Inicial
                        </Link>
                    </li>
                    <li>
                        <Link to="/Download" onClick={(event) => handleTextToSpeech('Você está em Download', '/Download', event)}>
                            Download
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
