import './Header.css';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import menuIcon from '../icons8-menu.svg';  
import closeIcon from '../icons8-close.svg';  

export default function Header() {
  
  const [isNavVisible, setIsNavVisible] = useState(false);
  const navButtonRef = useRef(null);

  const showNav = () => {
    setIsNavVisible(!isNavVisible);
    
    if (navButtonRef.current) {
      navButtonRef.current.src = isNavVisible ? menuIcon : closeIcon;
    }
  };

  // Função para falar o texto
  const handleTextToSpeech = (text) => {
    const value = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(value);
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
            <Link to="/" onClick={() => handleTextToSpeech('Você está em Página Inicial')}>
              Página Inicial
            </Link>
          </li>
          <li>
            <Link to="/Download" onClick={() => handleTextToSpeech('Você está em Download')}>
              Download
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

