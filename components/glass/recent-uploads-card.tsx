/* Recent Uploads KPI Card */
export function RecentUploadsCard({
  title = "Recent Uploads",
  number = "23",
  change = "+14 recovered",
  changeType = "up",
}: {
  title?: string;
  number?: string;
  change?: string;
  changeType?: "up" | "down";
}) {
  return (
    <div className="glass-card glass-card-light p-6 rounded-xl animate-fade-in-up" style="animation-delay: 0.5s">
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

        {/* Recent uploads list */}
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {Array.from({ length: 5 }, (_, i) => ({
            name: `Homework ${i + 1}.pdf`,
            size: Math.floor(Math.random() * 5000) + 1000,
            uploader: `Teacher ${String.fromCharCode(65 + i)}`,
            date: new Date(Date.now() - i * 3600000).toLocaleDateString(),
          })).map((file, idx) => (
            <div key={idx} className="flex items-center gap-3 px-2 py-1 rounded hover:bg-[var(--glassAccent)]/20 transition-colors">
              <div className="w 6 h 6 rounded-full bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-cyan)]"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{file.name}</p>
                <p className="text-xs text-[var(--muted)]">{file.uploader} • {file.date}</p>
              </div>
              <div className="text-xs text-[var(--accent-cyan)]">{file.size}KB</div>
            </div>
          )))}
        </div>

        <div className="flex gap-2 pt-3">
          <button className="flex-1 py-2 px-3 text-sm rounded hover:bg-[var(--glassAccent)] transition-colors">
            Upload New
          </button>
        </div>
      </div>
    </div>
  );
}