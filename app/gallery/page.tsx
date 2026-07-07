"use client";
import { useState } from "react";
import Image from "next/image";
import BentoGallery from "@/components/gallery/BentoGallery";
import { galleryEvents } from "@/data/gallery";

// Cinematic dark gallery: a light "Moments" wall over an ambient navy field.
// One event open at a time; expanding reveals that event's bento collage.
export default function GalleryPage() {
  const [openId, setOpenId] = useState<number | null>(galleryEvents[0]?.id ?? null);
  const totalPhotos = galleryEvents.reduce((n, e) => n + e.images.length, 0);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060d29] text-[#E4E4FF]">
      {/* ambient glows */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60rem 40rem at 15% -10%, rgba(75,99,183,0.28), transparent 60%), radial-gradient(50rem 40rem at 110% 20%, rgba(139,159,222,0.18), transparent 55%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#040819]" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-14 md:px-12">
        {/* Header */}
        <div className="animate-fade-up grid grid-cols-1 items-end gap-y-6 md:grid-cols-2 md:gap-x-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B9FDE] backdrop-blur md:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8B9FDE]" />
              IoT Lab · Archive
            </span>
            <p className="mt-4 max-w-[300px] text-sm font-medium uppercase leading-relaxed tracking-wide text-[#c9d3f5]/90">
              A collection of the best moments we lived together at our flagship
              events.
            </p>
            <p className="mt-3 font-mono text-xs tracking-widest text-[#8B9FDE]">
              {galleryEvents.length} EVENTS · {totalPhotos} PHOTOS
            </p>
          </div>
          <div className="flex items-end justify-start md:justify-end">
            <h1 className="bg-gradient-to-br from-white via-[#C1D0FF] to-[#7E93DA] bg-clip-text font-extrabold leading-[0.85] tracking-tight text-transparent text-[clamp(3.5rem,11vw,8.5rem)] drop-shadow-[0_8px_40px_rgba(80,110,220,0.25)]">
              GALLERY
            </h1>
          </div>
        </div>

        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[#E4E4FF]/40 to-transparent" />

        <div className="mt-10 flex flex-col gap-6 md:flex-row">
          <div className="flex items-start justify-center md:w-[40px] md:items-center md:justify-start">
            <span className="whitespace-nowrap font-mono text-[10px] font-semibold tracking-[0.3em] text-[#8B9FDE] md:rotate-[-90deg]">
              #momentsofIoT
            </span>
          </div>

          <div className="flex flex-1 flex-col gap-5">
            {galleryEvents.map((event, i) => {
              const isOpen = openId === event.id;
              return (
                <div
                  key={event.id}
                  className={`animate-fade-up rounded-3xl border p-4 transition-colors duration-300 md:p-5 ${
                    isOpen
                      ? "border-[#8B9FDE]/30 bg-white/[0.05]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : event.id)}
                    aria-expanded={isOpen}
                    className="grid w-full cursor-pointer grid-cols-1 items-center gap-6 text-left md:grid-cols-[1fr_320px] md:gap-8"
                  >
                    <div className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10">
                      <Image
                        src={event.coverImage}
                        alt={event.eventName}
                        width={640}
                        height={320}
                        sizes="(max-width: 768px) 100vw, 640px"
                        className="h-[220px] w-full object-cover object-[50%_30%] transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110 md:h-[280px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                      <span className="absolute bottom-3 left-4 font-mono text-[10px] font-semibold uppercase tracking-widest text-white/80">
                        {String(i + 1).padStart(2, "0")} · Flagship
                      </span>
                    </div>

                    <div className="flex h-full flex-col justify-between gap-6">
                      <div className="space-y-2">
                        <h2 className="bg-gradient-to-r from-white to-[#C1D0FF] bg-clip-text text-3xl font-bold leading-tight text-transparent md:text-4xl">
                          {event.eventName}
                        </h2>
                        <p className="text-sm tracking-wide text-[#8B9FDE]">
                          {event.date}
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span
                          className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg transition-all duration-300 ${
                            isOpen
                              ? "bg-white/10 text-white ring-1 ring-white/20"
                              : "bg-gradient-to-r from-[#E4E4FF] to-[#B9C8FF] text-[#09164A] hover:shadow-[0_8px_30px_rgba(140,160,230,0.35)]"
                          }`}
                        >
                          {isOpen ? "Minimize" : "Explore"}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                          >
                            <path
                              d="M6 9l6 6 6-6"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <p className="text-right font-mono text-xs font-semibold tracking-wider text-[#8B9FDE]">
                          {event.images.length} PHOTOS
                        </p>
                      </div>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-4 border-t border-white/10 pt-2">
                      <BentoGallery images={event.images} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
