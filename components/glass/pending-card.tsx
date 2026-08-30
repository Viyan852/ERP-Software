/* Pending KPI Card */
export function PendingCard({
  title = "Pending",
  number = "15",
  change = "-3 resolved",
  changeType = "down",
}: {
  title?: string;
  number?: string;
  change?: string;
  changeType?: "up" | "down";
}) {
  return (
    <div className="glass-card glass-card-light p-6 rounded-xl animate-fade-in-up" style="animation-delay: 0.2s">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider">
          {title}
        </h3>
        <span className="text-xs font-semibold bg-[var(--accent-cyan)]/20 text-[var(--accent-cyan)] rounded px-2 py-0.5">
          {changeType === "up" ? "▲" : "▼"} {change}
        </span>
      </div>

      <div className="space-y-3">
        <div className="text-3xl font-bold text-[var(--text)]">
          {number}
        </div>

        <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
          <span className="w 2 h 2 rounded-full bg-red-500/30"></span>
          In progress
        </div>

        <div className="flex gap-2 pt-3">
          <button className="flex-1 py-2 px-3 text-sm rounded hover:bg-[var(--glassAccent)] transition-colors">
            Take Action
          </button>
        </div>
      </div>
    </div>
  );
}