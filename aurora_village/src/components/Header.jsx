import React from 'react';
import logo from '../images/HEADER_LOGO.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={logo} alt="Logomarca Aurora Village" />
        <nav>
          <a href="diferenciais">DIFERENCIAIS</a>
          <a href="video">ASSISTA O VÍDEO</a>
          <a href="estrutura">ESTRUTURA</a>
          <a href="localizacao">LOCALIZAÇÃO</a>
          <a href="contato">CONTATO</a>
        </nav>
      </header>
    );
  }
}

export default Header;
