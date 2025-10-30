export default function Hero() {
  return (
    <section className="bg-night relative overflow-hidden">
      {/* фон-видео */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        src="/1826127_Galaxy_Nebula_1280x720.mp4"
        autoPlay
        loop
        muted
        playsInline
        data-video="0"
      />

      <div className="absolute inset-0 bg-[#100917]/70" />

      <div className="relative z-10 flex flex-col gap-8 pt-[194px] pr-[364px] pb-[362px] pl-[146px] text-left">
        <h1 className="font-playfair h-[231px] max-w-[930px] text-[90px] leading-[1.3] text-white">
          Company: The Future of Healing is Here
        </h1>
        <h2 className="font-jost text-[20px] leading-[1.2] font-semibold text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h2>

        <div className="flex w-[660px] gap-[32px]">
          <button className="font-jost flex h-[55px] w-[315px] items-center justify-center rounded-[12px] [background-image:linear-gradient(#FF62C5,#FF62C5),url('/neon-seeker.png')] bg-cover bg-center px-[15px] text-[18px] font-semibold text-white [background-blend-mode:screen]">
            I am a Seeker → Begin my journey
          </button>
          <button className="font-jost flex h-[55px] w-[315px] items-center justify-center rounded-[12px] [background-image:linear-gradient(#626AFF,#626AFF),url('/neon-healer.png')] bg-cover bg-center px-[15px] text-[18px] font-semibold text-white [background-blend-mode:screen]">
            I am a Healer → Begin my journey
          </button>
        </div>
      </div>
    </section>
  );
}
