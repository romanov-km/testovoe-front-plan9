type Props = React.PropsWithChildren<{
  pt?: number;
  pb?: number;
  pr?: number;
  pl?: number;
}>;

export default function Section({ children, pt = 100, pb = 100, pl = 146, pr = 146 }: Props) {
  const styleVars = {
    ['--pt' as string]: `${pt}px`,
    ['--pb' as string]: `${pb}px`,
    ['--pl' as string]: `${pl}px`,
    ['--pr' as string]: `${pr}px`,
  } as unknown as React.CSSProperties;

  return (
    <section className="section relative" style={styleVars}>
      <div className="max-w-[1200px]">{children}</div>
    </section>
  );
}
