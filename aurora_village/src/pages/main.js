import React from 'react';
import Header from '../components/Header.jsx';
import VideoSection from '../components/VideoSection';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <VideoSection />
      </main>
    );
  }
};

export default Main;
