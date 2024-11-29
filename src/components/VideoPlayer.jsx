import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useTranslation();
  const videoRef = React.useRef(null);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    if (!hasVisited) {
      // Set the flag for future visits
      localStorage.setItem('hasVisitedBefore', 'true');
      // Auto-play the video
      setIsPlaying(true);
    }
  }, []);

  useEffect(() => {
    // When isPlaying changes and video is mounted, try to play
    if (isPlaying && videoRef.current) {
      // Load the video first
      videoRef.current.load();
      
      // Try to play after a short delay to ensure the video is loaded
      setTimeout(() => {
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Video started playing successfully
              console.log("Video autoplay started successfully");
            })
            .catch(error => {
              console.log("Autoplay was prevented:", error);
              // If autoplay fails, we can show a play button or handle it differently
              videoRef.current.muted = true; // Try muting the video
              videoRef.current.play().catch(e => console.log("Even muted autoplay failed:", e));
            });
        }
      }, 100);
    }
  }, [isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset video position
    }
    setIsPlaying(false);
  };

  // Handle video end
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
              onClick={e => e.stopPropagation()}
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
                  className="absolute top-0 left-0 w-full h-full"
                  controls
                  autoPlay
                  playsInline
                  muted
                  preload="auto"
                  onEnded={handleVideoEnd}
                  src="https://www.sportcompetition.fr/intro.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}