import React from 'react';
import Header from '../components/Header.jsx';
import WhatsApp from '../components/WhatsApp';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <WhatsApp />
      </main>
    );
  }
};

export default Main;
