import { useEffect } from 'react';
import FadeIn from './FadeIn';

const posts = [
  'https://x.com/its_perseus_1/status/2065390419131969936?s=20',
  'https://x.com/its_perseus_1/status/2064696181075202526?s=20',
  'https://x.com/its_perseus_1/status/2072584317881168168?s=20',
  'https://x.com/its_perseus_1/status/2078254929526067425?s=20',
  'https://x.com/its_perseus_1/status/2026044913041985818?s=20',
  'https://x.com/its_perseus_1/status/2027697674192064527?s=20',
  'https://x.com/its_perseus_1/status/2022032455759454329?s=20',
  'https://x.com/its_perseus_1/status/2019160020437610527?s=20',
];

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load: (element?: HTMLElement | null) => void;
      };
    };
  }
}

const ContentsSection = () => {
  useEffect(() => {
    const scriptId = 'twitter-widgets-script';
    const existingScript = document.getElementById(scriptId);

    if (window.twttr?.widgets) {
      window.twttr.widgets.load();
      return;
    }

    if (existingScript) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);
  }, []);

  const duplicatedPosts = [...posts, ...posts];

  return (
    <section
      id="contents"
      className="relative z-10 overflow-hidden bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-8 sm:mb-10 md:mb-12"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contens
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={24}>
        <p
          className="mx-auto mb-12 max-w-2xl text-center font-light leading-relaxed text-[#D7E2EA]/70"
          style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.25rem)' }}
        >
          Latest posts and updates from Perseus, displayed in a continuous sweep.
        </p>
      </FadeIn>

      <div className="contents-marquee relative -mx-5 sm:-mx-8 md:-mx-10 overflow-hidden py-2">
        <div className="contents-marquee-track flex w-max items-start gap-5 sm:gap-6 md:gap-8 px-5 sm:px-8 md:px-10">
          {duplicatedPosts.map((post, index) => (
            <article
              key={`${post}-${index}`}
              className="contents-card flex h-[560px] w-[min(86vw,360px)] shrink-0 flex-col overflow-hidden rounded-[28px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-3 sm:w-[390px] sm:rounded-[34px] md:w-[420px] md:p-4"
            >
              <div className="mb-3 flex items-center justify-between gap-3 border-b border-[#D7E2EA]/15 pb-3">
                <span className="text-xs font-medium uppercase tracking-[0.28em] text-[#D7E2EA]/60">
                  X Post
                </span>
                <span className="rounded-full border border-[#D7E2EA]/25 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-[#D7E2EA]/70">
                  Perseus
                </span>
              </div>
              <div className="contents-embed flex-1 overflow-y-auto overscroll-contain rounded-[20px] bg-white/[0.03]">
                <blockquote
                  className="twitter-tweet"
                  data-theme="dark"
                  data-dnt="true"
                  data-width="420"
                >
                  <a href={post}>View post on X</a>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentsSection;
