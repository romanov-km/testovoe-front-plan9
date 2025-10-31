type Props = React.PropsWithChildren<{
  pt?: number;
  pb?: number;
  pr?: number;
  pl?: number;
}>;

export default function Section({ children, pt = 100, pb = 100, pl = 146, pr = 146 }: Props) {
  return (
    <section
      className="relative"
      style={{ paddingTop: pt, paddingBottom: pb, paddingLeft: pl, paddingRight: pr }}
    >
      <div className="max-w-[1200px]">{children}</div>
    </section>
  );
}
