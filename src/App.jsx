import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent, useTransform } from 'framer-motion';

const experiences = [
  {
    number: "01",
    role: "GRAPHIC DESIGNER & VIDEO EDITOR",
    company: "Creative Media & Visual Production",
    period: "2024 - PRESENT (1.7 YEARS)",
    details: [
      "Worked on high-converting social media creatives, marketing collaterals, commercial video editing, and motion graphics for various projects.",
      "Developed visually compelling campaign assets adhering strictly to client branding, modern typography, and color theory guidelines.",
      "Collaborated effectively across project teams ensuring seamless creative alignment, rapid revisions, and punctual deliverables."
    ],
    tags: ["Graphic Design", "Video Editing", "Motion Graphics", "Social Media"],
    className: "md:absolute md:top-[10px] md:right-[2%] lg:right-[5%] rotate-1 md:rotate-2",
    aosType: "fade-left",
    aosDelay: "100",
    theme: "light"
  },
  {
    number: "02",
    role: "COMMERCIAL VIDEO EDITING & REELS",
    company: "Post-Production & Content Creation",
    period: "Premiere Pro & After Effects",
    details: [
      "Edited dynamic short-form social reels, promotional videos, and product showcase clips with beat-synced audio and seamless pacing.",
      "Executed precision multi-track audio leveling, dialogue enhancement, sound effects integration, and ambient background score sync.",
      "Applied professional color correction and LUT grading to establish visually cinematic, brand-consistent video tones."
    ],
    tags: ["Premiere Pro", "Video Editing", "Color Grading", "Audio Sync"],
    className: "md:absolute md:top-[480px] md:left-[2%] lg:left-[5%] -rotate-1 md:-rotate-2",
    aosType: "fade-right",
    aosDelay: "200",
    theme: "dark"
  },
  {
    number: "03",
    role: "MOTION GRAPHICS & KINETIC TYPOGRAPHY",
    company: "Visual FX & Motion Design",
    period: "After Effects & Illustrator",
    details: [
      "Crafted fluid kinetic typography, animated logo reveals, lower-thirds, title sequences, and custom motion transitions.",
      "Animated complex vector illustrations and shape layers using graph editor curves for natural, high-impact easing.",
      "Constructed reusable motion templates (MOGRTs) for streamlined video editing workflows."
    ],
    tags: ["After Effects", "Motion Graphics", "Kinetic Typography", "Logo Reveals"],
    className: "md:absolute md:top-[900px] md:right-[2%] lg:right-[8%] rotate-1 md:rotate-3",
    aosType: "fade-left",
    aosDelay: "300",
    theme: "light"
  },
  {
    number: "04",
    role: "AI-POWERED DESIGN & MARKETING COLLATERALS",
    company: "Web D School Certified Workflow",
    period: "Midjourney, Gemini, ChatGPT, InDesign",
    details: [
      "Certified in AI-powered Graphic Design from Web D School, Chennai, mastering modern generative image and prompt workflows.",
      "Integrated Midjourney, Gemini, and ChatGPT to accelerate visual moodboarding, concept exploration, and creative storytelling.",
      "Designed print-ready marketing collaterals including multi-page brochures, event posters, and flyers with strict prepress standards."
    ],
    tags: ["AI Graphic Design", "Midjourney", "InDesign", "Print Layouts"],
    className: "md:absolute md:top-[1350px] md:left-[2%] lg:left-[5%] -rotate-1 md:-rotate-2",
    aosType: "fade-right",
    aosDelay: "400",
    theme: "dark"
  }
];

