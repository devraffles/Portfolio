interface SectionLabelProps {
  number: string;
  children: React.ReactNode;
  id?: string;
}

export function SectionLabel({ number, children, id }: SectionLabelProps) {
  return (
    <div className="mb-9 mt-14 flex items-center gap-3">
      <span className="text-xs font-medium tracking-widest text-green">{number}</span>
      <h2 id={id} className="font-syne text-xl font-bold text-porto tracking-tight">{children}</h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
