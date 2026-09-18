
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen pt-20 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <source src="/videos/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-950/70 z-10"></div>

      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tighter mb-6">
          <span className="text-gradient">Digital Experiences</span>
          <br />
          Crafted with Intelligence
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-300 mb-10">
          We build cutting-edge web applications and AI-powered solutions that
          drive business growth and user engagement.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/services"
            className="px-8 py-3 rounded-md font-semibold text-white bg-orange-600 hover:bg-orange-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Services
          </Link>
          <Link href="/projects"
            className="px-8 py-3 rounded-md font-semibold text-white border border-neutral-700 bg-neutral-900/50 hover:bg-neutral-800 transition-all duration-300 transform hover:scale-105"
          >
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
