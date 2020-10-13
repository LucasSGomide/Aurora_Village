import React from 'react';
import Header from '../components/Header.jsx'
import Mapa from '../components/Map';
import WhatsApp from '../components/WhatsApp';
import VideoSection from '../components/VideoSection';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Mapa />
        <WhatsApp />
        <VideoSection />
      </main>
    );
  }
};

export default Main;
