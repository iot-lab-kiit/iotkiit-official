"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryEvents } from "@/data/gallery";
import { Camera, Sparkles, ChevronDown, Image as ImageIcon, X, Maximize2 } from "lucide-react";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeLightbox, setActiveLightbox] = useState<string | null>(null);

  const totalPhotos = galleryEvents.reduce((n, e) => n + e.images.length, 0);

  // Flatten images with metadata for masonry showcase
  const allImages = galleryEvents.flatMap((evt) =>
    evt.images.map((img) => ({
      url: img,
      event: evt.eventName,
      date: evt.date,
    }))
  );

  const filteredImages =
    selectedCategory === "All"
      ? allImages
      : allImages.filter((img) => img.event.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-white py-24 px-6 lg:px-12">
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[650px] rounded-full bg-blue-600/15 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 backdrop-blur-xl">
              <Camera className="h-4 w-4 text-cyan-300" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
                Visual Darkroom Archive
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              LAB ARCHIVE & MOMENTS
            </h1>

            <p className="text-gray-300 font-light text-base sm:text-lg">
              Capturing core memories, hackathon victories, hardware testing sessions, and community life at IoT Lab KIIT.
            </p>
          </div>

          <div className="font-mono text-xs tracking-widest text-cyan-400 border border-cyan-400/20 bg-cyan-950/30 p-4 rounded-2xl backdrop-blur-xl">
            <span className="text-gray-400 block mb-1">{`// TOTAL ARCHIVE METRICS`}</span>
            <span>{galleryEvents.length} FLAGSHIP EVENTS · {totalPhotos} HQ PHOTOS</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {["All", "Hackathon", "Innovate", "Workshop", "Orientation"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 backdrop-blur-xl ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow-blue scale-105"
                  : "border border-white/10 bg-white/[0.03] text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat === "All" ? "All Moments" : cat}
            </button>
          ))}
        </div>

        {/* Masonry Image Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveLightbox(img.url)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:-translate-y-2 hover:shadow-2xl aspect-[4/3]"
            >
              <Image
                src={img.url}
                alt={img.event}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md">
                    <Maximize2 className="h-4 w-4" />
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-cyan-300 uppercase tracking-wider block">
                    {img.date}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white leading-snug">
                    {img.event}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          onClick={() => setActiveLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
        >
          <button
            onClick={() => setActiveLightbox(null)}
            className="absolute top-6 right-6 p-3 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative w-full max-w-5xl aspect-[16/10] overflow-hidden rounded-3xl border border-white/20">
            <Image src={activeLightbox} alt="Enlarged photo" fill className="object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}
