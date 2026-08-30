/* Circulars KPI Card */
export function CircularsCard({
  title = "Circulars",
  number = "8",
  change = "+2 this month",
  changeType = "up",
  trendData = [],
}: {
  title?: string;
  number?: string;
  change?: string;
  changeType?: "up" | "down";
  trendData?: Array<{ name: string; score: number }>;
}) {
  return (
    <div className="glass-card glass-card-light p-6 rounded-xl animate-fade-in-up" style="animation-delay: 0.1s">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider">
          {title}
        </h3>
        <span className="text-xs font-semibold bg-[var(--accent-purple)]/20 text-[var(--accent-purple)] rounded px-2 py-0.5">
          {changeType === "up" ? "▲" : "▼"} {change}
        </span>
      </div>

      <div className="space-y-3">
        <div className="text-3xl font-bold text-[var(--text)]">
          {number}
        </div>

        {/* Circular-specific stats */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <span className="flex items-center gap-1">
            <span className="text-[var(--accent-purple)]">📄</span>
            5 New
          </span>
          <span className="flex items-center gap-1">
            <span className="text-[var(--accent-cyan)]">📎</span>
            12 Attached
          </span>
        </div>

        <div className="flex gap-2 pt-3">
          <button className="flex-1 py-2 px-3 text-sm rounded hover:bg-[var(--glassAccent)] transition-colors">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}