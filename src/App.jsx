import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent, useTransform } from 'framer-motion';

// Design & Video Projects based on 1.7 years of Graphic Design & Video Editing experience
const projectsTimeline = [
  {
    number: "01",
    role: "SOCIAL MEDIA CREATIVES & AD CAMPAIGNS",
    company: "Brand Marketing & Visual Design",
    period: "Photoshop, Illustrator, Canva",
    details: [
      "Crafted high-converting social media creatives, promotional carousels, and banner ads maintaining strict brand tone and color harmony.",
      "Engineered typographic hierarchies, eye-catching focal points, and engaging visual layouts tailored for Instagram, LinkedIn, and Facebook feeds.",
      "Delivered complete creative batches for seasonal promotions, product launches, and digital advertising campaigns."
    ],
    tags: ["Photoshop", "Illustrator", "Social Media Creatives", "Ad Banners", "Visual Identity"],
    category: "Graphic Design",
    className: "md:absolute md:top-[10px] md:right-[2%] lg:right-[5%] rotate-1 md:rotate-2",
    aosType: "fade-left",
    aosDelay: "100"
  },
  {
    number: "02",
    role: "COMMERCIAL VIDEO EDITING & REELS",
    company: "Video Post-Production & Reels",
    period: "Premiere Pro, After Effects, Audition",
    details: [
      "Produced dynamic, high-retention short-form reels, promotional product videos, and interview clips with seamless pacing and beat-synced audio.",
      "Performed multi-track video assembly, high-end color grading (LUTs), dialogue leveling, sound effects integration, and ambient background score sync.",
      "Optimized export settings and aspect ratios (9:16, 16:9, 1:1) for multi-channel video performance across platforms."
    ],
    tags: ["Premiere Pro", "Video Editing", "Color Grading", "Sound Sync", "Reels & Shorts"],
    category: "Video Editing",
    className: "md:absolute md:top-[480px] md:left-[2%] lg:left-[5%] -rotate-1 md:-rotate-2",
    aosType: "fade-right",
    aosDelay: "200"
  },
  {
    number: "03",
    role: "MOTION GRAPHICS & KINETIC TYPOGRAPHY",
    company: "Motion Design & VFX",
    period: "After Effects, Illustrator",
    details: [
      "Designed fluid motion graphics, animated logo reveals, lower-thirds, title bumpers, and custom visual transitions.",
      "Animated complex vector illustrations and shape layers using graph editor curves for natural, stylized easing.",
      "Constructed reusable motion graphics templates (MOGRTs) for rapid video production pipelines."
    ],
    tags: ["After Effects", "Motion Graphics", "Kinetic Typography", "Logo Reveal", "Transitions"],
    category: "Motion Graphics",
    className: "md:absolute md:top-[900px] md:right-[2%] lg:right-[8%] rotate-1 md:rotate-3",
    aosType: "fade-left",
    aosDelay: "300"
  },
  {
    number: "04",
    role: "MARKETING COLLATERALS & PRINT LAYOUTS",
    company: "Editorial & Print Production",
    period: "InDesign, Illustrator, Photoshop",
    details: [
      "Designed print-ready marketing collaterals including multi-page corporate brochures, flyers, event posters, and business stationery.",
      "Managed prepress requirements such as CMYK color profiles, vector outlining, crop marks, bleed margins, and paper stock considerations.",
      "Created structured grid systems and balanced editorial layouts that improve readability and convey professional authority."
    ],
    tags: ["InDesign", "Print Layouts", "Brochures", "Posters", "Prepress"],
    category: "Print Design",
    className: "md:absolute md:top-[1320px] md:left-[2%] lg:left-[6%] rotate-0 md:-rotate-2",
    aosType: "fade-right",
    aosDelay: "400"
  },
  {
    number: "05",
    role: "AI-POWERED CONCEPT ART & VISUAL GENERATION",
    company: "AI Design & Creative Ideation",
    period: "Midjourney, Gemini, ChatGPT, Photoshop",
    details: [
      "Harnessed state-of-the-art AI generators (Midjourney, Gemini) to produce hyper-detailed conceptual artwork, moodboards, and surreal backgrounds.",
      "Blended generative AI outputs with manual Adobe Photoshop compositing, retouching, and color grading for production-ready client assets.",
      "Applied prompt engineering to rapidly test visual concepts, reducing creative turnaround time while pushing aesthetic boundaries."
    ],
    tags: ["Midjourney", "Gemini", "ChatGPT", "AI Graphic Design", "Concept Art"],
    category: "AI Design",
    className: "md:absolute md:top-[1740px] md:right-[2%] lg:right-[6%] rotate-1 md:rotate-2",
    aosType: "fade-left",
    aosDelay: "500"
  }
];