const ExperienceCard = ({ exp, pathLength, containerRef }) => {
  const cardRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!cardRef.current || !containerRef.current) return;
    const targetRect = cardRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const relativeTop = targetRect.top - containerRect.top;
    const containerHeight = containerRect.height;
    const triggerPoint = relativeTop + 50;
    const currentProgress = latest * containerHeight;
    if (currentProgress >= triggerPoint && !isActive) {
      setIsActive(true);
    } else if (currentProgress < triggerPoint && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div
      ref={cardRef}
      data-aos={exp.aosType}
      data-aos-delay={exp.aosDelay}
      className={`w-80 sm:w-96 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.01] transition-all duration-700 z-10 ${exp.className} ${
        isActive
          ? 'bg-luxury-card border border-luxury-gold shadow-[0_0_30px_rgba(122,59,236,0.35)]'
          : 'bg-[#181528] border border-white/5 shadow-lg'
      }`}
    >
      <div className="w-5 h-5 bg-gradient-to-br from-violet-300 to-violet-600 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-violet-400 z-10 flex items-center justify-center">
        <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-luxury-gold' : 'bg-gray-600'}`}></div>
      </div>
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-6 flex flex-col min-h-[300px] transition-colors duration-700 ${isActive ? 'bg-white/5' : 'bg-black/20'}`}>
        <div className="flex justify-between items-center mb-3">
          <span className={`text-base font-bold font-serif italic transition-colors duration-700 ${isActive ? 'text-luxury-gold' : 'text-gray-500'}`}>
            {exp.number}
          </span>
          <span className={`text-[10px] font-bold tracking-wider uppercase transition-colors duration-700 ${isActive ? 'text-luxury-gold' : 'text-gray-500'}`}>
            {exp.period}
          </span>
        </div>
        <h3 className={`text-xl font-black mb-1 tracking-tight transition-colors duration-700 ${isActive ? 'text-luxury-ivory' : 'text-white/80'}`}>
          {exp.role}
        </h3>
        <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 transition-colors duration-700 ${isActive ? 'text-luxury-taupe' : 'text-gray-400'}`}>
          {exp.company}
        </h4>
        <ul className={`text-xs leading-relaxed font-medium mb-5 list-disc pl-4 flex-grow flex flex-col gap-2 transition-colors duration-700 ${isActive ? 'text-white/90' : 'text-gray-400'}`}>
          {exp.details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1 mt-auto pt-3 border-t border-dashed border-gray-300/40">
          {exp.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`text-[9px] font-bold px-2.5 py-1 rounded transition-colors duration-700 ${
                isActive
                  ? 'bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/30'
                  : 'bg-white/5 text-gray-400 border border-white/10'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const portfolioLogos = [
  {
    id: 1,
    title: "Sports & Action Poster Design",
    category: "Key Art & Photo Manipulation",
    url: "https://cexjecvsdsycxezxwyyj.supabase.co/storage/v1/object/public/pictures/1.jpeg",
    fallbackUrl: "./assets/projects/1.jpeg"
  },
  {
    id: 2,
    title: "Cinematic Film Key Art",
    category: "Movie Poster & Visual Retouching",
    url: "https://cexjecvsdsycxezxwyyj.supabase.co/storage/v1/object/public/pictures/2.jpeg",
    fallbackUrl: "./assets/projects/2.jpeg"
  },
  {
    id: 3,
    title: "Commercial Brand Campaign",
    category: "Automotive & Social Media Creative",
    url: "https://cexjecvsdsycxezxwyyj.supabase.co/storage/v1/object/public/pictures/3.jpeg",
    fallbackUrl: "./assets/projects/3.jpeg"
  },
  {
    id: 4,
    title: "Educational Marketing Creative",
    category: "Digital Ad Campaign & Layout",
    url: "https://cexjecvsdsycxezxwyyj.supabase.co/storage/v1/object/public/pictures/4.jpeg",
    fallbackUrl: "./assets/projects/4.jpeg"
  },
  {
    id: 5,
    title: "Brand Identity & Promotion",
    category: "Professional Services Creative",
    url: "https://cexjecvsdsycxezxwyyj.supabase.co/storage/v1/object/public/pictures/5.jpeg",
    fallbackUrl: "./assets/projects/5.jpeg"
  },
  {
    id: 6,
    title: "Corporate Marketing Collateral",
    category: "Admissions & Brand Awareness",
    url: "https://cexjecvsdsycxezxwyyj.supabase.co/storage/v1/object/public/pictures/6.jpeg",
    fallbackUrl: "./assets/projects/6.jpeg"
  }
];

const portfolioVideos = [
  {
    id: 1,
    title: "The Atom - Brand Kinetic Motion",
    category: "Motion Graphics & Social Media Reel",
    url: "https://cexjecvsdsycxezxwyyj.supabase.co/storage/v1/object/public/videos/atom%20(1).mp4"
  },
  {
    id: 2,
    title: "HPCL Power 100 Commercial",
    category: "Supercar Automotive Commercial Edit",
    url: "https://cexjecvsdsycxezxwyyj.supabase.co/storage/v1/object/public/videos/car.mp4"
  },
  {
    id: 3,
    title: "HP Pay - App Explainer Reel",
    category: "Product Motion & UI Animation",
    url: "https://cexjecvsdsycxezxwyyj.supabase.co/storage/v1/object/public/videos/hp%20(1).mp4"
  },
  {
    id: 4,
    title: "Corporate Cloud Motion Graphics",
    category: "Digital Brand Motion & Visuals",
    url: "https://cexjecvsdsycxezxwyyj.supabase.co/storage/v1/object/public/videos/WhatsApp%20Video%202026-10-30%20at%205.21.39%20PM.mp4"
  },
  {
    id: 5,
    title: "Kinetic Typography Explainer",
    category: "Educational Reel & Motion Cut",
    url: "https://cexjecvsdsycxezxwyyj.supabase.co/storage/v1/object/public/videos/WhatsApp%20Video%202026-11-03%20at%208.14.07%20PM%20(1).mp4"
  },
  {
    id: 6,
    title: "Lifestyle & Beauty Commercial Cut",
    category: "Influencer & Social Video Edit",
    url: "https://cexjecvsdsycxezxwyyj.supabase.co/storage/v1/object/public/videos/WhatsApp%20Video%202026-11-03%20at%208.19.34%20PM.mp4"
  }
];

function App() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const experienceRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: experienceRef,
    offset: ["start center", "end center"]
  });
  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  const contactRef = useRef(null);
  const { scrollYProgress: contactScrollYProgress } = useScroll({
    target: contactRef,
    offset: ["start end", "end start"]
  });
  const contactY = useTransform(contactScrollYProgress, [0, 1], ["-20%", "30%"]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const [formStatus, setFormStatus] = useState('idle');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    const formData = new FormData(e.target);
    const firstName = formData.get('firstName') || '';
    const lastName = formData.get('lastName') || '';
    const senderEmail = formData.get('email') || '';
    const message = formData.get('message') || '';

    const fullName = `${firstName} ${lastName}`.trim();
    const mailSubject = encodeURIComponent(`Portfolio Inquiry from ${fullName || 'Client'}`);
    const mailBody = encodeURIComponent(
      `Hi Pradhap,

${message}

---
From: ${fullName}
Email: ${senderEmail}`
    );

    window.location.href = `mailto:mpradhappradhap@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    setFormStatus('success');
    e.target.reset();
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <div className="bg-[#0D0B18] min-h-screen text-slate-100 selection:bg-[#7A3BEC] selection:text-white">
      {/* Full-Screen Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 w-full h-screen bg-luxury-beige z-[100000] flex items-center justify-center"
          >
            <motion.div
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter text-center"
            >
              <div className="text-black/10">PRADHAP PORTFOLIO</div>
              <motion.div
                className="absolute top-0 left-0 text-luxury-bg overflow-hidden whitespace-nowrap"
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)" }}
                transition={{
                  duration: 1.6,
                  ease: "easeInOut",
                  delay: 0.2
                }}
              >
                PRADHAP PORTFOLIO
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0D0B18]/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <a href="#" className="text-luxury-ivory text-xl sm:text-2xl font-black tracking-tight whitespace-nowrap uppercase">
              PRADHAP <span className="text-luxury-gold">PORTFOLIO</span>
            </a>
          </div>
          <div className="hidden lg:flex space-x-8 flex-shrink-0">
            <a href="#home" className="text-luxury-ivory/80 hover:text-luxury-ivory font-medium relative group transition-colors duration-300 whitespace-nowrap">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-luxury-ivory/80 hover:text-luxury-ivory font-medium relative group transition-colors duration-300 whitespace-nowrap">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#skills" className="text-luxury-ivory/80 hover:text-luxury-ivory font-medium relative group transition-colors duration-300 whitespace-nowrap">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#experience" className="text-luxury-ivory/80 hover:text-luxury-ivory font-medium relative group transition-colors duration-300 whitespace-nowrap">
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#education" className="text-luxury-ivory/80 hover:text-luxury-ivory font-medium relative group transition-colors duration-300 whitespace-nowrap">
              Education
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="text-luxury-ivory/80 hover:text-luxury-ivory font-medium relative group transition-colors duration-300 whitespace-nowrap">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-luxury-ivory/80 hover:text-luxury-ivory font-medium relative group transition-colors duration-300 whitespace-nowrap">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => setShowResumeModal(true)}
              className="px-5 py-2 rounded-full bg-white/5 border border-white/15 text-luxury-gold font-semibold hover:bg-white/10 transition-all duration-300 text-xs uppercase tracking-wider"
            >
              Resume
            </button>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-luxury-ivory font-semibold hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 backdrop-blur-md whitespace-nowrap"
            >
              Hire Me
            </a>
          </div>
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-luxury-ivory focus:outline-none p-2" aria-label="Toggle Navigation">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-[500px] opacity-100 bg-luxury-bg/95 backdrop-blur-md pb-6 pt-2 border-b border-white/10" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-6 space-y-4">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-luxury-ivory hover:text-luxury-gold font-bold text-lg border-b border-white/10 pb-2 transition-colors">
              Home
            </a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-luxury-ivory hover:text-luxury-gold font-bold text-lg border-b border-white/10 pb-2 transition-colors">
              About
            </a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-luxury-ivory hover:text-luxury-gold font-bold text-lg border-b border-white/10 pb-2 transition-colors">
              Skills
            </a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-luxury-ivory hover:text-luxury-gold font-bold text-lg border-b border-white/10 pb-2 transition-colors">
              Experience
            </a>
            <a href="#education" onClick={() => setIsMenuOpen(false)} className="text-luxury-ivory hover:text-luxury-gold font-bold text-lg border-b border-white/10 pb-2 transition-colors">
              Education
            </a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-luxury-ivory hover:text-luxury-gold font-bold text-lg border-b border-white/10 pb-2 transition-colors">
              Projects
            </a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-luxury-ivory hover:text-luxury-gold font-bold text-lg border-b border-white/10 pb-2 transition-colors">
              Contact
            </a>
            <div className="pt-4 pb-2 flex flex-col gap-2">
              <button
                onClick={() => { setIsMenuOpen(false); setShowResumeModal(true); }}
                className="w-full py-3 rounded-full bg-white/10 border border-white/20 text-luxury-gold font-bold text-center text-sm"
              >
                Preview Resume
              </button>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-block px-6 py-3 rounded-full bg-luxury-gold text-white font-black hover:bg-luxury-beige hover:shadow-[0_0_15px_rgba(191,133,253,0.4)] transition-colors w-full text-center shadow-lg"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative w-full min-h-screen md:h-screen overflow-hidden bg-luxury-bg flex items-center">
        {/* Desktop Hero Banner (Anchored at right bottom with ample headroom, never cropped) */}
        <div className="hidden md:block absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="./assets/hero_pradhap.jpg"
            alt="Pradhap M"
            className="w-full h-full object-cover object-[right_bottom] opacity-95 filter brightness-105"
          />
          {/* Subtle gradients protecting left text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-bg via-luxury-bg/80 to-transparent z-10 w-[55%]"></div>
          <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-luxury-bg to-transparent z-10"></div>
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-luxury-bg/70 to-transparent z-10"></div>
        </div>

        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full filter blur-[150px] pointer-events-none z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full filter blur-[160px] pointer-events-none z-0"></div>

        {/* Responsive Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 md:pt-32 md:pb-20 flex flex-col md:flex-row items-center md:items-end justify-between">
          <div className="flex flex-col items-start text-left max-w-2xl w-full">
            <h1 data-aos="fade-up" className="text-luxury-ivory text-3xl sm:text-4xl md:text-6xl font-black mb-2 tracking-tight">
              Hi, I’m <br /> <span className="text-luxury-ivory uppercase">PRADHAP M</span>
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="100" className="text-luxury-gold text-base sm:text-lg md:text-2xl font-black mb-3 tracking-wider uppercase">
              Graphic Designer &amp; Video Editor
            </h2>
            <p data-aos="fade-up" data-aos-delay="200" className="text-luxury-ivory/80 text-xs sm:text-sm md:text-lg font-semibold mb-6 max-w-lg drop-shadow-md leading-relaxed">
              Creative Graphic Designer, Video Editor, and Motion Graphics Artist skilled in Adobe Creative Suite, seeking to contribute innovative designs and dynamic content in a collaborative environment.
            </p>
            <div data-aos="fade-up" data-aos-delay="400" className="flex flex-row flex-wrap items-center gap-2 md:gap-3 w-full">
              <a
                href="#experience"
                className="px-6 py-3 text-xs md:text-sm rounded-full bg-luxury-ivory text-black font-bold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                View Experience
              </a>
              <a
                href="#contact"
                className="px-6 py-3 text-xs md:text-sm rounded-full bg-luxury-bg/40 border border-white text-luxury-ivory font-bold hover:bg-luxury-bg/60 transition-all duration-300 backdrop-blur-md"
              >
                Contact Me
              </a>
              <button
                onClick={() => setShowResumeModal(true)}
                className="px-6 py-3 text-xs md:text-sm rounded-full bg-luxury-gold border border-luxury-gold text-white font-bold hover:bg-luxury-beige transition-all duration-300 backdrop-blur-md shadow-[0_0_15px_rgba(122,59,236,0.4)] hover:shadow-[0_0_25px_rgba(191,133,253,0.6)]"
              >
                Preview Resume
              </button>
            </div>

            {/* Mobile Hero Visual Card (Dedicated, centered, no text overlap!) */}
            <div data-aos="zoom-in" data-aos-delay="500" className="md:hidden mt-8 w-full flex justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(122,59,236,0.4)] border border-luxury-gold/30 bg-[#12101E]">
                <img
                  src="./assets/hero_pradhap_portrait.jpg"
                  alt="Pradhap M - Graphic Designer & Video Editor"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#0D0B18] to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div data-aos="fade-up" data-aos-delay="800" className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none aos-init">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-luxury-beige drop-shadow-[0_0_10px_rgba(122,59,236,0.8)]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-luxury-card pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans border-b border-luxury-gold/10">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none z-10"></div>
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full filter blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-luxury-gold/10 rounded-full filter blur-[150px] pointer-events-none z-0"></div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">
          {/* Hanging ID Card Format */}
          <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
            <div data-aos="drop-bounce" className="relative flex justify-center w-full aos-init">
              <div className="absolute -top-32 left-1/2 w-3 h-40 bg-luxury-bg transform -translate-x-1/2 shadow-inner z-0"></div>
              <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
              <div className="bg-[#12101E] w-full max-w-[280px] rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.6)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500 text-luxury-ivory font-mono text-[10px] tracking-wider border border-luxury-gold/30">
                <div className="absolute -top-3 left-1/2 w-16 h-6 bg-[#12101E] border-t border-l border-r border-luxury-gold/30 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                  <div className="w-8 h-2 bg-luxury-bg/30 rounded-full shadow-inner"></div>
                </div>
                <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-luxury-card border border-luxury-gold/30 mb-3 group/photo">
                  <img
                    alt="Pradhap M"
                    className="w-full h-full object-cover rounded-lg transition-all duration-500 group-hover/photo:scale-105"
                    src="./assets/profile.jpg"
                  />
                </div>
                <div className="flex flex-col gap-1 border-t border-white/10 pt-2 opacity-90">
                  <p className="font-bold text-luxury-gold text-[11px] uppercase">PRADHAP M</p>
                  <p className="text-luxury-taupe uppercase">ROLE: GRAPHIC DESIGNER &amp; VIDEO EDITOR</p>
                  <p className="text-luxury-taupe uppercase">SYS_ID: CREATIVE-01</p>
                  <p className="text-emerald-400 font-bold uppercase">STATUS: ACTIVE // VISUAL_ARTIST</p>
                </div>
                <div className="mt-3 h-6 w-full bg-white relative overflow-hidden flex items-center justify-center rounded">
                  <div className="w-full h-full flex gap-[1.5px] items-center justify-center opacity-90 px-2 bg-white">
                    <div className="bg-luxury-bg h-4" style={{ width: '1px' }}></div>
                    <div className="bg-luxury-bg h-4" style={{ width: '3px' }}></div>
                    <div className="bg-luxury-bg h-4" style={{ width: '2px' }}></div>
                    <div className="bg-luxury-bg h-4" style={{ width: '1px' }}></div>
                    <div className="bg-luxury-bg h-4" style={{ width: '4px' }}></div>
                    <div className="bg-luxury-bg h-4" style={{ width: '2px' }}></div>
                    <div className="bg-luxury-bg h-4" style={{ width: '1px' }}></div>
                    <div className="bg-luxury-bg h-4" style={{ width: '3px' }}></div>
                    <div className="bg-luxury-bg h-4" style={{ width: '1px' }}></div>
                    <div className="bg-luxury-bg h-4" style={{ width: '2px' }}></div>
                    <div className="bg-luxury-bg h-4" style={{ width: '4px' }}></div>
                    <div className="bg-luxury-bg h-4" style={{ width: '1px' }}></div>
                    <div className="bg-luxury-bg h-4" style={{ width: '2px' }}></div>
                    <div className="bg-luxury-bg h-4" style={{ width: '3px' }}></div>
                    <div className="bg-luxury-bg h-4" style={{ width: '1px' }}></div>
                    <div className="bg-luxury-bg h-4" style={{ width: '1px' }}></div>
                    <div className="bg-luxury-bg h-4" style={{ width: '3px' }}></div>
                    <div className="bg-luxury-bg h-4" style={{ width: '2px' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative Text */}
          <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-luxury-ivory mt-8 md:mt-0 relative z-20 aos-init">
            <h2 className="text-4xl md:text-5xl font-black text-luxury-ivory mb-4">Hello!</h2>
            <p className="text-lg font-bold mb-8 leading-relaxed max-w-3xl text-luxury-taupe">
              I am <span className="text-luxury-gold text-xl font-black mx-1 tracking-wide uppercase">PRADHAP M</span>, a Graphic Designer and Video Editor with 1.7 years of dedicated experience creating premium, high-retention visual content.
            </p>
            <p className="text-sm md:text-base font-semibold leading-relaxed mb-6 max-w-3xl text-luxury-taupe">
              I specialize in branding, social media creatives, commercial video editing, motion graphics, and marketing collaterals. With comprehensive hands-on expertise in Adobe Creative Suite (Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, Lightroom) and CapCut, combined with certified AI-powered design workflows (Midjourney, Gemini, ChatGPT), I build compelling visual stories that captivate audiences.
            </p>
            <p className="text-sm md:text-base font-semibold leading-relaxed mb-12 max-w-3xl text-luxury-taupe">
              My focus is delivering innovative design solutions, polished video post-production, and dynamic marketing assets in collaborative creative environments.
            </p>
            <div className="flex items-center gap-5 md:gap-7 mt-8 flex-wrap">
              <img
                alt="Photoshop"
                className="w-14 h-14 md:w-16 md:h-16 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] bg-luxury-bg/10 rounded-xl p-1"
                src="./assets/adobe_photoshop_macos_bigsur_icon_190436.png"
              />
              <img
                alt="Illustrator"
                className="w-14 h-14 md:w-16 md:h-16 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] bg-luxury-bg/10 rounded-xl p-1"
                src="./assets/adobe_illustrator_macos_bigsur_icon_190447.png"
              />
              <img
                alt="InDesign"
                className="w-14 h-14 md:w-16 md:h-16 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] bg-luxury-bg/10 rounded-xl p-1"
                src="./assets/adobe_indesign_software_computer_app_design_software_icon_191061.png"
              />
              <img
                alt="Premiere Pro"
                className="w-14 h-14 md:w-16 md:h-16 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] bg-luxury-bg/10 rounded-xl p-1"
                src="./assets/adobe_premiere_pro_macos_bigsur_icon_189485.png"
              />
              <img
                alt="After Effects"
                className="w-14 h-14 md:w-16 md:h-16 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] bg-luxury-bg/10 rounded-xl p-1"
                src="./assets/adobe_after_effects_macos_bigsur_icon_190464.png"
              />
              <img
                alt="CapCut"
                className="w-14 h-14 md:w-16 md:h-16 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] bg-luxury-bg/10 rounded-xl p-1"
                src="./assets/capcut.svg"
              />
              <img
                alt="Lightroom"
                className="w-14 h-14 md:w-16 md:h-16 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] bg-luxury-bg/10 rounded-xl p-1"
                src="./assets/adobe-lr.svg"
              />
            </div>
          </div>
        </div>

        {/* Decorative Wave & Stars */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-luxury-bg">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
          </svg>
        </div>
        <div className="absolute top-10 right-10 md:right-20 text-luxury-gold opacity-10 animate-pulse">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"></path>
          </svg>
        </div>
        <div className="absolute bottom-32 left-4 md:left-20 text-luxury-gold opacity-10 animate-pulse" style={{ animationDelay: '1s' }}>
          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"></path>
          </svg>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-luxury-bg py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-luxury-card">
        <div className="max-w-6xl mx-auto mb-16 md:mb-20 text-center md:text-left">
          <div data-aos="fade-up" className="inline-block border border-white/10 rounded-full px-5 py-1.5 text-xs text-luxury-taupe font-bold uppercase tracking-widest mb-6">
            Core Competencies
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-5xl lg:text-6xl font-black text-luxury-ivory leading-tight tracking-tight">
            Tools &amp; Creative <br className="hidden md:block" />
            <span className="text-luxury-gold">Design Stack</span>
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <div className="col-span-1">
            <div data-aos="fade-up" data-aos-delay="100" className="bg-[#12101E] border border-white/10 rounded-3xl p-8 hover:border-luxury-gold hover:shadow-[0_10px_30px_rgba(122,59,236,0.15)] transition-all duration-500 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold text-luxury-ivory mb-6 border-b border-white/10 pb-3 flex items-center justify-between">
                  <span>Graphic Design &amp; Principles</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-luxury-gold animate-ping"></span>
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Adobe Photoshop",
                    "Adobe Illustrator",
                    "Adobe InDesign",
                    "Adobe Lightroom",
                    "Typography",
                    "Color Theory",
                    "Camera Handling",
                    "Social Media Creatives",
                    "Marketing Collaterals",
                    "Poster & Banner Design"
                  ].map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-4 py-2 bg-luxury-card border border-white/10 hover:border-luxury-card hover:text-luxury-gold hover:bg-luxury-bg rounded-full text-luxury-taupe transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div data-aos="fade-up" data-aos-delay="200" className="bg-[#12101E] border border-white/10 rounded-3xl p-8 hover:border-luxury-gold hover:shadow-[0_10px_30px_rgba(122,59,236,0.15)] transition-all duration-500 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold text-luxury-ivory mb-6 border-b border-white/10 pb-3 flex items-center justify-between">
                  <span>Video, Motion &amp; AI Tools</span>
                  <span className="w-2 h-2 rounded-full bg-luxury-gold/50"></span>
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Adobe Premiere Pro",
                    "Adobe After Effects",
                    "CapCut Video Editing",
                    "Video Editing",
                    "Motion Graphics",
                    "Kinetic Typography",
                    "AI-powered Graphic Design",
                    "ChatGPT",
                    "Gemini",
                    "Midjourney",
                    "Teamwork",
                    "Time Management"
                  ].map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-4 py-2 bg-luxury-card border border-white/10 hover:border-luxury-card hover:text-luxury-gold hover:bg-luxury-bg rounded-full text-luxury-taupe transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section with Curved Path Timeline */}
      <section id="experience" ref={experienceRef} className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
        <div className="max-w-6xl mx-auto relative md:h-[1900px]">
          <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
            <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-xs text-gray-500 font-bold mb-6 shadow-sm bg-white uppercase tracking-widest">
              Timeline
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight relative">
              Professional Experience
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-sm font-semibold leading-relaxed">
              A chronological overview of 1.7 years of creative graphic design, commercial video editing, and motion graphics production.
            </p>
          </div>

          <svg className="hidden md:block absolute top-0 left-0 w-full h-[1800px] pointer-events-none z-0" viewBox="0 0 1000 1150" preserveAspectRatio="none">
            <path d="M 650,200 C 400,300 200,450 350,700 C 500,950 400,1050 300,1100" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="8 10"></path>
            <mask id="path-mask">
              <motion.path d="M 650,200 C 400,300 200,450 350,700 C 500,950 400,1050 300,1100" fill="none" stroke="white" strokeWidth="20" style={{ pathLength }} />
            </mask>
            <path d="M 650,200 C 400,300 200,450 350,700 C 500,950 400,1050 300,1100" fill="none" stroke="#7A3BEC" strokeWidth="3" strokeDasharray="8 10" mask="url(#path-mask)" className="drop-shadow-sm"></path>
          </svg>

          <svg className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0" viewBox="0 0 4 100" preserveAspectRatio="none">
            <path d="M 2,0 L 2,100" fill="none" stroke="#e2e8f0" strokeWidth="4" strokeDasharray="4 6" vectorEffect="non-scaling-stroke"></path>
            <mask id="path-mask-mobile">
              <motion.path d="M 2,0 L 2,100" fill="none" stroke="white" strokeWidth="20" style={{ pathLength }} />
            </mask>
            <path d="M 2,0 L 2,100" fill="none" stroke="#7A3BEC" strokeWidth="4" strokeDasharray="4 6" mask="url(#path-mask-mobile)" vectorEffect="non-scaling-stroke" className="drop-shadow-sm"></path>
          </svg>

          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} pathLength={pathLength} containerRef={experienceRef} />
          ))}
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="bg-[#12101E] py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-luxury-card">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div>
            <div data-aos="fade-up" className="inline-block border border-white/10 rounded-full px-5 py-1.5 text-xs text-luxury-taupe font-bold uppercase tracking-widest mb-6">
              Education
            </div>
            <div data-aos="fade-up" className="mb-8">
              <h3 className="text-2xl font-black text-luxury-ivory uppercase">Bachelor of Computer Application (BCA)</h3>
              <p className="text-luxury-gold font-bold mb-2">Saraswathy College of Arts And Science | Annamalai University | April 2024</p>
              <p className="text-luxury-taupe">Undergraduate Degree with specialization in computer applications and digital software foundations.</p>
            </div>
            <div data-aos="fade-up">
              <h3 className="text-2xl font-black text-luxury-ivory uppercase">Higher Secondary Course</h3>
              <p className="text-luxury-gold font-bold mb-2">Govt. Hr. Sec. School | Vellimedupettai | May 2021</p>
              <p className="text-luxury-taupe">Higher Secondary Education completed with strong academic credentials.</p>
            </div>
          </div>
          <div>
            <div data-aos="fade-up" className="inline-block border border-white/10 rounded-full px-5 py-1.5 text-xs text-luxury-taupe font-bold uppercase tracking-widest mb-6">
              Certifications &amp; Attributes
            </div>
            <div data-aos="fade-up" className="mb-8">
              <h3 className="text-xl font-bold text-luxury-ivory mb-2">Professional Certification</h3>
              <p className="text-luxury-gold font-bold text-base mb-1">AI - powered Graphic Design</p>
              <p className="text-luxury-taupe text-sm">Web D School, Velachery, Chennai</p>
            </div>
            <div data-aos="fade-up" className="mb-8">
              <h3 className="text-xl font-bold text-luxury-ivory mb-4">Languages</h3>
              <div className="grid grid-cols-2 gap-4 text-luxury-taupe">
                <p><strong>English:</strong> Professional Working - 100%</p>
                <p><strong>Tamil:</strong> Native / Fluent - 100%</p>
              </div>
            </div>
            <div data-aos="fade-up">
              <h3 className="text-xl font-bold text-luxury-ivory mb-4">Core Strengths</h3>
              <div className="flex flex-wrap gap-2 text-luxury-taupe">
                <span className="px-3 py-1 bg-luxury-card rounded-md">Typography</span>
                <span className="px-3 py-1 bg-luxury-card rounded-md">Color Theory</span>
                <span className="px-3 py-1 bg-luxury-card rounded-md">Camera Handling</span>
                <span className="px-3 py-1 bg-luxury-card rounded-md">Teamwork</span>
                <span className="px-3 py-1 bg-luxury-card rounded-md">Time Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-luxury-bg py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-luxury-card min-h-[50vh]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div data-aos="fade-up" className="inline-block border border-luxury-gold/30 rounded-full px-5 py-1.5 text-xs text-luxury-gold font-bold uppercase tracking-widest mb-6 bg-luxury-card shadow-sm">
              My Work
            </div>
            <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-5xl font-black text-luxury-ivory mb-4">
              Design Portfolio
            </h2>
            <p data-aos="fade-up" data-aos-delay="200" className="text-luxury-taupe text-lg max-w-2xl mx-auto">
              A selection of video edits, motion graphics, and visual storytelling projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioVideos.map((video, idx) => (
              <div
                key={idx}
                onClick={() => setActiveVideo(video)}
                data-aos="fade-up"
                data-aos-delay={100 + (idx % 3) * 100}
                className="group cursor-pointer relative rounded-2xl overflow-hidden bg-luxury-card border border-white/10 shadow-2xl hover:border-luxury-gold/50 hover:shadow-[0_0_30px_rgba(122,59,236,0.3)] transition-all duration-500 aspect-video md:aspect-[16/10] flex items-center justify-center"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105"
                >
                  <source src={video.url} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-300"></div>

                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/30 bg-black/60 backdrop-blur-md flex items-center justify-center group-hover:bg-luxury-gold group-hover:border-luxury-gold group-hover:scale-110 transition-all duration-300 shadow-2xl relative z-10">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-white ml-1 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 mb-8 text-center">
            <h3 data-aos="fade-up" className="text-2xl md:text-3xl font-black text-luxury-ivory">
              Logo &amp; Branding
            </h3>
            <p data-aos="fade-up" data-aos-delay="100" className="text-luxury-taupe text-sm md:text-base mt-2">
              Brand Identity, Social Media Creatives &amp; Commercial Posters
            </p>
            <div className="w-16 h-1 bg-luxury-gold mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioLogos.map((logo, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImage(logo)}
                data-aos="fade-up"
                data-aos-delay={100 + (idx % 3) * 100}
                className="group cursor-pointer relative rounded-2xl overflow-hidden bg-luxury-card border border-white/10 shadow-2xl hover:border-luxury-gold/50 hover:shadow-[0_0_30px_rgba(122,59,236,0.3)] transition-all duration-500 aspect-[4/5] sm:aspect-square md:aspect-[4/5] flex items-center justify-center"
              >
                <img
                  src={logo.url}
                  alt="Portfolio Work"
                  onError={(e) => { if (logo.fallbackUrl) e.currentTarget.src = logo.fallbackUrl; }}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-black/60 border border-luxury-gold/50 backdrop-blur-md flex items-center justify-center text-luxury-gold transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="bg-[#0D0B18] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-luxury-card">
        <motion.div
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
          style={{ y: contactY }}
        >
          <h1 className="text-[25vw] leading-[0.75] font-black text-luxury-ivory uppercase tracking-tighter select-none scale-y-[1.6] origin-top" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
            CONTACT
          </h1>
        </motion.div>
        <div className="relative z-10 w-full flex justify-end items-end">
          <div
            data-aos="fade-up"
            className="bg-luxury-gold backdrop-blur-xl border border-white/20 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.3),0_25px_50px_-12px_rgba(122,59,236,0.5)] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between min-h-[600px] transition-all duration-500"
          >
            <div className="w-full flex flex-col justify-between h-full">
              <div>
                <div className="text-xs font-bold tracking-[0.2em] mb-12 md:mb-20 uppercase opacity-90">Reach Us</div>
              </div>
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-12 md:gap-16 w-full">
                <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
                  <div className="flex-1 flex flex-col gap-10">
                    <div className="relative">
                      <input
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="First Name *"
                        className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/70 font-medium rounded-none text-white"
                        type="text"
                      />
                    </div>
                    <div className="relative">
                      <input
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/70 font-medium rounded-none text-white"
                        type="text"
                      />
                    </div>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        required
                        placeholder="Email *"
                        className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/70 font-medium rounded-none text-white"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="relative h-full flex flex-col">
                      <textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Type your message here *"
                        className="w-full h-full min-h-[120px] bg-transparent border-b border-black/40 pb-3 text-lg focus:outline-none focus:border-black transition-colors placeholder-black/70 font-medium resize-none rounded-none text-black"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-12 mt-4">
                  <div className="flex-1 flex items-start gap-4 text-sm font-medium text-white/90">
                    <input
                      id="permission"
                      name="permission"
                      defaultChecked
                      className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 cursor-pointer"
                      type="checkbox"
                      style={{ accentColor: '#BF85FD' }}
                    />
                    <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                      I give permission to contact me at this email address.
                    </label>
                  </div>
                  <div className="flex-1 flex flex-col gap-8 text-xs text-white/80 font-medium">
                    <p className="leading-relaxed max-w-[400px]">
                      Direct: <a href="mailto:mpradhappradhap@gmail.com" className="font-bold underline text-white hover:text-luxury-beige transition-colors">mpradhappradhap@gmail.com</a> | <a href="tel:+916369028601" className="font-bold underline text-white hover:text-luxury-beige transition-colors">+91 6369028601</a>
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                      <p className="max-w-[250px] leading-relaxed">
                        Location: 1/150, Main Road, Melmavillangai, Thindivanam TK, Villupuram Dist.
                      </p>
                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="px-8 py-3 rounded-full border border-white/50 text-white font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-[#7A3BEC] transition-all duration-300 group whitespace-nowrap self-start sm:self-auto disabled:opacity-50"
                      >
                        {formStatus === 'submitting' ? 'Opening Mail...' : formStatus === 'success' ? 'Opening Mail...' : 'Send Message'}
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D0B18] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] border-t border-luxury-card text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
          <div className="flex flex-col gap-1">
            <p className="text-luxury-gold font-bold mb-1 uppercase tracking-widest">// SERVICES</p>
            <p>Social Media Creatives &amp; Ad Banners</p>
            <p>Commercial Video Editing &amp; Reels</p>
            <p>Motion Graphics &amp; Title Animations</p>
            <p>AI-Powered Graphic Generation</p>
          </div>
          <div className="flex flex-col gap-1 md:items-center">
            <p className="text-luxury-gold font-bold mb-1 uppercase tracking-widest">// PROFILE</p>
            <p>Graphic Designer &amp; Video Editor</p>
            <a href="#projects" className="underline hover:text-luxury-ivory transition-colors mt-1 underline-offset-4 decoration-1">
              View Projects
            </a>
          </div>
          <div className="flex flex-col gap-1 md:items-end">
            <p className="text-luxury-gold font-bold mb-1 uppercase tracking-widest">// AVAILABILITY</p>
            <p>Remote / On-Site Villupuram &amp; Chennai</p>
            <p>2026</p>
          </div>
        </div>

        {/* Large Signature Watermark */}
        <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-[14vw] md:text-[11vw] leading-none font-sans font-bold tracking-tighter select-none text-white/5 w-full text-center uppercase">
            PRADHAP PORTFOLIO
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
          <div className="flex flex-col gap-4">
            <a href="#contact" className="underline hover:text-luxury-ivory transition-colors underline-offset-4 decoration-1 font-bold">
              Get In Touch
            </a>
            <p className="text-luxury-ivory/60 font-mono text-[9px] md:text-[10px]">
              © 2026 Pradhap M | Visual Content Creator
            </p>
          </div>
          <div className="flex flex-col gap-1 md:items-center">
            <a href="mailto:mpradhappradhap@gmail.com" className="underline hover:text-luxury-ivory transition-colors underline-offset-4 decoration-1 lowercase">
              mpradhappradhap@gmail.com
            </a>
            <p className="text-luxury-ivory/40 mt-1">+91 6369028601</p>
          </div>
          <div className="flex flex-col gap-2 md:items-end font-bold text-luxury-ivory">
            <a href="https://github.com/mpradhappradhap-max" target="_blank" rel="noopener noreferrer" className="underline hover:text-luxury-gold transition-colors underline-offset-4 decoration-1">
              GitHub: @mpradhappradhap-max
            </a>
            <button
              onClick={() => setShowResumeModal(true)}
              className="underline hover:text-luxury-gold transition-colors underline-offset-4 decoration-1 text-luxury-gold cursor-pointer"
            >
              Preview Complete Resume
            </button>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-12" onClick={() => setActiveImage(null)}>
          <div className="relative w-full max-w-5xl bg-luxury-card rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(122,59,236,0.2)] border border-luxury-gold/30" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveImage(null)} className="absolute top-4 right-4 z-20 text-white bg-black/50 hover:bg-luxury-gold hover:text-black rounded-full p-2 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-full max-h-[85vh] flex items-center justify-center p-4 md:p-6">
              <img
                src={activeImage.url}
                alt="Portfolio Display"
                onError={(e) => { if (activeImage.fallbackUrl) e.currentTarget.src = activeImage.fallbackUrl; }}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-12" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-luxury-card rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(122,59,236,0.2)] border border-luxury-gold/30 flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveVideo(null)} className="absolute top-4 right-4 z-20 text-white bg-black/50 hover:bg-luxury-gold hover:text-black rounded-full p-2 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-full flex items-center justify-center bg-black p-2 md:p-4">
              <video key={activeVideo.url} controls autoPlay className="max-w-full max-h-[80vh] object-contain rounded">
                <source src={activeVideo.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* In-page Interactive Resume Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setShowResumeModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-[#151226] border-2 border-luxury-gold/50 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center text-luxury-gold font-bold text-sm">
                    CV
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white uppercase">PRADHAP M — Official Resume</h3>
                    <p className="text-xs text-luxury-gold font-semibold">Graphic Designer &amp; Video Editor</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="./assets/Pradhap_M_Resume.pdf"
                    download="Pradhap_M_Resume.pdf"
                    className="px-3 py-1.5 rounded-lg bg-luxury-gold text-white text-xs font-bold uppercase tracking-wider hover:bg-luxury-beige transition-colors flex items-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </a>
                  <button
                    onClick={() => setShowResumeModal(false)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Modal Body: High Resolution Resume Image */}
              <div className="overflow-y-auto p-4 sm:p-6 flex justify-center bg-black/60">
                <img
                  src="./assets/pradhap_resume.jpg"
                  alt="Pradhap M Resume Document"
                  className="w-full max-w-lg rounded-xl shadow-2xl border border-white/10"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-white/10 bg-black/40 flex flex-wrap justify-between items-center text-xs text-gray-400 gap-2">
                <span>Phone: +91 6369028601 | Email: mpradhappradhap@gmail.com</span>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
