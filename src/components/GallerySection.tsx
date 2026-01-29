"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Gallery preview images - 8 images only for section
const galleryPreview = [
  {
    id: 1,
    src: "/src/assets/gallery/preview-1.jpeg",
    alt: "Republic",
    category: "Food Drive", // ✅ Added category
  },
  {
    id: 2,
    src: "/src/assets/gallery/preview-2.jpeg",
    alt: "Republic", // ✅ Added alt
    category: "Republic", // ✅ Optional: you can remove or modify this if not needed
  },
  {
    id: 3,
    src: "/src/assets/gallery/preview-3.jpeg",
    alt: "Republic", // ✅ Added alt
    category: "Republic", // ✅ Optional
  },
  {
    id: 4,
    src: "/src/assets/gallery/preview-4.jpeg",
    alt: "Women Empowerment",
    category: "Community",
  },
  {
    id: 5,
    src: "/src/assets/gallery/preview-5.jpeg",
    alt: "Food Drive",
    category: "Community",
  },
  {
    id: 6,
    src: "/src/assets/gallery/preview-6.jpeg",
    alt: "Medical Camp",
    category: "Healthcare",
  },
  {
    id: 7,
    src: "/src/assets/gallery/preview-7.jpeg",
    alt: "School Support",
    category: "Education",
  },
  {
    id: 8,
    src: "/src/assets/gallery/preview-8.jpeg",
    alt: "Community Outreach",
    category: "Community",
  },
];

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-custom mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#f59f0a] font-medium uppercase tracking-wider text-sm">
            Moments That Matter
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#17402d] mt-3 mb-6">
            Gallery Highlights
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Capturing the smiles, hope, and transformative moments from our
            initiatives across Pune
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {galleryPreview.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                // onError={(e) => {
                //   e.target.src = `https://placehold.co/400x400/17402d/f59f0a?text=Image+${image.id}`;
                // }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17402d]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-medium opacity-90">
                    {image.category}
                  </p>
                  <p className="font-semibold mt-1">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => (window.location.href = "/gallery")}
            className="group border-[#17402d] text-[#17402d] hover:bg-[#17402d] hover:text-white"
          >
            View Full Gallery
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
