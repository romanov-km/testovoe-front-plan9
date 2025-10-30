import Section from './Section';

export default function WhatIsCompany() {
  return (
    <Section pt={0} pb={120} pl={146}>
      <div className="flex flex-col gap-[29px]">
        <h2 className="font-playfair text-[48px] leading-[100%] font-normal text-white">
          What is Company?
        </h2>

        <p className="font-jost w-[432px] text-[18px] leading-[130%] font-medium text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu rhoncus ligula, dictum
          molestie neque. Nam vitae tempor mi. Suspendisse tincidunt
        </p>
      </div>
    </Section>
  );
}
