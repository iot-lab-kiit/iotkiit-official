import Image from 'next/image';
import { Users, Sparkles } from 'lucide-react';

const TeamHeader = () => {
 return (
 <section className="relative overflow-hidden bg-white py-20 px-6 lg:px-12 text-brand-blue border-b border-brand-blue">
 {/* Background Ambient Glow */}
 <div className="pointer-events-none absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[550px] bg-brand-blue/10 blur-[150px]" />
 <div className="pointer-events-none absolute top-10 right-10 h-72 w-72 bg-brand-blue/10 blur-[120px]" />

 <div className="relative mx-auto max-w-7xl">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
 
 {/* Left Hero Header */}
 <div className="lg:col-span-7 space-y-6">

 <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-brand-blue leading-tight">
 MEET THE <br />
 <span>
 INNOVATORS & ENGINEERS
 </span>
 </h1>

 <p className="text-brand-blue/80 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
 “Individual commitment to a group effort — that is what makes a team work, a company work, a society work, a civilization work.”
 </p>
 </div>

 {/* Right Spotlight Team Image */}
 <div className="lg:col-span-5 relative">
 <div className="relative aspect-[4/3] w-full overflow-hidden border border-brand-blue bg-brand-blue/10 p-2 -2xl shadow-brutal group">
 <div className="relative h-full w-full overflow-hidden ">
 <Image
 src="/images/team-group.jpeg"
 alt="IoT Lab KIIT Team"
 fill
 className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-70" />
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
};

export default TeamHeader;
