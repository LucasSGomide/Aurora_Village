import React from 'react';
import ReactPlayer from 'react-player/lazy';

class VideoSection extends React.Component {
  render() {
    return (
      <section>
        <p>CONHEÇA O AURORA VILLAGE E SE SURPREENDA ! TEXTO GENÉRICO.</p>
        <ReactPlayer url="https://www.youtube.com/watch?v=01ZkESVb0W4&ab_channel=M%C3%A1rioCabanelas" />
      </section>
    );
  }
}

export default VideoSection;