const TimelineCard = ({ exp, pathLength, containerRef }) => {
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
      className={`w-80 sm:w-96 mx-auto mb-10 md:mb-0 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${exp.className} ${
        isActive
          ? 'bg-luxury-card border-2 border-luxury-gold shadow-[0_0_35px_rgba(245,158,11,0.35)]'
          : 'bg-[#12141c] border border-white/10 shadow-xl'
      }`}
    >
      <div className="w-6 h-6 bg-gradient-to-br from-amber-300 to-amber-600 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] absolute top-4 border-2 border-[#12141c] z-10 flex items-center justify-center">
        <div className={`w-2.5 h-2.5 rounded-full transition-colors duration-500 ${isActive ? 'bg-white' : 'bg-amber-950'}`}></div>
      </div>
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-6 flex flex-col min-h-[320px] transition-colors duration-700 ${isActive ? 'bg-white/5' : 'bg-black/40'}`}>
        <div className="flex justify-between items-center mb-3">
          <span className={`text-base font-extrabold font-mono transition-colors duration-700 ${isActive ? 'text-luxury-gold' : 'text-gray-400'}`}>
            PROJ-{exp.number}
          </span>
          <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-luxury-gold/15 text-luxury-gold border border-luxury-gold/30">
            {exp.category}
          </span>
        </div>
        <h3 className={`text-lg sm:text-xl font-black mb-1 tracking-tight uppercase transition-colors duration-700 ${isActive ? 'text-white' : 'text-white/85'}`}>
          {exp.role}
        </h3>
        <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 transition-colors duration-700 ${isActive ? 'text-luxury-beige' : 'text-gray-400'}`}>
          {exp.company}
        </h4>
        <p className="text-[11px] text-gray-400 font-medium mb-3 italic">
          Software: {exp.period}
        </p>
        <ul className={`text-xs leading-relaxed font-medium mb-5 list-disc pl-4 flex-grow flex flex-col gap-2 transition-colors duration-700 ${isActive ? 'text-gray-200' : 'text-gray-400'}`}>
          {exp.details.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap justify-center gap-2 mt-auto pt-4 border-t border-dashed border-white/10">
          {exp.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`text-[10px] font-semibold px-2.5 py-1 rounded-full transition-colors duration-700 ${
                isActive
                  ? 'bg-luxury-gold/20 text-luxury-gold border border-luxury-gold/40'
                  : 'bg-white/5 text-gray-300 border border-white/10'
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

function App() {
  const [formStatus, setFormStatus] = useState('idle');
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const projectsRef = useRef(null);
  const { scrollYProgress: projectsScrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["start center", "end center"]
  });
  const pathLength = useSpring(projectsScrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  const contactRef = useRef(null);
  const { scrollYProgress: contactScrollYProgress } = useScroll({
    target: contactRef,
    offset: ["start end", "end start"]
  });
  const contactY = useTransform(contactScrollYProgress, [0, 1], ["-15%", "25%"]);

  useEffect(() => {
    AOS.init({ duration: 900, once: false });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(e.target);
    // Submit via Web3Forms with recipient configured
    formData.append("access_key", "54bea58c-6255-4d4e-adfb-f30a421d2dc8");
    formData.append("subject", "New Client Inquiry for Pradhap M (Graphic Designer & Video Editor)");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        e.target.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        console.error("Error submitting form", data);
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (err) {
      console.error(err);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const adobeTools = [
    { name: "Photoshop", icon: "./assets/adobe-ps.svg", desc: "Social Creatives & Photo Retouching", color: "#31A8FF" },
    { name: "Illustrator", icon: "./assets/adobe-ai.svg", desc: "Vector Art & Logo Design", color: "#FF9A00" },
    { name: "InDesign", icon: "./assets/adobe-id.svg", desc: "Brochures & Marketing Layouts", color: "#FF3366" },
    { name: "Premiere Pro", icon: "./assets/adobe-pr.svg", desc: "Commercial Video Editing & Audio Sync", color: "#9999FF" },
    { name: "After Effects", icon: "./assets/adobe-ae.svg", desc: "Motion Graphics & Title Animations", color: "#9999FF" },
    { name: "Lightroom", icon: "./assets/adobe-lr.svg", desc: "Color Grading & Photo Enhancement", color: "#31A8FF" }
  ];

  const aiTools = [
    { name: "Midjourney", icon: "./assets/ai-midjourney.svg", desc: "Generative Concept Art & Moodboards", badge: "Visual Gen" },
    { name: "Gemini", icon: "./assets/ai-gemini.svg", desc: "Creative Research & Multimodal Concepts", badge: "Research" },
    { name: "ChatGPT", icon: "./assets/ai-chatgpt.svg", desc: "Copywriting & Storyboard Ideation", badge: "Prompting" }
  ];

  const coreSkills = [
    { name: "Typography", desc: "Font pairing, typographic hierarchy, expressive titles", icon: "Aa" },
    { name: "Color Theory", desc: "Harmonious palettes, emotional color tone, contrast", icon: "🎨" },
    { name: "Camera Handling", desc: "Framing, shot angles, depth of field & lighting", icon: "📷" },
    { name: "Teamwork", desc: "Agile collaboration, brainstorming, client synergy", icon: "🤝" },
    { name: "Time Management", desc: "Fast project turnarounds, structured deadlines", icon: "⏱️" },
    { name: "Motion Design", desc: "Keyframing, kinetic typography & micro-interactions", icon: "✨" }
  ];

  return (
    <div className="bg-[#07080c] min-h-screen text-slate-100 selection:bg-amber-500 selection:text-black">
      {/* Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 w-full h-screen bg-[#07080c] z-[100000] flex flex-col items-center justify-center border-b border-luxury-gold/20"
          >
            <motion.div
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative text-center px-4"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-luxury-gold/10 border-2 border-luxury-gold/30 flex items-center justify-center p-2 shadow-[0_0_40px_rgba(245,158,11,0.2)]">
                <img src="./assets/pradhap_avatar.png" alt="Pradhap M" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase text-white font-sans">
                PRADHAP <span className="text-luxury-gold">M</span>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-3 text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest text-luxury-taupe"
              >
                Graphic Designer <span className="text-luxury-gold">•</span> Video Editor <span className="text-luxury-gold">•</span> Motion Artist
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#07080c]/90 backdrop-blur-md py-4 border-b border-white/10 shadow-lg' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <a href="#home" className="flex items-center gap-2 group">
              <span className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 p-[2px] inline-block shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                <img src="./assets/pradhap_avatar.png" alt="Pradhap M" className="w-full h-full rounded-full object-cover bg-black" />
              </span>
              <span className="text-white text-xl md:text-2xl font-black tracking-tight uppercase">
                PRADHAP <span className="text-luxury-gold">M</span>
              </span>
            </a>
          </div>

          <div className="hidden lg:flex space-x-8 items-center">
            <a href="#home" className="text-white/80 hover:text-luxury-gold font-semibold transition-colors duration-200">Home</a>
            <a href="#about" className="text-white/80 hover:text-luxury-gold font-semibold transition-colors duration-200">About</a>
            <a href="#skills" className="text-white/80 hover:text-luxury-gold font-semibold transition-colors duration-200">Skills & Tools</a>
            <a href="#projects" className="text-white/80 hover:text-luxury-gold font-semibold transition-colors duration-200">Projects</a>
            <a href="#experience" className="text-white/80 hover:text-luxury-gold font-semibold transition-colors duration-200">Experience</a>
            <a href="#education" className="text-white/80 hover:text-luxury-gold font-semibold transition-colors duration-200">Education</a>
            <a href="#contact" className="text-white/80 hover:text-luxury-gold font-semibold transition-colors duration-200">Contact</a>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setShowResumeModal(true)}
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full bg-luxury-gold/15 text-luxury-gold border border-luxury-gold/40 hover:bg-luxury-gold hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
            >
              View Resume
            </button>
            <a
              href="#contact"
              className="px-6 py-2 text-xs font-bold uppercase tracking-wider rounded-full bg-luxury-gold text-black hover:bg-amber-400 transition-all duration-300 font-sans shadow-md hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transform hover:scale-105"
            >
              Hire Me
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none p-2" aria-label="Toggle Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-[500px] opacity-100 bg-[#07080c]/98 backdrop-blur-lg border-b border-white/10 px-6 py-4" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col space-y-3 font-semibold">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-luxury-gold py-1 border-b border-white/5">Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-luxury-gold py-1 border-b border-white/5">About</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-luxury-gold py-1 border-b border-white/5">Skills & Tools</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-luxury-gold py-1 border-b border-white/5">Projects</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-luxury-gold py-1 border-b border-white/5">Experience</a>
            <a href="#education" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-luxury-gold py-1 border-b border-white/5">Education</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-luxury-gold py-1 border-b border-white/5">Contact</a>
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => { setIsMenuOpen(false); setShowResumeModal(true); }}
                className="w-full py-2.5 rounded-full border border-luxury-gold text-luxury-gold font-bold text-center text-xs uppercase"
              >
                View Full Resume
              </button>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-2.5 rounded-full bg-luxury-gold text-black font-bold text-center text-xs uppercase shadow-md"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#07080c] pt-28 pb-16 px-6 md:px-12">
        {/* Background ambient decorative glowing spheres inspired by the resume */}
        <div className="absolute top-12 left-10 w-72 h-72 rounded-full bg-amber-500/15 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-amber-600/15 blur-[140px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-amber-500/5 to-transparent blur-[160px] pointer-events-none"></div>

        {/* Video loop overlay */}
        <video loop playsInline ref={videoRef} className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none z-0">
          <source src="./assets/myselfvideo.mp4" type="video/mp4" />
        </video>

        <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div data-aos="fade-up" className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-luxury-gold animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold">Available for Creative Work</span>
            </div>

            <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-4">
              Hi, I’m <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-luxury-gold uppercase">
                PRADHAP M
              </span>
            </h1>

            <h2 data-aos="fade-up" data-aos-delay="200" className="text-xl sm:text-2xl md:text-3xl font-extrabold text-luxury-gold tracking-wide uppercase mb-6 flex flex-wrap items-center gap-2">
              <span>Graphic Designer</span>
              <span className="text-white/40">•</span>
              <span>Video Editor</span>
              <span className="text-white/40">•</span>
              <span className="text-amber-200">Motion Artist</span>
            </h2>

            <p data-aos="fade-up" data-aos-delay="300" className="text-gray-300 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl mb-8">
              Creative Graphic Designer, Video Editor, and Motion Graphics Artist skilled in <strong className="text-white font-bold">Adobe Creative Suite</strong> and <strong className="text-luxury-gold font-bold">AI-Powered Visual Generation</strong>. Crafting innovative designs, engaging social media creatives, and dynamic video content in collaborative environments.
            </p>

            {/* Quick highlight metrics */}
            <div data-aos="fade-up" data-aos-delay="350" className="grid grid-cols-3 gap-4 mb-8 w-full max-w-xl">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-black text-luxury-gold">1.7+</div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">Years Experience</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-black text-luxury-gold">6+</div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">Adobe Tools</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-black text-luxury-gold">AI</div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">Certified Designer</div>
              </div>
            </div>

            {/* Action buttons */}
            <div data-aos="fade-up" data-aos-delay="400" className="flex flex-wrap items-center gap-3 w-full">
              <a
                href="#projects"
                className="px-7 py-3.5 text-xs sm:text-sm rounded-full bg-luxury-gold text-black font-extrabold uppercase tracking-wider hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
              >
                Explore Projects
              </a>
              <button
                onClick={() => setShowResumeModal(true)}
                className="px-6 py-3.5 text-xs sm:text-sm rounded-full bg-white/10 border border-white/20 text-white font-extrabold uppercase tracking-wider hover:bg-white/20 transition-all duration-300 backdrop-blur-md flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-luxury-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Preview Resume
              </button>
              <a
                href="./assets/Pradhap_M_Resume.pdf"
                download="Pradhap_M_Resume.pdf"
                className="px-6 py-3.5 text-xs sm:text-sm rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-extrabold uppercase tracking-wider hover:bg-amber-500/20 transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                PDF
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 text-xs sm:text-sm rounded-full bg-transparent border border-white/20 text-gray-300 font-extrabold uppercase tracking-wider hover:border-luxury-gold hover:text-white transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Hero visual card */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div data-aos="zoom-in" data-aos-delay="200" className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-amber-500/20 via-transparent to-amber-600/30 blur-xl pointer-events-none"></div>

              <div className="relative bg-[#11131c] border-2 border-white/10 rounded-[2rem] p-6 shadow-2xl flex flex-col items-center">
                {/* Floating badge */}
                <div className="absolute -top-4 bg-luxury-gold text-black text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                  Visual Creative
                </div>

                {/* Profile Portrait */}
                <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full p-2 bg-gradient-to-b from-amber-400 to-amber-600 shadow-[0_0_40px_rgba(245,158,11,0.3)] mb-6 mt-2">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0c0d12] border-4 border-[#11131c]">
                    <img
                      src="./assets/pradhap_avatar_square.jpg"
                      alt="Pradhap M - Graphic Designer & Video Editor"
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Info block */}
                <h3 className="text-2xl font-black text-white tracking-tight uppercase">PRADHAP M</h3>
                <p className="text-luxury-gold text-xs font-extrabold uppercase tracking-widest mb-4">Graphic Designer & Video Editor</p>
                <div className="w-full bg-black/40 rounded-xl p-3 border border-white/5 text-xs text-gray-300 flex flex-col gap-1.5 font-mono mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">EXPERIENCE:</span>
                    <span className="text-amber-300 font-bold">1.7 Years (2024–Present)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">EDUCATION:</span>
                    <span className="text-white font-bold">BCA (April 2024)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">CERTIFICATION:</span>
                    <span className="text-emerald-400 font-bold">AI - powered Graphic Design</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">LOCATION:</span>
                    <span className="text-white">Melmavillangai, Villupuram</span>
                  </div>
                </div>

                {/* Reel toggle */}
                <button
                  onClick={toggleVideo}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-luxury-gold hover:text-black border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-white"
                >
                  <svg className="w-4 h-4 text-luxury-gold group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                    {isVideoPlaying ? (
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    ) : (
                      <path d="M8 5v14l11-7z" />
                    )}
                  </svg>
                  {isVideoPlaying ? "Pause Video Reel" : "Play Ambient Reel"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="hidden md:block absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
          <div className="flex flex-col items-center gap-2 opacity-70">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Scroll Down</span>
            <div className="w-5 h-9 rounded-full border-2 border-white/20 flex justify-center pt-1">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-luxury-gold"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#0b0c13] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full filter blur-[140px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 items-center relative z-10">
          {/* Identity card */}
          <div className="w-full lg:w-[380px] shrink-0">
            <div data-aos="zoom-in" className="bg-[#12141f] rounded-3xl p-6 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative">
              <div className="w-full aspect-square rounded-2xl overflow-hidden bg-black/60 border border-white/10 mb-5 relative group">
                <img
                  src="./assets/pradhap_avatar_square.jpg"
                  alt="Pradhap M"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-mono font-bold text-luxury-gold">Active Creator</span>
                    <h4 className="text-lg font-black text-white uppercase">PRADHAP M</h4>
                  </div>
                </div>
              </div>

              {/* Identity details list */}
              <div className="space-y-2 text-xs font-mono border-t border-white/10 pt-4">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">DESIGNATION:</span>
                  <span className="text-luxury-gold font-bold">Graphic Designer & Video Editor</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">EXPERIENCE:</span>
                  <span className="text-white font-bold">1.7 Years (2024–Present)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">SPECIALIZATION:</span>
                  <span className="text-white">Motion Graphics & AI Design</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">LANGUAGES:</span>
                  <span className="text-amber-200">English, Tamil</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-400">LOCATION:</span>
                  <span className="text-gray-300">Villupuram Dist, Tamil Nadu</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex justify-center">
                <button
                  onClick={() => setShowResumeModal(true)}
                  className="w-full py-2.5 rounded-xl bg-luxury-gold/15 text-luxury-gold border border-luxury-gold/30 hover:bg-luxury-gold hover:text-black font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Updated Resume
                </button>
              </div>
            </div>
          </div>

          {/* Narrative bio */}
          <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-left">
            <div className="inline-block border border-luxury-gold/40 bg-luxury-gold/10 rounded-full px-4 py-1 text-xs text-luxury-gold font-bold uppercase tracking-widest mb-4">
              About The Creative
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Transforming Ideas Into <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Striking Visual Realities
              </span>
            </h2>

            <div className="bg-luxury-gold/10 border-l-4 border-luxury-gold p-4 rounded-r-xl mb-6">
              <p className="text-xs uppercase font-mono font-bold tracking-wider text-luxury-gold mb-1">Career Objective</p>
              <p className="text-sm sm:text-base text-gray-200 font-medium italic">
                “Creative Graphic Designer, Video Editor, and Motion Graphics Artist skilled in Adobe Creative Suite, seeking to contribute innovative designs and dynamic content in a collaborative environment.”
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
              I am <strong className="text-white font-bold">PRADHAP M</strong>, a dedicated Graphic Designer and Video Editor with <strong className="text-luxury-gold font-bold">1.7 years of professional experience (2024 – Present)</strong>. I specialize in designing eye-catching social media creatives, high-impact marketing collaterals, commercial video edits, and motion graphics.
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
              Holding a <strong className="text-white">Bachelor of Computer Application (BCA)</strong> along with an official certification in <strong className="text-luxury-gold">AI-powered Graphic Design from Web D School, Chennai</strong>, I combine classical design fundamentals — typography, color theory, camera handling — with next-generation generative AI workflows (Midjourney, Gemini, ChatGPT) to deliver high-quality creative solutions with exceptional speed.
            </p>

            {/* Software badges ribbon */}
            <div className="border-t border-white/10 pt-6">
              <p className="text-xs font-mono uppercase font-bold text-gray-400 tracking-wider mb-4">Powered by Adobe Creative Suite & AI Tools</p>
              <div className="flex flex-wrap items-center gap-3">
                <div title="Adobe Photoshop" className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400 hover:scale-110 transition-all duration-300">
                  <img src="./assets/adobe-ps.svg" alt="Photoshop" className="w-10 h-10 object-contain" />
                </div>
                <div title="Adobe Illustrator" className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500 hover:scale-110 transition-all duration-300">
                  <img src="./assets/adobe-ai.svg" alt="Illustrator" className="w-10 h-10 object-contain" />
                </div>
                <div title="Adobe InDesign" className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500 hover:scale-110 transition-all duration-300">
                  <img src="./assets/adobe-id.svg" alt="InDesign" className="w-10 h-10 object-contain" />
                </div>
                <div title="Adobe Premiere Pro" className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400 hover:scale-110 transition-all duration-300">
                  <img src="./assets/adobe-pr.svg" alt="Premiere Pro" className="w-10 h-10 object-contain" />
                </div>
                <div title="Adobe After Effects" className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500 hover:scale-110 transition-all duration-300">
                  <img src="./assets/adobe-ae.svg" alt="After Effects" className="w-10 h-10 object-contain" />
                </div>
                <div title="Adobe Lightroom" className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:scale-110 transition-all duration-300">
                  <img src="./assets/adobe-lr.svg" alt="Lightroom" className="w-10 h-10 object-contain" />
                </div>
                <div title="Adobe Creative Cloud" className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-red-400 hover:scale-110 transition-all duration-300">
                  <img src="./assets/adobe-cc.svg" alt="Adobe CC" className="w-10 h-10 object-contain" />
                </div>
                <div title="Midjourney" className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-white hover:scale-110 transition-all duration-300">
                  <img src="./assets/ai-midjourney.svg" alt="Midjourney" className="w-10 h-10 object-contain" />
                </div>
                <div title="Google Gemini" className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500 hover:scale-110 transition-all duration-300">
                  <img src="./assets/ai-gemini.svg" alt="Gemini" className="w-10 h-10 object-contain" />
                </div>
                <div title="ChatGPT" className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400 hover:scale-110 transition-all duration-300">
                  <img src="./assets/ai-chatgpt.svg" alt="ChatGPT" className="w-10 h-10 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section id="skills" className="bg-[#07080c] py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
        <div className="max-w-6xl mx-auto mb-16 text-center">
          <div data-aos="fade-up" className="inline-block border border-luxury-gold/40 bg-luxury-gold/10 rounded-full px-5 py-1.5 text-xs text-luxury-gold font-bold uppercase tracking-widest mb-4">
            Expertise & Tech Stack
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
            Design Suite &amp; <span className="text-luxury-gold">Creative Toolkit</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mt-4 font-medium">
            Industry-standard creative applications, generative AI workflows, and fundamental visual design principles.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* Card 1: Adobe Creative Suite */}
          <div data-aos="fade-up" data-aos-delay="100" className="bg-[#10121a] border border-white/10 rounded-3xl p-7 hover:border-luxury-gold/60 hover:shadow-[0_10px_35px_rgba(245,158,11,0.15)] transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <img src="./assets/adobe-cc.svg" alt="Adobe CC" className="w-8 h-8 rounded-lg" />
                  <h3 className="text-xl font-black text-white">Adobe Creative Suite</h3>
                </div>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-luxury-gold/20 text-luxury-gold border border-luxury-gold/40">Core</span>
              </div>
              <div className="space-y-4">
                {adobeTools.map((tool) => (
                  <div key={tool.name} className="flex items-start gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-luxury-gold/30 transition-colors">
                    <img src={tool.icon} alt={tool.name} className="w-10 h-10 object-contain rounded-lg shrink-0 mt-0.5" />
                    <div className="text-left">
                      <div className="text-sm font-bold text-white flex items-center gap-2">
                        {tool.name}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5">{tool.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: AI Tools */}
          <div data-aos="fade-up" data-aos-delay="200" className="bg-[#10121a] border border-white/10 rounded-3xl p-7 hover:border-luxury-gold/60 hover:shadow-[0_10px_35px_rgba(245,158,11,0.15)] transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                    AI
                  </div>
                  <h3 className="text-xl font-black text-white">AI Tools &amp; Workflows</h3>
                </div>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">Modern</span>
              </div>
              <div className="space-y-4">
                {aiTools.map((tool) => (
                  <div key={tool.name} className="flex items-start gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors">
                    <img src={tool.icon} alt={tool.name} className="w-10 h-10 object-contain rounded-lg shrink-0 mt-0.5" />
                    <div className="text-left">
                      <div className="text-sm font-bold text-white flex items-center justify-between">
                        <span>{tool.name}</span>
                        <span className="text-[10px] text-emerald-400 font-mono px-2 py-0.5 rounded bg-emerald-500/10">{tool.badge}</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5">{tool.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-left">
                <h4 className="text-xs font-bold uppercase tracking-wider text-luxury-gold mb-1">Web D School Certified</h4>
                <p className="text-xs text-gray-300">
                  Certified in AI-powered Graphic Design, applying generative models to concept iteration, lighting design, and creative ideation.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Core Design Skills */}
          <div data-aos="fade-up" data-aos-delay="300" className="bg-[#10121a] border border-white/10 rounded-3xl p-7 hover:border-luxury-gold/60 hover:shadow-[0_10px_35px_rgba(245,158,11,0.15)] transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">
                    ✦
                  </div>
                  <h3 className="text-xl font-black text-white">Visual &amp; Soft Skills</h3>
                </div>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40">Creative</span>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {coreSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-left">
                    <span className="text-lg w-7 text-center">{skill.icon}</span>
                    <div>
                      <div className="text-sm font-bold text-white">{skill.name}</div>
                      <div className="text-[11px] text-gray-400">{skill.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Timeline Showcase */}
      <section id="projects" ref={projectsRef} className="bg-[#0d0f17] pt-24 pb-36 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-b border-white/5">
        <div className="max-w-6xl mx-auto relative md:h-[2350px]">
          <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0 text-left">
            <div className="inline-block border border-luxury-gold/40 bg-luxury-gold/10 rounded-full px-5 py-1.5 text-xs text-luxury-gold font-bold mb-4 uppercase tracking-widest">
              Portfolio Work
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
              Featured Projects <br />
              <span className="text-luxury-gold">&amp; Creative Work</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base font-medium leading-relaxed">
              A showcase of social media campaigns, high-impact video edits, kinetic motion animations, print marketing collaterals, and AI-powered designs developed over 1.7 years of creative practice.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gray-300">Social Media Creatives</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gray-300">Commercial Video</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gray-300">Motion Graphics</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gray-300">Print Collaterals</span>
            </div>
          </div>

          {/* SVG Animated Connector Path Desktop */}
          <svg className="hidden md:block absolute top-0 left-0 w-full h-[2250px] pointer-events-none z-0" viewBox="0 0 1000 2200" preserveAspectRatio="none">
            <path d="M 650,200 C 400,320 200,480 350,750 C 500,1020 200,1200 350,1450 C 500,1700 250,1850 400,2100" fill="none" stroke="#262938" strokeWidth="3" strokeDasharray="8 10"></path>
            <mask id="path-mask-pradhap">
              <motion.path d="M 650,200 C 400,320 200,480 350,750 C 500,1020 200,1200 350,1450 C 500,1700 250,1850 400,2100" fill="none" stroke="white" strokeWidth="24" style={{ pathLength }} />
            </mask>
            <path d="M 650,200 C 400,320 200,480 350,750 C 500,1020 200,1200 350,1450 C 500,1700 250,1850 400,2100" fill="none" stroke="#F59E0B" strokeWidth="4" strokeDasharray="8 10" mask="url(#path-mask-pradhap)" className="drop-shadow-[0_0_12px_rgba(245,158,11,0.8)]"></path>
          </svg>

          {/* Mobile connector line */}
          <svg className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-full pointer-events-none z-0" viewBox="0 0 4 100" preserveAspectRatio="none">
            <path d="M 2,0 L 2,100" fill="none" stroke="#262938" strokeWidth="4" strokeDasharray="4 6" vectorEffect="non-scaling-stroke"></path>
            <mask id="path-mask-mobile-pradhap">
              <motion.path d="M 2,0 L 2,100" fill="none" stroke="white" strokeWidth="20" style={{ pathLength }} />
            </mask>
            <path d="M 2,0 L 2,100" fill="none" stroke="#F59E0B" strokeWidth="4" strokeDasharray="4 6" mask="url(#path-mask-mobile-pradhap)" vectorEffect="non-scaling-stroke"></path>
          </svg>

          {projectsTimeline.map((exp, idx) => (
            <TimelineCard key={idx} exp={exp} pathLength={pathLength} containerRef={projectsRef} />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-[#07080c] py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div data-aos="fade-up" className="inline-block border border-luxury-gold/40 bg-luxury-gold/10 rounded-full px-5 py-1.5 text-xs text-luxury-gold font-bold uppercase tracking-widest mb-4">
              Career Journey
            </div>
            <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl sm:text-5xl font-black text-white mb-4">
              Work Experience
            </h2>
            <p data-aos="fade-up" data-aos-delay="200" className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-medium">
              Proven hands-on experience in fast-paced production environments delivering creative visual assets.
            </p>
          </div>

          <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-[#10121b] border-2 border-white/10 rounded-[2.5rem] p-8 md:p-12 hover:border-luxury-gold/50 hover:shadow-[0_15px_45px_rgba(245,158,11,0.15)] transition-all duration-500">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4 border-b border-white/10 pb-8 text-left">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxury-gold/15 text-luxury-gold text-xs font-mono font-bold uppercase mb-3">
                    <span className="w-2 h-2 rounded-full bg-luxury-gold animate-ping"></span>
                    Current Role
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-1 uppercase tracking-tight">
                    Graphic Designer &amp; Video Editor
                  </h3>
                  <p className="text-luxury-gold font-extrabold text-base sm:text-lg">
                    Full-Scope Creative &amp; Post-Production Artist
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 px-5 py-2.5 rounded-2xl self-start">
                  <span className="text-luxury-gold text-sm font-bold tracking-wider font-mono">1.7 Years (2024 – Present)</span>
                </div>
              </div>

              <div className="space-y-4 text-left">
                <h4 className="text-luxury-taupe font-bold uppercase tracking-widest text-xs mb-4">Key Roles &amp; Responsibilities</h4>
                <ul className="text-gray-200 space-y-4 font-medium text-sm md:text-base">
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-3 mt-1 text-xl leading-none">✦</span>
                    <span><strong>Social Media Creatives:</strong> Designed high-impact social media creatives, ad banners, and promotional content using Adobe Photoshop and Illustrator.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-3 mt-1 text-xl leading-none">✦</span>
                    <span><strong>Marketing Collaterals:</strong> Produced brochures, corporate posters, flyers, and branding assets with strict typographic hierarchy and print standards.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-3 mt-1 text-xl leading-none">✦</span>
                    <span><strong>Video Post-Production:</strong> Edited commercial clips, high-retention reels, and promotional videos with audio beat-syncing, color correction, and pacing.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-3 mt-1 text-xl leading-none">✦</span>
                    <span><strong>Motion Graphics:</strong> Created dynamic logo reveals, lower-thirds, title animations, and visual transitions using Adobe After Effects.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-3 mt-1 text-xl leading-none">✦</span>
                    <span><strong>AI-Assisted Workflows:</strong> Integrated ChatGPT, Gemini, and Midjourney to accelerate concept generation, visual ideation, and moodboarding.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-3 mt-1 text-xl leading-none">✦</span>
                    <span><strong>Camera Handling &amp; Framing:</strong> Managed camera equipment, framing, shot angles, and scene composition for production shoots.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-3 mt-1 text-xl leading-none">✦</span>
                    <span><strong>Collaborative Delivery:</strong> Worked seamlessly with cross-functional teams to meet strict deadlines while maintaining brand fidelity.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="bg-[#0b0d14] py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div data-aos="fade-up" className="inline-block border border-luxury-gold/40 bg-luxury-gold/10 rounded-full px-5 py-1.5 text-xs text-luxury-gold font-bold uppercase tracking-widest mb-4">
              Academic &amp; Qualifications
            </div>
            <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl sm:text-5xl font-black text-white mb-4">
              Education &amp; <span className="text-luxury-gold">Certifications</span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="200" className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-medium">
              Academic degree, school education, and professional specialized training in AI graphic design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Education Box */}
            <div data-aos="fade-up" data-aos-delay="100" className="bg-[#11131d] border border-white/10 rounded-3xl p-8 hover:border-luxury-gold/50 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 text-lg">
                      🎓
                    </span>
                    <h3 className="text-xl font-black text-white uppercase tracking-tight">Academic Education</h3>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded bg-white/5 text-gray-400">Formal</span>
                </div>

                {/* Degree 1 */}
                <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-lg font-black text-white uppercase">Bachelor of Computer Application (BCA)</h4>
                    <span className="text-xs font-mono font-bold text-luxury-gold bg-luxury-gold/10 px-2 py-0.5 rounded">April 2024</span>
                  </div>
                  <p className="text-luxury-gold font-bold text-sm mb-1">Saraswathy College of Arts And Science</p>
                  <p className="text-xs text-gray-400 font-mono">Affiliation: Annamalai University</p>
                </div>

                {/* Higher Secondary */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-base font-black text-white uppercase">Higher Secondary Course</h4>
                    <span className="text-xs font-mono font-bold text-luxury-gold bg-luxury-gold/10 px-2 py-0.5 rounded">May 2021</span>
                  </div>
                  <p className="text-gray-300 font-semibold text-sm">Govt. Hr. Sec. School</p>
                  <p className="text-xs text-gray-400 font-mono">Location: Vellimedupettai</p>
                </div>
              </div>
            </div>

            {/* Certifications Box */}
            <div data-aos="fade-up" data-aos-delay="200" className="bg-[#11131d] border border-white/10 rounded-3xl p-8 hover:border-luxury-gold/50 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-luxury-gold/15 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold text-lg">
                      📜
                    </span>
                    <h3 className="text-xl font-black text-white uppercase tracking-tight">Professional Certification</h3>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded bg-luxury-gold/20 text-luxury-gold">Certified</span>
                </div>

                {/* Cert 1 */}
                <div className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent border border-luxury-gold/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-luxury-gold"></span>
                    <h4 className="text-lg font-black text-white uppercase">AI - powered Graphic Design</h4>
                  </div>
                  <p className="text-luxury-gold font-bold text-sm mb-2">Web D School, Velachery, Chennai</p>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Comprehensive professional certification in modern graphic design methodologies integrated with AI visual generators, generative infills, prompt engineering, and digital multimedia production.
                  </p>
                </div>

                {/* Languages */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <h4 className="text-xs font-mono uppercase font-bold text-gray-400 tracking-wider mb-2">Languages Known</h4>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span className="text-sm font-bold text-white">English</span>
                      <span className="text-[10px] font-mono text-gray-400">(Professional)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span className="text-sm font-bold text-white">Tamil</span>
                      <span className="text-[10px] font-mono text-gray-400">(Native)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="bg-[#07080c] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 border-t border-white/10">
        <motion.div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12" style={{ y: contactY }}>
          <h1 className="text-[25vw] leading-[0.75] font-black text-white/5 uppercase tracking-tighter select-none scale-y-[1.6] origin-top font-sans">
            CREATE
          </h1>
        </motion.div>

        <div className="relative z-10 w-full flex justify-end items-end">
          <div data-aos="fade-up" className="bg-[#11131e]/95 backdrop-blur-2xl border-t border-l border-white/15 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.8)] w-full md:w-[88%] lg:w-[80%] p-8 md:p-16 rounded-t-[2.5rem] md:rounded-tr-none md:rounded-tl-[4rem] text-white flex flex-col justify-between min-h-[640px] transition-all duration-500">
            <div className="w-full flex flex-col justify-between h-full">
              <div className="text-left mb-8">
                <div className="inline-block border border-luxury-gold/40 bg-luxury-gold/10 rounded-full px-4 py-1 text-xs text-luxury-gold font-bold uppercase tracking-widest mb-3">
                  Let’s Collaborate
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                  Have a Project in Mind? <br />
                  <span className="text-luxury-gold">Let’s Bring It To Life.</span>
                </h2>
                <p className="text-gray-400 text-sm md:text-base mt-2 max-w-xl">
                  Available for freelance projects, full-time graphic design &amp; video editing positions, and brand collaborations.
                </p>
              </div>

              {/* Direct Quick Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
                <a
                  href="mailto:mpradhappradhap@gmail.com"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-luxury-gold hover:bg-white/10 transition-all duration-300 flex items-center gap-3.5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/20 flex items-center justify-center text-luxury-gold group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-gray-400 uppercase font-bold">Email Directly</div>
                    <div className="text-xs font-bold text-white truncate group-hover:text-luxury-gold transition-colors">mpradhappradhap@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+916369028601"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-luxury-gold hover:bg-white/10 transition-all duration-300 flex items-center gap-3.5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/20 flex items-center justify-center text-luxury-gold group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-gray-400 uppercase font-bold">Call / WhatsApp</div>
                    <div className="text-xs font-bold text-white group-hover:text-luxury-gold transition-colors">+91 6369028601</div>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/20 flex items-center justify-center text-luxury-gold">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-mono text-gray-400 uppercase font-bold">Location</div>
                    <div className="text-xs font-bold text-white">Melmavillangai, Villupuram Dist.</div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-8 w-full text-left">
                <div className="flex flex-col md:flex-row gap-8 w-full">
                  <div className="flex-1 flex flex-col gap-6">
                    <div className="relative">
                      <input
                        id="fullName"
                        name="fullName"
                        required
                        placeholder="Your Name *"
                        className="w-full bg-transparent border-b border-white/20 pb-3 text-base focus:outline-none focus:border-luxury-gold transition-colors placeholder-gray-500 font-medium rounded-none text-white"
                        type="text"
                      />
                    </div>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        required
                        placeholder="Your Email *"
                        className="w-full bg-transparent border-b border-white/20 pb-3 text-base focus:outline-none focus:border-luxury-gold transition-colors placeholder-gray-500 font-medium rounded-none text-white"
                        type="email"
                      />
                    </div>
                    <div className="relative">
                      <input
                        id="phone"
                        name="phone"
                        placeholder="Your Phone / WhatsApp Number"
                        className="w-full bg-transparent border-b border-white/20 pb-3 text-base focus:outline-none focus:border-luxury-gold transition-colors placeholder-gray-500 font-medium rounded-none text-white"
                        type="tel"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="relative h-full flex flex-col">
                      <textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Describe your design, video editing, or motion graphics project requirements *"
                        className="w-full h-full min-h-[140px] bg-transparent border-b border-white/20 pb-3 text-base focus:outline-none focus:border-luxury-gold transition-colors placeholder-gray-500 font-medium resize-none rounded-none text-white"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mt-4">
                  <button
                    disabled={formStatus === 'submitting'}
                    className="group relative inline-flex items-center gap-4 text-lg md:text-xl font-black uppercase tracking-tight hover:text-luxury-gold transition-colors disabled:opacity-50 text-white"
                    type="submit"
                  >
                    {formStatus === 'submitting'
                      ? 'Sending Message...'
                      : formStatus === 'success'
                      ? 'Message Sent Successfully!'
                      : formStatus === 'error'
                      ? 'Error Sending, Please Email Me'
                      : 'Send Project Brief'}
                    <span className="w-12 h-12 rounded-full bg-luxury-gold flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-300">
                      {formStatus === 'success' ? (
                        <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-black translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      )}
                    </span>
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href="https://wa.me/916369028601"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-black font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                    >
                      <span>WhatsApp Chat</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setShowResumeModal(true)}
                      className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:border-luxury-gold font-bold text-xs uppercase tracking-wider transition-all duration-300"
                    >
                      View Resume
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050609] text-gray-400 py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[45vh] border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full font-medium text-left">
          <div className="flex flex-col gap-1.5">
            <p className="text-luxury-gold font-bold mb-1 uppercase tracking-widest font-mono">// PROFILE</p>
            <p className="text-white font-bold text-sm">PRADHAP M</p>
            <p className="text-gray-400">Graphic Designer &amp; Video Editor</p>
            <p className="text-gray-500">Motion Graphics &amp; AI Visual Artist</p>
          </div>
          <div className="flex flex-col gap-1.5 md:items-center">
            <p className="text-luxury-gold font-bold mb-1 uppercase tracking-widest font-mono">// NAVIGATION</p>
            <a href="#about" className="hover:text-white transition-colors underline-offset-4 hover:underline">About</a>
            <a href="#skills" className="hover:text-white transition-colors underline-offset-4 hover:underline">Skills &amp; Tools</a>
            <a href="#projects" className="hover:text-white transition-colors underline-offset-4 hover:underline">Featured Projects</a>
            <a href="#experience" className="hover:text-white transition-colors underline-offset-4 hover:underline">Experience</a>
          </div>
          <div className="flex flex-col gap-1.5 md:items-end">
            <p className="text-luxury-gold font-bold mb-1 uppercase tracking-widest font-mono">// LOCATION</p>
            <p className="text-white">Melmavillangai, Thindivanam TK</p>
            <p className="text-gray-400">Villupuram Dist., Tamil Nadu</p>
            <p className="text-gray-500">India</p>
          </div>
        </div>

        {/* Big Signature Watermark */}
        <div className="w-full flex justify-center items-center py-16 md:py-20 overflow-hidden">
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-[16vw] md:text-[14vw] leading-none font-sans font-black tracking-tighter select-none text-white/10 w-full text-center uppercase">
            PRADHAP M
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-end font-medium text-left">
          <div className="flex flex-col gap-2">
            <p className="text-white/80 font-mono text-[10px]">© 2026 PRADHAP M | All Rights Reserved.</p>
            <p className="text-gray-500 text-[9px]">Graphic Designer &amp; Video Editor Portfolio</p>
          </div>
          <div className="flex flex-col gap-1 md:items-center">
            <a href="mailto:mpradhappradhap@gmail.com" className="text-luxury-gold hover:text-white transition-colors underline underline-offset-4">
              mpradhappradhap@gmail.com
            </a>
            <p className="text-gray-400 mt-1">+91 6369028601</p>
          </div>
          <div className="flex flex-col gap-2 md:items-end font-bold text-white">
            <a
              href="https://github.com/mpradhappradhap-max"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-gold hover:text-white transition-colors underline underline-offset-4 text-xs uppercase"
            >
              GitHub: @mpradhappradhap-max
            </a>
            <button
              onClick={() => setShowResumeModal(true)}
              className="text-luxury-gold hover:text-white transition-colors underline underline-offset-4 text-xs uppercase"
            >
              Preview Complete Resume
            </button>
            <a href="./assets/Pradhap_M_Resume.pdf" download="Pradhap_M_Resume.pdf" className="text-gray-400 hover:text-white transition-colors">
              Download PDF Resume
            </a>
          </div>
        </div>
      </footer>

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
              className="relative bg-[#11131e] border-2 border-luxury-gold/50 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
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
                    className="px-3 py-1.5 rounded-lg bg-luxury-gold text-black text-xs font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors flex items-center gap-1.5"
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
