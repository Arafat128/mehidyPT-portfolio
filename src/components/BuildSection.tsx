import FadeIn from './FadeIn';

interface Build {
  number: string;
  name: string;
  href: string;
  display: string;
  description: string;
  details: string[];
}

const builds: Build[] = [
  {
    number: '01',
    name: 'Rite Research Desk',
    href: 'https://rite-woad.vercel.app/',
    display: 'rite-woad.vercel.app',
    description:
      'Pay-per-prompt crypto research on Ritual Testnet with Surf AI reports, on-chain seals, Radar agents and an auto-funded bounty pool.',
    details: [
      '0.005 RIT per prompt, split 50/50 between treasury and bounty pool',
      'Radar agents at 0.1 RIT; Sovereign agents at 0.01 RIT for 3 sealed ticks',
      'Agents watch price, fear & greed, news, peg, gas, whales and Ritual pulse',
      'Telegram unlock alerts when sealed research is ready',
      'Live contracts: ResearchDesk, RadarAgent, BountyPool and Treasury',
    ],
  },
  {
    number: '02',
    name: 'Waap Tools',
    href: 'https://waap-research.vercel.app/',
    display: 'waap-research.vercel.app',
    description:
      'Seedless Web3 dashboard on Human Wallet WaaP for receive, send, swap and bridge across EVM chains and Sui, with preview before every signature.',
    details: [
      'Login with email, phone, Google, X or Discord — no seed phrase',
      'Receive, send, multi-send up to 25 wallets, swap and bridge',
      'LI.FI quotes show provider, output, gas, fees, ETA and minimum received',
      'Testnets first, plus labeled Ethereum, Base, Polygon, Arbitrum, Optimism and Sui',
      'Route checks, approval allowlists, CSRF, rate limits and local-only history',
    ],
  },
  {
    number: '03',
    name: 'DeFi Autopilot',
    href: 'https://github.com/Arafat128/defi-autopilot',
    display: 'github.com/Arafat128/defi-autopilot',
    description:
      'Local-first DeFi automation on human.tech WaaP: a dashboard for rules and privileges plus a worker that watches prices and executes through waap-cli.',
    details: [
      'Instant, limit-order, scheduled and bridge rules from the dashboard',
      'Worker loops every 30s after a 60s cooldown; dry-run is on by default',
      '$25 per-tx cap, daily tx limit, and contract/recipient whitelists',
      'Privileges stored AES-256-GCM; risky txs wait for Telegram Approve/Deny',
      'Uniswap v3 on Sepolia for demo swaps; LI.FI for mainnet-ready routing',
    ],
  },
  {
    number: '04',
    name: 'VoiceSense PD',
    href: 'https://github.com/Arafat128/VoiceSense-PD',
    display: 'github.com/Arafat128/VoiceSense-PD',
    description:
      "Explainable voice-based Parkinson's screening with live mic or upload, English and Bangla modes, and a conservative three-band decision policy.",
    details: [
      'Live microphone or audio upload, processed in memory',
      'English and Bangla UI with explainable PD, healthy or uncertain cues',
      'Feature lab on UCI Parkinsons English and BenSParX Bengali datasets',
      'Conservative bands: healthy ≤42%, uncertain middle, possible PD ≥72%',
      'Python, Streamlit, scikit-learn and librosa — research only, not a diagnosis',
    ],
  },
];

const BuildSection = () => {
  return (
    <section
      id="my-projects"
      className="relative z-10 bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-8 sm:mb-10 md:mb-12"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          My Projects
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={24}>
        <p
          className="mx-auto mb-12 sm:mb-16 max-w-2xl text-center font-light leading-relaxed text-[#D7E2EA]/70"
          style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.25rem)' }}
        >
          Live apps, tools and agent systems I have built and shipped. Click any card to visit the project.
        </p>
      </FadeIn>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-2">
        {builds.map((build, index) => (
          <FadeIn key={build.number} delay={index * 0.08} y={30} className="h-full">
            <a
              href={build.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-[32px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 text-[#D7E2EA] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D7E2EA]/10 sm:p-8 md:rounded-[42px]"
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className="hero-heading font-black leading-none"
                  style={{ fontSize: 'clamp(3rem, 7vw, 96px)' }}
                >
                  {build.number}
                </span>
                <span className="rounded-full border border-[#D7E2EA]/40 px-4 py-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/70 transition-colors duration-300 group-hover:border-[#D7E2EA] group-hover:text-[#D7E2EA]">
                  Visit
                </span>
              </div>

              <h3
                className="mt-8 min-h-[2.5em] font-medium uppercase leading-tight"
                style={{ fontSize: 'clamp(1.35rem, 3vw, 2.4rem)' }}
              >
                {build.name}
              </h3>

              <p
                className="mt-3 min-h-[4.8em] font-light leading-relaxed text-[#D7E2EA]/75"
                style={{ fontSize: 'clamp(0.92rem, 1.3vw, 1.05rem)' }}
              >
                {build.description}
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-2.5 border-t border-[#D7E2EA]/15 pt-5">
                {build.details.map((detail) => (
                  <li
                    key={detail}
                    className="grid grid-cols-[10px_minmax(0,1fr)] items-start gap-3"
                  >
                    <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D7E2EA]/55" />
                    <span
                      className="font-light leading-relaxed text-[#D7E2EA]/65"
                      style={{ fontSize: 'clamp(0.82rem, 1.05vw, 0.95rem)' }}
                    >
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>

              <span className="mt-auto border-t border-[#D7E2EA]/15 pt-4 text-sm font-medium text-[#D7E2EA]/50 transition-colors duration-300 group-hover:text-[#D7E2EA]">
                {build.display}
              </span>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default BuildSection;
