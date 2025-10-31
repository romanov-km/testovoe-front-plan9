import Image from 'next/image';
import DiagramNode from './DiagramNode';
import CenterCard from './CenterCard';

export default function Diagram() {
  return (
    <div className="relative h-[682px] w-[663px]">
      <Image src="/circle.svg" alt="diagram" fill className="object-contain" />

      {/* TOP (Spirit) — подпись сверху */}

      <DiagramNode
        icon={<Image src="/spirit.svg" alt="" width={33} height={33} />}
        label="Spirit"
        variant="bottom"
        style={{ left: '50%', top: '-57px', transform: 'translateX(-50%)' }}
      />

      {/* LEFT (Energy) — подпись слева */}
      <DiagramNode
        icon={<Image src="/energy.svg" alt="" width={33} height={33} />}
        label="Energy"
        variant="right"
        style={{ left: '-125px', top: '49%', transform: 'translateY(-46%)' }}
      />

      {/* RIGHT (A map of body) — подпись справа, фикс ширины + выравнивание */}
      <DiagramNode
        icon={<Image src="/body.svg" alt="" width={33} height={33} />}
        label="A map of body"
        variant="left"
        labelWidth={95}
        style={{ right: '-129px', top: '50%', transform: 'translateY(-50%)' }}
      />

      {/* BOTTOM (Mind) — подпись снизу */}
      <DiagramNode
        icon={<Image src="/mind.svg" alt="" width={33} height={33} />}
        label="Mind"
        variant="top"
        style={{ left: '50%', bottom: '-60px', transform: 'translateX(-50%)' }}
      />

      <CenterCard />
    </div>
  );
}
