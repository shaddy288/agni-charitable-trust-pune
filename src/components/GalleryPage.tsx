"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Play, ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Navbar } from "./Navbar";

// Import all 23 images
import img1 from "@/assets/gallery/preview-1.jpeg";
import img2 from "@/assets/gallery/preview-2.jpeg";
import img3 from "@/assets/gallery/preview-3.jpeg";
import img4 from "@/assets/gallery/preview-4.jpeg";
import img5 from "@/assets/gallery/preview-5.jpeg";
import img6 from "@/assets/gallery/preview-6.jpeg";
import img7 from "@/assets/gallery/preview-7.jpeg";
import img8 from "@/assets/gallery/preview-8.jpeg";
import img9 from "@/assets/gallery/preview-9.jpeg";
import img10 from "@/assets/gallery/preview-10.jpeg";
import img11 from "@/assets/gallery/preview-11.jpeg";
import img12 from "@/assets/gallery/preview-12.jpeg";
import img13 from "@/assets/gallery/preview-13.jpeg";
import img14 from "@/assets/gallery/preview-14.jpeg";
import img15 from "@/assets/gallery/preview-15.jpeg";
import img16 from "@/assets/gallery/preview-16.jpeg";
import img17 from "@/assets/gallery/preview-17.jpeg";
import img18 from "@/assets/gallery/preview-18.jpeg";
import img19 from "@/assets/gallery/preview-19.jpeg";
import img20 from "@/assets/gallery/preview-20.jpeg";
import img21 from "@/assets/gallery/preview-21.jpeg";
import img22 from "@/assets/gallery/preview-22.jpeg";
import img23 from "@/assets/gallery/preview-23.jpeg";

// Import video files
import thumb1 from "@/assets/gallery/thumb-1.png";
import video1 from "@/assets/gallery/story1.mp4";

// Create images array with imported files
const imageFiles = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
];

const galleryImages = imageFiles.map((imgSrc, i) => ({
  id: i + 1,
  src: imgSrc, // Use imported image
  alt: `Gallery Image ${i + 1}`,
  category: "Food Drive",
}));

// Videos
const videos = [
  {
    id: 1,
    title: "Our Impact Story",
    thumbnail: thumb1, // Use imported thumbnail
    videoUrl: video1, // Use imported video
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [playingVideo, setPlayingVideo] = useState(null);

  const categories = ["All", "Food Drive"];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const goToNext = () => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id,
    );
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const goToPrev = () => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id,
    );
    const prevIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#17402d] to-[#1a4d35] text-white py-20 px-4">
          <div className="max-w-7xl mx-auto pt-10">
            {/* Back to Home */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => (window.location.href = "/")}
              className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </motion.button>

            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold mb-4"
              >
                Our Gallery
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl opacity-90"
              >
                Capturing moments of change and hope
              </motion.p>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#17402d] mb-4">
                Photo Gallery
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Witness the impact we're making in communities across Pune
              </p>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-[#f59f0a] text-white shadow-lg scale-105"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Image Grid */}
            <motion.div
              layout
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.02 }}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-square bg-gray-200">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = `https://placehold.co/400x400/17402d/f59f0a?text=Image+${image.id}`;
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17402d]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold">{image.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#17402d] mb-4">
                Video Gallery
              </h2>
              <p className="text-lg text-gray-600">
                Watch our stories come to life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {playingVideo === video.id ? (
                    <div className="aspect-video">
                      <video
                        width="100%"
                        height="100%"
                        controls
                        autoPlay
                        className="w-full h-full"
                      >
                        <source src={video.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    <div
                      className="relative aspect-video cursor-pointer group"
                      onClick={() => setPlayingVideo(video.id)}
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `https://placehold.co/600x400/17402d/f59f0a?text=Video+${video.id}`;
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#f59f0a] flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#17402d]">
                      {video.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 hidden md:block"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 hidden md:block"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            <motion.img
              key={selectedImage.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                e.target.src = `https://placehold.co/800x800/17402d/f59f0a?text=Image+${selectedImage.id}`;
              }}
            />

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center">
              <p className="text-lg font-semibold">{selectedImage.category}</p>
              <p className="text-sm opacity-75">
                {filteredImages.findIndex(
                  (img) => img.id === selectedImage.id,
                ) + 1}{" "}
                / {filteredImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}
