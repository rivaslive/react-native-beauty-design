import React, { useMemo } from 'react';
import videojs from 'video.js';
import {
  StyleFrameImage,
  StyleImage,
  StylePlay,
  StyleReload,
  StyleWrapperPlay,
} from 'components/Molecules/Example/style';

const videoJsOptions = {
  // lookup the options in the docs for more options
  autoplay: false,
  controls: false,
  responsive: true,
  fluid: true,
};

const ImageOrVideoFrame = ({
  src,
  style,
}: {
  src: string;
  style?: React.CSSProperties;
}) => {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const playerRef = React.useRef<videojs.Player | null>(null);

  React.useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;
      // eslint-disable-next-line no-multi-assign
      const player = (playerRef.current = videojs(
        videoElement,
        videoJsOptions
      ));
      player.on('ended', () => {
        setIsPlaying(false);
      });
    }
  }, [videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player?.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  const onPlayOrPause = () => {
    const player = playerRef.current;
    if (player?.paused()) {
      player?.play();
      setIsPlaying(true);
    } else {
      player?.pause();
      setIsPlaying(false);
    }
  };

  const onReplay = () => {
    const player = playerRef.current;
    player?.hasStarted(false);
    player?.currentTime(0);
  };

  const isValidReload = () => {
    const player = playerRef.current;
    if (player) {
      const currentTime = player?.currentTime();
      const duration = player?.duration();
      return currentTime > 0 && currentTime < duration && !isPlaying;
    }
    return false;
  };

  const isVideo = useMemo(() => {
    return src?.includes('.mp4');
  }, [src]);

  return (
    <StyleFrameImage style={style}>
      {isVideo ? (
        <>
          <video ref={videoRef} className="video-js vjs-big-play-centered">
            <source src={src} type="video/mp4" />
          </video>
          <StyleWrapperPlay onClick={onPlayOrPause}>
            <StylePlay className={`${isPlaying ? 'd-none' : ''}`} />
            <StyleReload
              onClick={onReplay}
              className={`${isValidReload() ? '' : 'd-none'}`}
            />
          </StyleWrapperPlay>
        </>
      ) : (
        <StyleImage $src={!!src} src={src} alt="" />
      )}
    </StyleFrameImage>
  );
};

export default ImageOrVideoFrame;
