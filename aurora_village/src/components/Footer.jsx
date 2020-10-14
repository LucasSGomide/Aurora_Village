import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <section className="contato-footer">
          <div>
            <span>LIGUE PARA NÓS:</span>
            <span>³¹ 98654-0017</span>
          </div>
          <div>
            <span>ENVIE UM E-MAIL:</span>
            <span>contato.empreendimentosms@gmail.com</span>
          </div>
        </section>
        <hr />
        <section>
          <div>
            ©2020. Empreendimentos Moreira Santiago. Todos os direitos reservados. All rights reserverd
          </div>
          <div>
            Link github
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
