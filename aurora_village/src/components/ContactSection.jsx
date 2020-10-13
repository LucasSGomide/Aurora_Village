import React from 'react';

class ContactSection extends React.Component {
  render() {
    return (
      <section>
        <div>
          <h2>LOTES DE 300M² EM UMA LOCALIZAÇÃO INCOMPARÁVEL</h2>
          <h4>Localização privilegiada a X minutos do centro de itaúna...</h4>
        </div>
        <form>
          <h3>ENTRE EM CONTATO</h3>
          <fieldset>
            <label htmlFor="name">
              <input type="text" id="name" placeholder="Nome"/>
            </label>
            <label htmlFor="email">
              <input type="text" id="email" placeholder="Email"/>
            </label>
            <label htmlFor="phone">
              <input type="text" id="phone" placeholder="Telefone"/>
            </label>
            <label htmlFor="message">
              <textarea id="message" placeholder="Escreva aqui sua mensagem !"/>
            </label>
            <input type="submit" value="ENVIAR" id="submit" />
          </fieldset>
        </form>
      </section>
    );
  }
}

export default ContactSection;
