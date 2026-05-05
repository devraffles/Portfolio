interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'accent';
  className?: string;
}

export function Badge({ children, variant = 'primary', className = '' }: BadgeProps) {
  const variants = {
    primary: 'bg-green-dim border border-green/20 text-green',
    success: 'bg-green-dim border border-green/20 text-green',
    accent: 'bg-amber-dim border border-amber/20 text-amber',
  };

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-sm px-3 py-1 text-xs font-medium tracking-widest uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
}
