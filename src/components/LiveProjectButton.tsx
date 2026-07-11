interface LiveProjectButtonProps {
  className?: string;
  href?: string;
}

const baseClasses =
  'inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10';

const LiveProjectButton = ({ className = '', href }: LiveProjectButtonProps) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${className}`}
      >
        Visit Project
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${className}`}>Visit Project</button>
  );
};

export default LiveProjectButton;
