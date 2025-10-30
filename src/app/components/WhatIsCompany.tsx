import Diagram from './Diagram';
import Section from './Section';

export default function WhatIsCompany() {
  return (
    <Section pt={0} pb={120} pl={146} pr={146}>
      <div className="grid-cols-[] grid items-start gap-[40px]">
        {/* Левая колонка: оставляем стили текста как есть, чтобы не сдвинуть заголовок */}
        <div className="flex flex-col gap-[29px]">
          <h2 className="font-playfair text-[48px] leading-[100%] font-normal text-white">
            What is Company?
          </h2>

          <p className="font-jost w-[432px] text-[18px] leading-[130%] font-medium text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu rhoncus ligula,
            dictum molestie neque. Nam vitae tempor mi. Suspendisse tincidunt
          </p>
        </div>

        {/* Правая колонка: диаграмма фиксированного размера 846×846 */}
        <div className="absolute pt-[90px] pl-[360px]">
          <Diagram />
        </div>
      </div>
    </Section>
  );
}
