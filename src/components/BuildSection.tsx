import FadeIn from './FadeIn';

interface Build {
  number: string;
  name: string;
  href: string;
  display: string;
  description: string;
}

const builds: Build[] = [
  {
    number: '01',
    name: 'WAAP Research',
    href: 'https://waap-research.vercel.app/',
    display: 'waap-research.vercel.app',
    description:
      'A live web project I designed and shipped end-to-end, ready to explore straight in the browser.',
  },
  {
    number: '02',
    name: 'Rite',
    href: 'https://rite-woad.vercel.app/',
    display: 'rite-woad.vercel.app',
    description:
      'A deployed web app showcasing hands-on product building, from interface to shipping.',
  },
];

const BuildSection = () => {
  return (
    <section
      id="build"
      className="relative z-10 bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-8 sm:mb-10 md:mb-12"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Build
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={24}>
        <p
          className="mx-auto mb-12 sm:mb-16 max-w-2xl text-center font-light leading-relaxed text-[#D7E2EA]/70"
          style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.25rem)' }}
        >
          Live apps and tools I have built and shipped. Click any card to visit the project.
        </p>
      </FadeIn>

      <div className="mx-auto grid max-w-6xl gap-5 sm:gap-6 md:grid-cols-2">
        {builds.map((build, index) => (
          <FadeIn key={build.number} delay={index * 0.1} y={30}>
            <a
              href={build.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full min-h-[260px] flex-col justify-between rounded-[32px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 text-[#D7E2EA] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D7E2EA]/10 sm:min-h-[300px] sm:p-8 md:rounded-[42px]"
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className="hero-heading font-black leading-none"
                  style={{ fontSize: 'clamp(3rem, 8vw, 110px)' }}
                >
                  {build.number}
                </span>
                <span className="rounded-full border border-[#D7E2EA]/40 px-4 py-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/70 transition-colors duration-300 group-hover:border-[#D7E2EA] group-hover:text-[#D7E2EA]">
                  Visit
                </span>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:gap-4">
                <h3
                  className="font-medium uppercase leading-tight"
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
                >
                  {build.name}
                </h3>
                <p
                  className="max-w-md font-light leading-relaxed text-[#D7E2EA]/65"
                  style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)' }}
                >
                  {build.description}
                </p>
                <span className="text-sm font-medium text-[#D7E2EA]/50 transition-colors duration-300 group-hover:text-[#D7E2EA]">
                  {build.display}
                </span>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default BuildSection;
