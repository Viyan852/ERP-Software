/* Completed KPI Card */
export function CompletedCard({
  title = "Completed",
  number = "34",
  change = "+8 this week",
  changeType = "up",
}: {
  title?: string;
  number?: string;
  change?: string;
  changeType?: "up" | "down";
}) {
  return (
    <div className="glass-card glass-card-light p-6 rounded-xl animate-fade-in-up" style="animation-delay: 0.3s">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider">
          {title}
        </h3>
        <span className="text-xs font-semibold bg-green-600/20 text-green-400 rounded px-2 py-0.5">
          {changeType === "up" ? "▲" : "▼"} {change}
        </span>
      </div>

      <div className="space-y-3">
        <div className="text-3xl font-bold text-[var(--text)]">
          {number}
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <span className="flex items-center gap-1">
            <span className="text-green-400">✓</span>
            On time
          </span>
          <span className="flex items-center gap-1">
            <span className="text-yellow-400">•</span>
            Ahead
          </span>
        </div>

        <div className="flex gap-2 pt-3">
          <button className="flex-1 py-2 px-3 text-sm rounded hover:bg-[var(--glassAccent)] transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}