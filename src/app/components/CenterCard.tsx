export default function CenterCard() {
  return (
    <div className="absolute top-1/2 left-1/2 max-w-[308px] -translate-x-1/2 -translate-y-1/2 rounded-[18px] border border-[1.12px] border-white/12 bg-white/3 px-[22px] py-[22px] text-center backdrop-blur-[60px]">
      <h3 className="font-playfair text-[24px] leading-[32px] font-semibold text-white">
        Hello World!
      </h3>

      <p className="font-jost mt-[27px] text-[16px] leading-[23px] font-medium tracking-[0] text-white/80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>

      <p className="font-jost mt-[12px] text-[16px] leading-[23px] font-medium tracking-[0] text-white/80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </div>
  );
}
