import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: 'https://x.com/its_perseus_1', external: true },
];

const HeroSection = () => {
  return (
    <section
      className="relative flex flex-col rounded-[28px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden min-h-[calc(100svh-2rem)] sm:min-h-[calc(100svh-3rem)] md:min-h-[calc(100svh-4rem)]"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-20 flex justify-between px-6 md:px-10 pt-6 md:pt-8"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            className="text-white font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.45)' }}
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      {/* Hero Heading */}
      <div className="relative z-20 overflow-hidden mt-6 sm:mt-4 md:mt-2 px-4">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none w-full text-center text-[13vw] sm:text-[12vw] md:text-[11vw] lg:text-[10vw]"
            style={{ filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.45))' }}
          >
            Hi, i&apos;m mehidy
          </h1>
        </FadeIn>
      </div>

      {/* Avatar */}
      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[260px] sm:w-[340px] md:w-[420px] lg:w-[480px] pointer-events-none"
      >
        <FadeIn delay={0.6} y={30}>
          <img
            src="/assets/hero-avatar.png"
            alt="Mehidy avatar"
            className="w-full h-auto select-none pointer-events-none"
            draggable={false}
            style={{ filter: 'drop-shadow(0 20px 45px rgba(0,0,0,0.55))' }}
          />
        </FadeIn>
      </Magnet>

      {/* Bottom bar */}
      <div className="relative z-30 mt-auto flex justify-end items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
