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

  return (
    <div className="min-h-screen text-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1200 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'
        }`}>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">
              Memories
            </span>
          </h1>
          <div className={`w-24 h-1 mx-auto rounded-full transform transition-all duration-1000 delay-300 ${
            isVisible ? 'scale-x-100' : 'scale-x-0'
          }`} style={{background: 'linear-gradient(to right, var(--gradient-mid), var(--gradient-end), var(--gradient-start))'}}></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            A glimpse into my journey, memories, and moments that define who I am.
          </p>
        </div>

        {/* Main Slideshow Container */}
        <div className={`relative transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          
          {/* 3D Perspective Container */}
          <div 
            className="relative h-[70vh] perspective-1000"
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
                      position === 0 ? 'z-30' : position === -1 || position === 1 ? 'z-20' : 'z-10'
                    }`}
                    style={{
                      transform: `
                        translateX(${position * 200}px) 
                        translateZ(${position === 0 ? 0 : -200}px) 
                        rotateY(${position * 25}deg) 
                        scale(${position === 0 ? 1 : 0.8})
                      `,
                      opacity: Math.abs(position) > 2 ? 0 : position === 0 ? 1 : 0.6
                    }}
                    onClick={() => position !== 0 && goToImage(index)}
                  >
                    <div className={`relative rounded-2xl overflow-hidden border-4 transition-all duration-500 ${
                      position === 0 
                        ? 'shadow-2xl' 
                        : 'hover:border-gray-400/70'
                    }`} style={{
                      borderColor: position === 0 ? (index % 3 === 0 ? 'var(--gradient-start)' : index % 3 === 1 ? 'var(--gradient-mid)' : 'var(--gradient-end)') : 'rgb(107, 114, 128, 0.5)',
                      boxShadow: position === 0 ? (index % 3 === 0 ? '0 0 30px rgba(183, 29, 238, 0.3)' : index % 3 === 1 ? '0 0 30px rgba(201, 77, 135, 0.3)' : '0 0 30px rgba(216, 118, 49, 0.3)') : 'none'
                    }}>
                      <Image
                        src={photo.src}
                        alt={photo.title}
                        width={320}
                        height={384}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      
                      {/* Image Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${
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
                            <h3 className="text-xl font-bold text-white mb-2">{photo.title}</h3>
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
            <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-black/50 rounded-full border transition-all duration-300 hover:scale-110 backdrop-blur-sm" style={{
              borderColor: 'var(--gradient-start)',
              backgroundColor: 'rgb(0, 0, 0, 0.5)'
            }} onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, var(--gradient-start)/50, var(--gradient-mid)/30)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgb(0, 0, 0, 0.5)'}>
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-black/50 rounded-full border transition-all duration-300 hover:scale-110 backdrop-blur-sm" style={{
              borderColor: 'var(--gradient-end)',
              backgroundColor: 'rgb(0, 0, 0, 0.5)'
            }} onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, var(--gradient-end)/50, var(--gradient-mid)/30)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgb(0, 0, 0, 0.5)'}>
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Auto-play Control */}
            <button onClick={() => setIsAutoPlay(!isAutoPlay)} className="absolute top-4 right-4 z-40 p-3 bg-black/50 rounded-full border transition-all duration-300 hover:scale-110 backdrop-blur-sm" style={{
              borderColor: 'var(--gradient-mid)',
              backgroundColor: 'rgb(0, 0, 0, 0.5)'
            }} onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, var(--gradient-mid)/50, var(--gradient-end)/30)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgb(0, 0, 0, 0.5)'}>
              {isAutoPlay ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white" />}
            </button>

            {/* Photo Counter */}
            <div className="absolute top-4 left-4 z-40 flex items-center gap-2 px-4 py-2 bg-black/50 rounded-full border border-gray-600 backdrop-blur-sm">
              <Camera size={16} style={{color: 'var(--gradient-start)'}} />
              <span className="text-white text-sm font-medium">
                {currentImageIndex + 1} / {photos.length}
              </span>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-12 gap-3 px-4">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => goToImage(index)}
                className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-110 ${
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
                  <div style={{background: 'linear-gradient(135deg, var(--gradient-start)/20, var(--gradient-mid)/20, var(--gradient-end)/20)'}} className="absolute inset-0"></div>
                )}
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-8 mx-auto max-w-md">
            <div className="w-full bg-gray-800 rounded-full h-1 overflow-hidden">
              <div className="h-full rounded-full transition-all duration-300" style={{
              background: 'linear-gradient(to right, var(--gradient-start), var(--gradient-mid), var(--gradient-end))',
              width: `${((currentImageIndex + 1) / photos.length) * 100}%`
            }}></div>
            </div>
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
      `}</style>
    </div>
  );
};

export default MemoriesPage;
