import Section from './Section';

export default function Hero() {
  return (
    <Section pt={194} pb={362} pl={146} pr={364}>
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col text-left">
        <h1 className="font-playfair max-w-[930px] text-[40px] leading-[1.3] text-white md:text-[64px] lg:text-[90px]">
          Company: The Future of Healing is Here
        </h1>
        <h2 className="font-jost mt-[32px] text-[20px] leading-[100%] font-semibold text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h2>

        <div className="mt-8 flex w-full flex-wrap gap-8">
          <button
            type="button"
            className="font-jost flex h-[55px] max-w-[315px] min-w-[240px] flex-1 cursor-pointer items-center justify-center rounded-[12px] [background-image:linear-gradient(#FF62C5,#FF62C5),url('/neon-seeker.svg')] bg-cover bg-center px-[16px] py-[17.5] text-[18px] font-semibold text-white [background-blend-mode:screen] hover:brightness-110 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none"
          >
            I am a Seeker → Begin my journey
          </button>
          <button
            type="button"
            className="font-jost flex h-[55px] max-w-[313px] min-w-[240px] flex-1 cursor-pointer items-center justify-center rounded-[12px] [background-image:linear-gradient(#626AFF,#626AFF),url('/neon-healer.svg')] bg-cover bg-center px-[16px] py-[17.5] text-[18px] font-semibold text-white [background-blend-mode:screen] hover:brightness-110 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none"
          >
            I am a Healer → Begin my journey
          </button>
        </div>
      </div>
    </Section>
  );
}
