import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="mt-10 relative w-full h-[600px] flex items-center">
      
      {/* 1. BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 w-full h-full bg-white">
        <Image 
          src="/img_home_3.png" // Make sure this path is correct in your public folder
          alt="Call Center Background"
          fill // This creates the background effect
          className="object-cover" // This ensures the image covers the area without stretching
          priority
        />
        
        {/* 2. OPTIONAL OVERLAY (Makes text readable) */}
        {/* Adjust 'bg-white/80' to 'bg-black/50' if you want a dark background instead */}
        <div className="absolute inset-0 bg-white/90 sm:bg-transparent sm:bg-gradient-to-r from-white via-white/10 to-transparent"></div>
      </div>

      {/* 3. CONTENT LAYER (Text on Top Left) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl"> {/* Limits width so text doesn't stretch too far right */}
          
          <h4 className="text-sm font-bold tracking-widest text-brand-cyan uppercase mb-3">
            Discover the Colorful World
          </h4>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-brand-navy mb-6 leading-tight">
            Efficiency <br/>
            <span className="text-brand-cyan">Booster</span>
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Drive revenue and reduce overhead. From inbound support to outbound sales, our expert team integrates seamlessly with your operations to deliver measurable success.
          </p>
          
          <Link 
            href="#services" 
            className="inline-block px-10 py-4 bg-brand-cyan text-brand-navy font-bold rounded-full shadow-lg hover:bg-brand-cyan/80 transform hover:-translate-y-1 transition duration-300"
          >
            DISCOVER NOW
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Hero;