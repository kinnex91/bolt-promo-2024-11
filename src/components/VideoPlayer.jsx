import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { t } = useTranslation();
  const videoRef = React.useRef(null);

  useEffect(() => {
    // Check if this is the first visit
    setIsPlaying(true);
  }, []);

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      const playVideo = async () => {
        try {
          videoRef.current.muted = true;
          videoRef.current.playsInline = true;

          // Load video first
          await videoRef.current.load();
          setIsVideoLoaded(true);

          // Try to play
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                // If user has interacted, we can unmute
                if (hasInteracted) {
                  videoRef.current.muted = false;
                }
              })
              .catch(error => {
                console.log('Playback failed:', error);
                // Keep it muted if autoplay fails
                videoRef.current.muted = true;
              });
          }
        } catch (error) {
          console.log('Video loading failed:', error);
        }
      };

      playVideo();
    }
  }, [isPlaying, hasInteracted, isVideoLoaded]);

  useEffect(() => {
    // Programmatically trigger click on <p> to unmute
    const tapToUnmuteElement = document.querySelector('.video.tapToUnmute');
    if (tapToUnmuteElement) {
      tapToUnmuteElement.click();
    }
  }, [isPlaying]);

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
    setIsVideoLoaded(false);
  };

  const handleVideoEnd = () => {
    handleClose();
  };

  const handleVideoClick = () => {
    if (videoRef.current && videoRef.current.muted) {
      videoRef.current.muted = false;
      setHasInteracted(true);
    }
  };

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      const unmuteAndPlay = async () => {
        try {
          videoRef.current.muted = false; // Unmute
          await videoRef.current.play(); // Play the video
          setHasInteracted(true); // Set interaction to true
        } catch (error) {
          console.error('Failed to play or unmute video:', error);
        }
      };
  
      unmuteAndPlay();
    }
  }, [isPlaying]);
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
