type Variant = 'top' | 'bottom' | 'left' | 'right';

type Props = {
  icon: React.ReactNode; // SVG 33×33 (или любой JSX)
  label: string;
  variant: Variant; // расположение подписи
  style?: React.CSSProperties; // абсолютные координаты узла
  labelWidth?: number;
};

export default function DiagramNode({ icon, label, variant, style, labelWidth }: Props) {
  const text = 'font-serif text-white text-[28px] leading-[1.1]';
  const lay: Record<Variant, string> = {
    top: 'flex flex-col-reverse items-center gap-[22.5px] text-center',
    bottom: 'flex flex-col items-center gap-[22.5px] text-center',
    left: 'flex flex-row-reverse items-center gap-[22.5px] text-left',
    right: 'flex flex-row items-center gap-[22.5px] text-right',
  };

  return (
    <div className="absolute select-none" style={style}>
      <div className={lay[variant]}>
        {/* подпись */}
        <div className={text} style={labelWidth ? { width: labelWidth } : undefined}>
          {label}
        </div>

        {/* сам «бейдж» 78×78 с эффектами + иконка 33×33 по центру */}
        <div
          className="[box-sizing:border-box] flex h-[78px] w-[78px] items-center justify-center overflow-hidden rounded-full shadow-[0_0_20.0445px_0_rgba(255,170,241,0.2)] backdrop-blur-[7.9779px]"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 100%)',
          }}
        >
          {/* Иконка SVG 33×33 по центру */}

          <div className="flex h-[33px] w-[33px] items-center justify-center">{icon}</div>
        </div>
      </div>
    </div>
  );
}
