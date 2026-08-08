import React from 'react';
import Image from 'next/image';

const Announcement = () => {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-40 flex justify-center pointer-events-none px-4">
      {/* Animated gradient border wrapper */}
      <div className="pointer-events-auto relative rounded-full p-[1px] shadow-[0_10px_40px_rgba(59,130,246,0.2)] overflow-hidden">

        {/* Animated background gradient line */}
        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-sky-400 animate-[spin_3s_linear_infinite]" />

        <div className="relative flex items-center gap-4 sm:gap-6 rounded-full bg-slate-950/95 px-4 py-2 sm:px-6 sm:py-3 backdrop-blur-xl">

          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 overflow-hidden shrink-0">
              <Image
                src="/images/innovance-icon.svg"
                alt="Innovance Icon"
                fill
                className="object-contain p-0.5 sm:p-1"
                sizes="48px"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[13px] sm:text-sm font-extrabold tracking-wide bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Encode X Zenith Cup
              </p>
              <p className="text-[10px] sm:text-xs font-medium text-blue-300">
                Registrations Open!
              </p>
            </div>
          </div>

          <div className="hidden sm:block h-8 w-px bg-white/10"></div>

          <a
            href="https://encode-x-zenith-cup.vercel.app/register"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white text-black px-5 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm font-bold shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
          >
            <span className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-black/5" />
            </span>
            <span className="relative">Register Now</span>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Announcement;
