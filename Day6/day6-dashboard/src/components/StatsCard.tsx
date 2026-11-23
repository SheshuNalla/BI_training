
interface StatsCardProps {
  title: string;
  value: number;
}

function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="rounded-card border border-border bg-surface p-5 shadow-sm transition-shadow hover:shadow-md">
      <p className="text-sm font-medium text-muted">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-text">
        {value}
      </h3>
    </div>
  );
}

export default StatsCard;
