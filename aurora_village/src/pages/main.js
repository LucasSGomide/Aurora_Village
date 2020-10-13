import React from 'react';
import Header from '../components/Header';
import WhatsApp from '../components/WhatsApp';
import VideoSection from '../components/VideoSection';
import ContactSection from '../components/ContactSection';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <WhatsApp />
        <VideoSection />
        <ContactSection />
      </main>
    );
  }
};

export default Main;
