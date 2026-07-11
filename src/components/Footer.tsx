const socials = [
  {
    label: 'Twitter',
    value: '@its_perseus_1',
    href: 'https://x.com/its_perseus_1',
  },
  {
    label: 'GitHub',
    value: 'Arafat128',
    href: 'https://github.com/Arafat128',
  },
  {
    label: 'Discord',
    value: 'mehidy',
    href: null,
  },
];

const linkClasses =
  'inline-flex flex-col rounded-2xl border-2 border-[#D7E2EA]/60 px-6 py-4 transition-colors duration-200';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pb-16 pt-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {socials.map((social) => {
            const content = (
              <>
                <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60">
                  {social.label}
                </span>
                <span className="text-base sm:text-lg font-medium text-[#D7E2EA]">
                  {social.value}
                </span>
              </>
            );

            if (social.href) {
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClasses} hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]`}
                >
                  {content}
                </a>
              );
            }

            return (
              <div
                key={social.label}
                className={`${linkClasses} cursor-default select-none`}
                title="Discord username"
              >
                {content}
              </div>
            );
          })}
        </div>
        <p className="text-sm text-[#D7E2EA]/50">
          &copy; {new Date().getFullYear()} mehidyPT. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

