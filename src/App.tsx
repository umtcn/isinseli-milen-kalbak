import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Linkedin,
  Menu,
  X,
  Play,
  Volume2,
  VolumeX,
  Download,
  ExternalLink
} from 'lucide-react';
import { PROJECTS, AUTOMATION, SOCIAL_MEDIA, ARTWORKS, Project } from './constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[70] px-6 py-4 md:py-8 flex justify-between items-center transition-all duration-500 ${isOpen
        ? 'text-brand-bg'
        : scrolled
          ? 'bg-brand-bg/90 backdrop-blur-xl border-b border-brand-ink/5 text-brand-ink py-4'
          : 'mix-blend-difference text-white'
        }`}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-serif tracking-tighter"
        >
          I.M.K
        </motion.div>

        <div className="hidden md:flex gap-12 items-center text-xs uppercase tracking-widest font-medium">
          {['Work', 'Automation', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:opacity-50 transition-opacity">
              {item}
            </a>
          ))}
          <a
            href="/isinseli_milen_kalbak_portfolio_2026.pdf"
            download
            className={`px-4 py-2 rounded-full flex items-center gap-2 transition-colors ${scrolled ? 'bg-brand-ink text-brand-bg hover:bg-brand-ink/80' : 'bg-white text-black hover:bg-white/80'
              }`}
          >
            <Download size={14} />
            <span>Portfolio</span>
          </a>
        </div>

        <button className="md:hidden relative z-[80] p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-screen bg-brand-ink text-brand-bg p-8 pt-32 flex flex-col gap-6 md:hidden z-[60]"
          >
            {['Work', 'Automation', 'About', 'Contact'].map((item) => (
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-serif tracking-tight border-b border-brand-bg/10 pb-4"
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              href="/isinseli_milen_kalbak_portfolio_2026.pdf"
              download
              className="mt-8 bg-brand-bg text-brand-ink px-8 py-4 rounded-full flex items-center justify-center gap-3 text-xl font-medium"
            >
              <Download size={24} />
              <span>Download Portfolio</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const VideoModal = ({ video, onClose }: { video: string; onClose: () => void }) => {
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
      onClick={onClose}
    >
      <button
        className="absolute top-8 right-8 text-white hover:opacity-50 z-[110]"
        onClick={onClose}
      >
        <X size={32} />
      </button>

      <div className="relative w-full max-w-4xl aspect-[9/16] md:aspect-video bg-black shadow-2xl overflow-hidden rounded-lg" onClick={e => e.stopPropagation()}>
        <video
          ref={videoRef}
          src={video}
          autoPlay
          controls
          className="w-full h-full object-contain"
          muted={isMuted}
        />
        <div className="absolute bottom-16 right-8 flex gap-4">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/20"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

interface ProjectCardProps {
  project: Project;
  onPlay: (v: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onPlay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-12 items-start py-24 border-b border-brand-ink/10"
    >
      <div className="space-y-8">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] font-semibold opacity-40 mb-4 block">
            {project.category}
          </span>
          <h3 className="text-4xl md:text-6xl font-serif tracking-tight mb-6">{project.title}</h3>
          <p className="text-2xl font-light leading-relaxed opacity-90">{project.description}</p>
          {project.longDescription && (
            <p className="text-base font-light leading-relaxed opacity-70 mt-4">{project.longDescription}</p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-8">
          {project.stats?.map((stat, i) => (
            <div key={i}>
              <span className="block text-3xl font-serif">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest opacity-60">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest border border-brand-ink/20 px-3 py-1 rounded-full opacity-60">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {project.videos.map((video, idx) => (
          <div
            key={idx}
            className="relative group aspect-[9/16] bg-brand-ink/5 overflow-hidden rounded-md cursor-pointer"
            onClick={() => onPlay(video)}
          >
            <video
              src={video}
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white">
                <Play fill="white" size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-20">
    <div className="max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-xs uppercase tracking-[0.3em] font-semibold opacity-50 mb-6 block">
          Marketing Art Team Lead / Motion Designer
        </span>
        <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] tracking-tighter mb-12">
          Işınseli <br />
          <span className="italic">Milen</span> Kalbak
        </h1>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-end">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl font-light leading-relaxed max-w-xl"
        >
          Operating at the intersection of fine art, AI, and performance marketing.
          Leading creative strategy and automated production for high-scale mobile campaigns.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4"
        >
          <div className="flex flex-col">
            <span className="text-4xl font-serif">$550k+</span>
            <span className="text-[10px] uppercase tracking-widest opacity-50">Spend Managed</span>
          </div>
          <div className="w-px h-12 bg-brand-ink/20 mx-4" />
          <div className="flex flex-col">
            <span className="text-4xl font-serif">25M+</span>
            <span className="text-[10px] uppercase tracking-widest opacity-50">Views Generated</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <a
            href="/isinseli_milen_kalbak_portfolio_2026.pdf"
            download
            className="inline-flex items-center gap-3 bg-brand-ink text-brand-bg px-8 py-4 rounded-full hover:opacity-80 transition-all group"
          >
            <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
            <span className="text-lg font-medium tracking-wide">Download Full Portfolio</span>
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default function App() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="selection:bg-brand-ink selection:text-brand-bg">
      <Navbar />

      <main>
        <Hero />

        <section id="work" className="py-32 px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-5xl md:text-6xl tracking-tight">SELECTED <br /><span className="italic">WORKS</span></h2>
            </div>

            <div className="space-y-0">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} onPlay={setActiveVideo} />
              ))}
            </div>
          </div>
        </section>

        <section id="automation" className="py-32 px-6 md:px-24 bg-brand-ink text-brand-bg">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest opacity-40 mb-4 block">System Design</span>
              <h2 className="text-5xl md:text-7xl mb-12 leading-tight">
                AD AUTOMATION <br />
                <span className="italic">SYSTEM</span>
              </h2>
              <p className="text-2xl font-light leading-relaxed opacity-80 mb-8">
                {AUTOMATION.description}
              </p>
              <p className="text-lg font-light opacity-60 italic">
                "{AUTOMATION.impact}"
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {AUTOMATION.image.map((img, idx) => (
                <div key={idx} className="relative group rounded-lg overflow-hidden border border-white/10">
                  <img
                    src={img}
                    alt={`Ad Automation Workflow ${idx + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
              <span className="text-[10px] uppercase tracking-widest opacity-60">System Workflow Visualization</span>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 md:px-24 border-b border-brand-ink/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl mb-16 tracking-tight">SOCIAL MEDIA <br /><span className="italic">CONTENT</span></h2>
            <div className="grid md:grid-cols-2 gap-16">
              {SOCIAL_MEDIA.map((item, i) => (
                <div key={i} className="space-y-8 group">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-[3/4] overflow-hidden rounded-md bg-brand-ink/5">
                      <img
                        src={item.image}
                        alt={`${item.client} content`}
                        className="w-full h-full object-cover transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="aspect-[3/4] overflow-hidden rounded-md bg-brand-ink/5 relative cursor-pointer" onClick={() => setActiveVideo(item.video)}>
                      <video
                        src={item.video}
                        muted
                        loop
                        autoPlay
                        playsInline
                        className="w-full h-full object-cover transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white">
                          <Play fill="white" size={24} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-3xl font-serif">{item.client}</h4>
                    <p className="text-xl font-light opacity-70 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-widest border border-brand-ink/20 px-3 py-1 rounded-full opacity-60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="art" className="py-32 px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-5xl md:text-6xl tracking-tight">SOURCE <br /><span className="italic">MATERIAL</span></h2>
              <p className="max-w-md text-sm opacity-60 hidden md:block">
                Traditional craft meets digital innovation. These works form the foundation of my creative instinct.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ARTWORKS.map((art, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-lg mb-6 bg-brand-ink/5 relative">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-ink/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest opacity-40 mb-2 block">{art.type}</span>
                  <h4 className="text-xl font-serif mb-2">{art.title}</h4>
                  <p className="text-sm opacity-60 font-light leading-relaxed">{art.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-32 px-6 md:px-24 bg-brand-ink text-brand-bg">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl leading-tight">
                THE ART <br />
                <span className="italic">MATTERS.</span>
              </h2>
              <div className="space-y-6 text-lg font-light opacity-80">
                <p>
                  Every ad in this portfolio was made by someone who can also draw it by hand.
                  The performance marketing work and the fine art work are not separate careers —
                  they are the same instinct applied to different problems.
                </p>
                <p>
                  Understanding compositional weight tells you why one scroll-stopping thumbnail works
                  and another doesn't. Years of rendering texture through linework translate directly
                  into knowing which AI model to prompt, and how.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="block text-xs uppercase tracking-widest opacity-40 mb-2">Education</span>
                <p className="text-sm font-medium">MFA Graphic Design</p>
                <p className="text-xs opacity-60">Hacettepe University | 2025</p>
                <p className="text-sm font-medium mt-4">BFA Graphic Design</p>
                <p className="text-xs opacity-60">Bilkent University | 2022</p>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest opacity-40 mb-2">Skills</span>
                <p className="text-xs leading-relaxed opacity-80">
                  AI Generative Suite, AI Video & Audio, Adobe Creative Cloud,
                  UA Strategy, Art Direction, Creative Strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-32 px-6 md:px-24 border-t border-brand-ink/10">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-6xl md:text-9xl mb-12 tracking-tighter italic">SAY HELLO</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
              <a href="mailto:milenkalbak@gmail.com" className="flex items-center gap-4 text-2xl hover:opacity-50 transition-opacity">
                <Mail size={32} strokeWidth={1} />
                <span>milenkalbak@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/işınseli-milen-kalbak" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-2xl hover:opacity-50 transition-opacity">
                <Linkedin size={32} strokeWidth={1} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {activeVideo && (
          <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>

      <footer className="py-12 px-6 md:px-24 flex justify-between items-center text-[10px] uppercase tracking-widest opacity-40">
        <span>© 2026 Işınseli Milen Kalbak</span>
        <span>Marketing Art Team Lead</span>
      </footer>
    </div>
  );
}
