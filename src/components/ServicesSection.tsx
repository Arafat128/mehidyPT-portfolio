import FadeIn from './FadeIn';

const services = [
  {
    number: '01',
    name: 'Web app development',
    description:
      'Designing and building fast, responsive web apps end-to-end — from clean, modern interfaces to the logic and infrastructure that power them.',
  },
  {
    number: '02',
    name: 'Tools & automation',
    description:
      'Building custom tools, scripts and automations that remove repetitive work, streamline workflows and save teams real time.',
  },
  {
    number: '03',
    name: 'AI agents',
    description:
      'Designing and shipping AI agents that reason, use tools and automate complex tasks — tailored to real product and workflow needs.',
  },
  {
    number: '04',
    name: 'Discord bots',
    description:
      'Developing custom Discord bots for moderation, engagement and automation — keeping communities active, organized and running smoothly.',
  },
  {
    number: '05',
    name: 'Regional/global community management',
    description:
      'Managing and growing regional and global communities — moderating discussions, running events and keeping members engaged across every platform.',
  },
  {
    number: '06',
    name: 'Creating content',
    description:
      'Producing engaging content, from graphics and short videos to posts and visuals, that captures attention and clearly communicates the message.',
  },
  {
    number: '07',
    name: 'Testing products and provide feedback',
    description:
      'Hands-on testing of products and features, reporting bugs and sharing detailed, actionable feedback to help teams ship a polished experience.',
  },
  {
    number: '08',
    name: 'Compete for gaming events',
    description:
      'Representing the brand in competitive gaming events and tournaments, bringing skill, visibility and energy to every match.',
  },
  {
    number: '09',
    name: 'Work as support team',
    description:
      'Supporting users as part of the team, answering questions, resolving issues quickly and making sure everyone has a smooth experience.',
  },
];

const ServicesSection = () => {
  return (
    <section
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] mt-2.5 sm:mt-4 md:mt-5 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn
            key={service.number}
            delay={i * 0.1}
            y={30}
            className="flex items-start gap-5 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
            style={{ borderTop: '1px solid rgba(12, 12, 12, 0.15)' }}
          >
            <span
              className="text-[#0C0C0C] font-black leading-none shrink-0"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.number}
            </span>
            <div className="flex flex-col gap-3 sm:gap-4 pt-1">
              <h3
                className="text-[#0C0C0C] font-medium uppercase leading-tight"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.name}
              </h3>
              <p
                className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
        {/* Bottom border for the last item */}
        <div style={{ borderTop: '1px solid rgba(12, 12, 12, 0.15)' }} />
      </div>
    </section>
  );
};

export default ServicesSection;

