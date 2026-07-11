import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import LiveProjectButton from './LiveProjectButton';

export interface Project {
  number: string;
  name: string;
  href?: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const imageWrapClasses =
  'group relative block w-full overflow-hidden rounded-[28px] sm:rounded-[40px] md:rounded-[50px] cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA]';

const ProjectCard = ({
  project,
  index,
  progress,
  range,
  targetScale,
}: ProjectCardProps) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (!activeImage) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveImage(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeImage]);

  return (
    <div
      className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full rounded-[28px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
          <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1 sm:gap-2">
              <span
                className="text-[#D7E2EA] font-medium uppercase leading-tight"
                style={{ fontSize: 'clamp(1rem, 2.4vw, 2.2rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton href={project.href} />
        </div>

        {/* Bottom image grid */}
        <div className="flex gap-2.5 sm:gap-4 md:gap-6">
          <div className="flex flex-col gap-2.5 sm:gap-4 md:gap-6 w-2/5">
            <button
              type="button"
              onClick={() => setActiveImage(project.col1Image1)}
              className={imageWrapClasses}
              style={{ height: 'clamp(110px, 16vw, 230px)' }}
              aria-label={`View ${project.name} preview 1`}
            >
              <img
                src={project.col1Image1}
                alt={`${project.name} preview 1`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
            <button
              type="button"
              onClick={() => setActiveImage(project.col1Image2)}
              className={imageWrapClasses}
              style={{ height: 'clamp(140px, 22vw, 340px)' }}
              aria-label={`View ${project.name} preview 2`}
            >
              <img
                src={project.col1Image2}
                alt={`${project.name} preview 2`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          </div>
          <div className="w-3/5">
            <button
              type="button"
              onClick={() => setActiveImage(project.col2Image)}
              className={`${imageWrapClasses} h-full`}
              aria-label={`View ${project.name} preview 3`}
            >
              <img
                src={project.col2Image}
                alt={`${project.name} preview 3`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          </div>
        </div>
      </motion.div>

      {activeImage &&
        createPortal(
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setActiveImage(null)}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] text-2xl leading-none transition-colors duration-200 hover:bg-[#D7E2EA]/10"
              aria-label="Close image"
            >
              &times;
            </button>
            <img
              src={activeImage}
              alt={`${project.name} preview`}
              className="max-h-[85vh] max-w-full w-auto h-auto object-contain rounded-2xl"
              onClick={(event) => event.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </div>
  );
};

export default ProjectCard;
