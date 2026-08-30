/* Homework Timeline - Bonus Feature */
export function HomeworkTimeline() {
  return (
    <div className="glass-card glass-card-light p-6 rounded-xl">
      <h3 className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider mb-4">
        Homework Timeline
      </h3>

      <div className="space-y-3">
        {/* Timeline entries */}
        {Array.from({ length: 8 }, (_, i) => ({
          id: i + 1,
          title: `Homework Assignment ${i + 1}`,
          subject: i % 3 === 0 ? "Math" : i % 3 === 1 ? "English" : "Science",
          status: i < 5 ? "Pending" : "Completed",
          dueDate: new Date(Date.now() - i * 86400000).toLocaleDateString(),
          teacher: `Teacher ${String.fromCharCode(65 + i)}`,
        })).map((hw) => (
          <div key={hw.id} className="flex items-start gap-3 px-2 py-3 rounded hover:bg-[var(--glassAccent)]/20 transition-colors">
            <div className="w 10 h 10 rounded-full bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] flex items-center justify-center text-xs font-bold text-white">
              {hw.id}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{hw.title}</p>
              <p className="text-xs text-[var(--muted)]">
                {hw.subject} • {hw.teacher} • Due {hw.dueDate}
              </p>
            </div>
            <span className="text-xs px-2 py-1 rounded {hw.status === "Completed" ? "bg-green-100/20 text-green-400" : "bg-[var(--accent-cyan)]/20 text-[var(--accent-cyan)]"}">
              {hw.status}
            </span>
          </div>
        )))}
      </div>
    </div>
  );
}