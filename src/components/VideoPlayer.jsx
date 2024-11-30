import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(true); // Autoplay enabled by default
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { t } = useTranslation();
  const videoRef = React.useRef(null);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      const playVideo = async () => {
        try {
          videoRef.current.muted = true; // Start muted
          videoRef.current.playsInline = true;

          // Load video and play
          await videoRef.current.load();
          setIsVideoLoaded(true);

          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                console.log('Video is playing');
              })
              .catch((error) => {
                console.log('Autoplay failed, user interaction required:', error);
              });
          }
        } catch (error) {
          console.log('Video playback failed:', error);
        }
      };

      playVideo();
    }

    videoRef.current.muted = true; // Unmute the video
    setHasInteracted(true);

  }, [isPlaying]);

  const handleVideoClick = () => {
    if (videoRef.current && videoRef.current.muted) {
      videoRef.current.muted = false; // Unmute the video
      setHasInteracted(true);
    }
  };
  const handlePlay = () => {
    setHasInteracted(true);
    setIsPlaying(true);
  };


  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  const handleVideoEnd = () => {
    handleClose();
  };

  return (
    <>
          <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handlePlay}
        className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center space-x-2"
      >
        <PlayCircleIcon className="h-6 w-6" />
        <span>{t('video.watch')}</span>
      </motion.button>

      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                aria-label={t('video.close')}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              <div className="relative pt-[56.25%]">
                <video
                  ref={videoRef}
                  className="absolute top-0 left-0 w-full h-full cursor-pointer"
                  controls
                  playsInline
                  preload="auto"
                  onClick={handleVideoClick}
                  onEnded={handleVideoEnd}
                  src="https://www.sportcompetition.fr/intro.mp4"
                >
                  Your browser does not support the video tag.
                </video>

                {!hasInteracted && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
                    onClick={handleVideoClick}
                  >
                    <p className="text-white text-lg">{t('video.tapToUnmute')}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
