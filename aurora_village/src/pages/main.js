import React from 'react';
import Header from '../components/Header';
import Mapa from '../components/Map';
import WhatsApp from '../components/WhatsApp';
import VideoSection from '../components/VideoSection';
import ContactSection from '../components/ContactSection';
import Diferenciais from '../components/Diferenciais';
import Footer from '../components/Footer';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <WhatsApp />
        <VideoSection />
        <Diferenciais />
        <ContactSection />
        <Mapa />
        <Footer />

      </main>
    );
  }
};

export default Main;
