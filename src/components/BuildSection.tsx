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
      'Pay-per-prompt crypto research on Ritual Testnet 1979 with Surf AI reports, on-chain seals, Telegram unlock alerts, Rite Radar data agents and an auto-funded bounty pool.',
    details: [
      'Research costs 0.005 RIT per prompt; fees split 50% treasury and 50% BountyPool.',
      'Persistent Radar agents deploy for 0.1 RIT; Sovereign agents deploy for 0.01 RIT and die after 3 sealed ticks.',
      'Agent ticks cost 0.005 RIT from the agent balance and can watch token price, fear and greed, news, stablecoin peg, gas, whale stress and Ritual network pulse streams.',
      'Live contracts: ResearchDesk 0xd3469a23b2a08b237bc6c0522845eb1b508e5352, RadarAgent 0x50a3fb54aa1289546a0be2d6b29d689bb2dd5f6f, BountyPool 0xbc4bc83298950cbda52837cd806d41ad7c3c36bf and Treasury 0xd3309Bf2E2D1F451132dbC34Dc5908C442903458.',
    ],
  },
  {
    number: '02',
    name: 'Waap Tools',
    href: 'https://waap-research.vercel.app/',
    display: 'waap-research.vercel.app',
    description:
      'A testnet-first Web3 dashboard built on the Human Wallet WaaP SDK for seedless email, phone, Google, Twitter or Discord login across EVM chains and Sui.',
    details: [
      'Receive, send, multi-send up to 25 recipients, swap, bridge and run capped repeat actions with preview and confirmation before every signature.',
      'LI.FI routes show provider, output, gas, fees, ETA and minimum received; scheduled execution is opt-in and repeat tools stay passphrase-gated.',
      'Supports Sepolia, Base Sepolia and Arbitrum Sepolia first, plus clearly labeled Ethereum, Base, Polygon, Arbitrum, Optimism and Sui mainnets.',
      'Security includes route validation, ERC20 approval allowlists, Sui sender checks, same-origin and CSRF checks, rate limits, local-only history and hashed unique-user stats.',
    ],
  },
  {
    number: '03',
    name: 'DeFi Autopilot',
    href: 'https://github.com/Arafat128/defi-autopilot',
    display: 'github.com/Arafat128/defi-autopilot',
    description:
      'A local-first DeFi automation agent on human.tech WaaP with a dashboard for rules and privileges plus a worker that evaluates prices and executes through waap-cli.',
    details: [
      'Dashboard creates instant, limit-order, scheduled and bridge rules, mints encrypted WaaP Privileges and edits policy without directly executing transactions.',
      'Worker loops every 30s after a 60s cooldown, starts in dry-run by default and sends through waap-cli when live.',
      'Safety layers include a $25 per-transaction app cap, 50 executed transactions per 24h, contract and recipient whitelists, AES-256-GCM privilege storage and native WaaP approvals.',
      'Routing uses Sepolia Uniswap v3 SwapRouter02 0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E for demo swaps and LI.FI Diamond 0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE for mainnet-ready swaps/bridges; Sui is send-only.',
    ],
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
          Live apps, tools and agent systems I have built and shipped. Click any card to visit the project.
        </p>
      </FadeIn>

      <div className="mx-auto grid max-w-7xl gap-5 sm:gap-6 lg:grid-cols-3">
        {builds.map((build, index) => (
          <FadeIn key={build.number} delay={index * 0.1} y={30}>
            <a
              href={build.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full min-h-[560px] flex-col rounded-[32px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 text-[#D7E2EA] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D7E2EA]/10 sm:p-8 md:rounded-[42px]"
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

              <div className="mt-12 flex flex-1 flex-col gap-4">
                <h3
                  className="font-medium uppercase leading-tight"
                  style={{ fontSize: 'clamp(1.35rem, 3vw, 2.5rem)' }}
                >
                  {build.name}
                </h3>
                <p
                  className="font-light leading-relaxed text-[#D7E2EA]/75"
                  style={{ fontSize: 'clamp(0.9rem, 1.35vw, 1.08rem)' }}
                >
                  {build.description}
                </p>
                <ul className="flex flex-col gap-2 border-t border-[#D7E2EA]/15 pt-4">
                  {build.details.map((detail) => (
                    <li
                      key={detail}
                      className="break-words font-light leading-relaxed text-[#D7E2EA]/60"
                      style={{ fontSize: 'clamp(0.78rem, 1.1vw, 0.95rem)' }}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
                <span className="break-all text-sm font-medium text-[#D7E2EA]/50 transition-colors duration-300 group-hover:text-[#D7E2EA]">
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

