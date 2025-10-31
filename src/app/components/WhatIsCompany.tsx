import Diagram from './Diagram';
import Section from './Section';

// WhatIsCompany.tsx
export default function WhatIsCompany() {
  return (
    <Section pt={0} pb={0} pl={146} pr={364}>
      <div className="mx-auto flex max-w-[1200px] flex-col md:flex-row">
        {/* Левая колонка — заголовок и текст */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-col">
            <h2 className="font-playfair text-[32px] leading-[1.05] font-normal text-white md:text-[40px] lg:text-[48px]">
              What is Company?
            </h2>

            <p className="font-jost mt-[29px] max-w-[432px] text-[18px] leading-[22px] font-medium text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu rhoncus ligula,
              dictum molestie neque. Nam vitae tempor mi. Suspendisse tincidunt
            </p>
          </div>
        </div>

        {/* Правая колонка с диаграммой */}
        <div className="relative min-w-0 flex-1 md:pt-4">
          <div className="relative z-10 md:-mt-20 md:-ml-16 lg:-mt-28 lg:-ml-28 xl:mt-19 xl:-ml-60">
            <Diagram />
          </div>
        </div>
      </div>
    </Section>
  );
}
