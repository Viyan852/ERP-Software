/* Total Attachments KPI Card */
export function AttachmentsCard({
  title = "Total Attachments",
  number = "128",
  change = "+24 this month",
  changeType = "up",
}: {
  title?: string;
  number?: string;
  change?: string;
  changeType?: "up" | "down";
}) {
  return (
    <div className="glass-card glass-card-light p-6 rounded-xl animate-fade-in-up" style="animation-delay: 0.4s">
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

        {/* Attachment breakdown */}
        <div className="grid grid-cols-3 gap-3 text-sm">
          <div className="glass-card p-3 rounded-lg">
            <div className="text-2xl font-bold text-[var(--accent-blue)]">24</div>
            <div className="text-xs text-[var(--muted)]">Images</div>
          </div>
          <div className="glass-card p-3 rounded-lg">
            <div className="text-2xl font-bold text-[var(--accent-cyan)]">16</div>
            <div className="text-xs text-[var(--muted)]">PDFs</div>
          </div>
          <div className="glass-card p-3 rounded-lg">
            <div className="text-2xl font-bold text-[var(--accent-purple)]">88</div>
            <div className="text-xs text-[var(--muted)]">Others</div>
          </div>
        </div>

        <div className="flex gap-2 pt-3">
          <button className="flex-1 py-2 px-3 text-sm rounded hover:bg-[var(--glassAccent)] transition-colors">
            Manage Attachments
          </button>
        </div>
      </div>
    </div>
  );
}