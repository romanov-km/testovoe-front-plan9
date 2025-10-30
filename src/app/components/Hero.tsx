import Section from './Section';

export default function Hero() {
  return (
    <Section pt={194} pb={362} pl={146} pr={364}>
      <div className="relative z-10 flex flex-col gap-8 text-left">
        <h1 className="font-playfair h-[231px] max-w-[930px] text-[90px] leading-[1.3] text-white">
          Company: The Future of Healing is Here
        </h1>
        <h2 className="font-jost text-[20px] leading-[1.2] font-semibold text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h2>

        <div className="flex w-[660px] gap-[32px]">
          <button className="font-jost flex h-[55px] w-[315px] items-center justify-center rounded-[12px] [background-image:linear-gradient(#FF62C5,#FF62C5),url('/neon-seeker.svg')] bg-cover bg-center px-[15px] text-[18px] font-semibold text-white [background-blend-mode:screen]">
            I am a Seeker → Begin my journey
          </button>
          <button className="font-jost flex h-[55px] w-[315px] items-center justify-center rounded-[12px] [background-image:linear-gradient(#626AFF,#626AFF),url('/neon-healer.svg')] bg-cover bg-center px-[15px] text-[18px] font-semibold text-white [background-blend-mode:screen]">
            I am a Healer → Begin my journey
          </button>
        </div>
      </div>
    </Section>
  );
}
