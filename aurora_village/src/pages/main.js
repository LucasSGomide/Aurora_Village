import React from 'react';
import Header from '../components/Header.jsx';
import Mapa from '../components/Map';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Mapa />
      </main>
    );
  }
};

export default Main;
