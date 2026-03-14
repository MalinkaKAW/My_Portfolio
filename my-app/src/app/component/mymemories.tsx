'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Heart, Camera } from 'lucide-react';
import Image from "next/image";

interface Photo {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
}

const MemoriesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Photos array should be defined before useEffect
  const photos: Photo[] = [
    { id: 1, src: "/images/7.jpg", title: "NextWave", description: "Teaching freelancing and IT skills to school students through NextWave", category: "Leo" },
    { id: 2, src: "/images/1.jpg", title: "NextWave", description: "Teaching freelancing and IT skills to school students through NextWave", category: "Leo" },
    { id: 3, src: "/images/2.jpg", title: "NextWave", description: "Teaching freelancing and IT skills to school students through NextWave", category: "Leo" },
    { id: 4, src: "/images/3.jpg", title: "Epic Lanka", description: "Industry visit to Epic Lanka", category: "IT" },
    { id: 5, src: "/images/4.jpg", title: "WSO2", description: "Industry visit to WSO2", category: "IT" },
    { id: 6, src: "/images/5.jpg", title: "Devthon 2.0", description: "Organized a Web Development Competition as the Director of Web and PR", category: "Leo" },
    { id: 7, src: "/images/6.jpg", title: "Devthon 2.0", description: "Organized a Web Development Competition as the Director of Web and PR", category: "Leo" },
    { id: 8, src: "/images/8.jpg", title: "Girl Guide Activities", description: "Participating in community service, camping, and leadership programs as a President Awarded Girl Guide", category: "School" },
    { id: 9, src: "/images/14.jpg", title: "Youth Camp", description: "Participating in leadership developping activities and programs", category: "Leo" },
    { id: 10, src: "/images/12.jpg", title: "Winning Moments", description: "For Project NextWave", category: "Leo" },
    { id: 11, src: "/images/16.jpg", title: "Winning Moments", description: "For Project Devthon2.0", category: "Leo" },
    { id: 12, src: "/images/15.jpg", title: "Codextalgia", description: "Teaching Python and IT skills to school students through Codextalgia", category: "Leo" },
    { id: 13, src: "/images/10.jpg", title: "Dance Performance", description: "Performing with the university dance crew during events", category: "Dancing" },
    { id: 14, src: "/images/11.jpg", title: "Dance Performance", description: "Performing with the university dance crew during events", category: "Dancing" },
    { id: 15, src: "/images/17.jpg", title: "Dance Performance", description: "Performing with the university dance crew during events", category: "Dancing" },
    { id: 16, src: "/images/18.jpg", title: "Dance Performance", description: "Performing with the university dance crew during events", category: "Dancing" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Auto-play slideshow
  useEffect(() => {
    if (!isAutoPlay || isHovered) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, isHovered, photos.length]); // ✅ fixed dependency

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % photos.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + photos.length) % photos.length);
  const goToImage = (index: number) => setCurrentImageIndex(index);

  const getSlideTransformClass = (position: number): string => {
    if (isMobile) {
      if (position === 0) return "[transform:translateX(0px)_translateZ(0px)_rotateY(0deg)_scale(1)] opacity-100 z-30";
      if (position === -1) return "[transform:translateX(-95px)_translateZ(-110px)_rotateY(-14deg)_scale(0.86)] opacity-60 z-20";
      if (position === 1) return "[transform:translateX(95px)_translateZ(-110px)_rotateY(14deg)_scale(0.86)] opacity-60 z-20";
      return "[transform:translateX(0px)_translateZ(-110px)_rotateY(0deg)_scale(0.86)] opacity-0 z-10 pointer-events-none";
    }

    if (position === 0) return "[transform:translateX(0px)_translateZ(0px)_rotateY(0deg)_scale(1)] opacity-100 z-30";
    if (position === -1) return "[transform:translateX(-200px)_translateZ(-200px)_rotateY(-25deg)_scale(0.8)] opacity-60 z-20";
    if (position === 1) return "[transform:translateX(200px)_translateZ(-200px)_rotateY(25deg)_scale(0.8)] opacity-60 z-20";
    if (position === -2) return "[transform:translateX(-400px)_translateZ(-200px)_rotateY(-50deg)_scale(0.8)] opacity-60 z-10";
    if (position === 2) return "[transform:translateX(400px)_translateZ(-200px)_rotateY(50deg)_scale(0.8)] opacity-60 z-10";
    return "[transform:translateX(0px)_translateZ(-200px)_rotateY(0deg)_scale(0.8)] opacity-0 z-10 pointer-events-none";
  };

  const getCardAccentClass = (index: number): string => {
    const palette = ["memory-card-start", "memory-card-mid", "memory-card-end"];
    return palette[index % 3];
  };

  return (
    <div className="min-h-screen text-white py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1200 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'
        }`}>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">
              Memories
            </span>
          </h1>
          <div className={`w-24 h-1 mx-auto rounded-full gradient-bg transform transition-all duration-1000 delay-300 ${
            isVisible ? 'scale-x-100' : 'scale-x-0'
          }`}></div>
          <p className="text-gray-400 mt-6 text-base sm:text-lg max-w-2xl mx-auto">
            A glimpse into my journey, memories, and moments that define who I am.
          </p>
        </div>

        {/* Main Slideshow Container */}
        <div className={`relative transform transition-all duration-1000 delay-400 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          
          {/* 3D Perspective Container */}
          <div 
            className="relative h-[62vh] sm:h-[70vh] perspective-1000"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Background Images */}
            <div className="absolute inset-0 flex items-center justify-center">
              {photos.map((photo, index) => {
                let position = index - currentImageIndex;
                if (position < -3) position += photos.length;
                if (position > 3) position -= photos.length;

                return (
                  <div
                    key={photo.id}
                    className={`absolute transition-all duration-700 ease-out cursor-pointer ${
                      getSlideTransformClass(position)
                    }`}
                    onClick={() => position !== 0 && goToImage(index)}
                  >
                    <div className={`relative rounded-2xl overflow-hidden border-4 transition-all duration-500 ${
                      position === 0 
                        ? `${getCardAccentClass(index)} shadow-2xl` 
                        : 'hover:border-gray-400/70'
                    }`}> 
                      <Image
                        src={photo.src}
                        alt={photo.title}
                        width={isMobile ? 230 : 320}
                        height={isMobile ? 276 : 384}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      
                      {/* Image Overlay */}
                      <div className={`absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${
                        position === 0 ? 'opacity-100' : 'opacity-0'
                      }`}>
                        {position === 0 && (
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="px-2 py-1 bg-purple-600/80 text-xs font-medium rounded-full">
                                {photo.category}
                              </span>
                              <Heart size={16} className="text-red-400" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{photo.title}</h3>
                            <p className="text-gray-300 text-sm">{photo.description}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <button type="button" aria-label="Previous image" title="Previous image" onClick={prevImage} className="memory-nav-btn memory-nav-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-3 rounded-full border transition-all duration-300 hover:scale-110 backdrop-blur-sm">
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button type="button" aria-label="Next image" title="Next image" onClick={nextImage} className="memory-nav-btn memory-nav-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-3 rounded-full border transition-all duration-300 hover:scale-110 backdrop-blur-sm">
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Auto-play Control */}
            <button type="button" aria-label={isAutoPlay ? 'Pause slideshow' : 'Play slideshow'} title={isAutoPlay ? 'Pause slideshow' : 'Play slideshow'} onClick={() => setIsAutoPlay(!isAutoPlay)} className="memory-nav-btn memory-nav-mid absolute top-4 right-4 z-40 p-3 rounded-full border transition-all duration-300 hover:scale-110 backdrop-blur-sm">
              {isAutoPlay ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white" />}
            </button>

            {/* Photo Counter */}
            <div className="absolute top-4 left-4 z-40 flex items-center gap-2 px-4 py-2 bg-black/50 rounded-full border border-gray-600 backdrop-blur-sm">
              <Camera size={16} className="text-accent-gradient" />
              <span className="text-white text-sm font-medium">
                {currentImageIndex + 1} / {photos.length}
              </span>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-start sm:justify-center mt-10 sm:mt-12 gap-3 px-2 sm:px-4 overflow-x-auto pb-2">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => goToImage(index)}
                className={`relative shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-110 ${
                  index === currentImageIndex 
                    ? 'border-purple-500 shadow-lg shadow-purple-500/50' 
                    : 'border-gray-600 hover:border-purple-400'
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {index === currentImageIndex && (
                  <div className="absolute inset-0 memory-thumb-overlay"></div>
                )}
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-8 mx-auto max-w-md">
            <progress className="memory-progress w-full h-1 rounded-full overflow-hidden" max={photos.length} value={currentImageIndex + 1}></progress>
            <div className="flex justify-between mt-2 text-xs text-gray-400">
              <span>Journey Memories</span>
              <span>{Math.round(((currentImageIndex + 1) / photos.length) * 100)}% Complete</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for 3D perspective */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .memory-card-start {
          border-color: var(--gradient-start);
          box-shadow: 0 0 30px rgba(183, 29, 238, 0.3);
        }

        .memory-card-mid {
          border-color: var(--gradient-mid);
          box-shadow: 0 0 30px rgba(201, 77, 135, 0.3);
        }

        .memory-card-end {
          border-color: var(--gradient-end);
          box-shadow: 0 0 30px rgba(216, 118, 49, 0.3);
        }

        .memory-nav-btn {
          background-color: rgba(0, 0, 0, 0.5);
        }

        .memory-nav-prev {
          border-color: var(--gradient-start);
        }

        .memory-nav-prev:hover {
          background: linear-gradient(135deg, color-mix(in srgb, var(--gradient-start) 50%, transparent), color-mix(in srgb, var(--gradient-mid) 30%, transparent));
        }

        .memory-nav-next {
          border-color: var(--gradient-end);
        }

        .memory-nav-next:hover {
          background: linear-gradient(135deg, color-mix(in srgb, var(--gradient-end) 50%, transparent), color-mix(in srgb, var(--gradient-mid) 30%, transparent));
        }

        .memory-nav-mid {
          border-color: var(--gradient-mid);
        }

        .memory-nav-mid:hover {
          background: linear-gradient(135deg, color-mix(in srgb, var(--gradient-mid) 50%, transparent), color-mix(in srgb, var(--gradient-end) 30%, transparent));
        }

        .memory-thumb-overlay {
          background: linear-gradient(135deg, color-mix(in srgb, var(--gradient-start) 20%, transparent), color-mix(in srgb, var(--gradient-mid) 20%, transparent), color-mix(in srgb, var(--gradient-end) 20%, transparent));
        }

        .memory-progress {
          background-color: rgb(31, 41, 55);
          color: var(--gradient-start);
        }

        .memory-progress::-webkit-progress-bar {
          background-color: rgb(31, 41, 55);
          border-radius: 9999px;
        }

        .memory-progress::-webkit-progress-value {
          background: linear-gradient(to right, var(--gradient-start), var(--gradient-mid), var(--gradient-end));
          border-radius: 9999px;
          transition: width 300ms ease;
        }

        .memory-progress::-moz-progress-bar {
          background: linear-gradient(to right, var(--gradient-start), var(--gradient-mid), var(--gradient-end));
          border-radius: 9999px;
        }
      `}</style>
    </div>
  );
};

export default MemoriesPage;
