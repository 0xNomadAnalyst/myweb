interface MetricCardProps {
  label: string;
  value: string;
  delta?: string;
}

export function MetricCard({ label, value, delta }: MetricCardProps) {
  return (
    <div className="space-y-1">
      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="text-2xl font-medium tabular-nums">{value}</p>
      {delta && (
        <p className="font-mono text-xs text-muted-foreground">{delta}</p>
      )}
    </div>
  );
}
