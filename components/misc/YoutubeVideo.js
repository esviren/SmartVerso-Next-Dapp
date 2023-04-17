import ReactPlayer from 'react-player';

function YoutubeVideo({ videoId }) {
  const url = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="player-wrapper ">
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        playing="true"
        loop="true"
        muted="true"
        controls={false}
      />
    </div>
  );
};

export default YoutubeVideo;