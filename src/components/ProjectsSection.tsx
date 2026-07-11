import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import FadeIn from './FadeIn';
import ProjectCard from './ProjectCard';
import type { Project } from './ProjectCard';

const projects: Project[] = [
  {
    number: '01',
    name: 'human.tech',
    href: 'https://human.tech/',
    col1Image1: '/assets/ht-banner.jpg',
    col1Image2: '/assets/ht-passport.webp',
    col2Image: '/assets/ht-waap.jpg',
  },
  {
    number: '02',
    name: 'Spot Zero',
    href: 'https://spotzero.tartalabs.io/',
    col1Image1: '/assets/sz-banner.webp',
    col1Image2: '/assets/sz-kagari.webp',
    col2Image: '/assets/sz-group.webp',
  },
  {
    number: '03',
    name: 'HertzFlow',
    href: 'https://www.hertzflow.xyz/',
    col1Image1: '/assets/hf-banner.jpg',
    col1Image2: '/assets/hf-hero.jpg',
    col2Image: '/assets/hf-logo.jpg',
  },
];

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const totalCards = projects.length;

  return (
    <section
      id="projects"
      className="relative z-10 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Currently Contributing in projects
        </h2>
      </FadeIn>

      <div ref={containerRef} className="max-w-6xl mx-auto">
        {projects.map((project, index) => {
          const targetScale = 1 - (totalCards - 1 - index) * 0.03;
          const rangeStart = index / totalCards;
          return (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={totalCards}
              progress={scrollYProgress}
              range={[rangeStart, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
