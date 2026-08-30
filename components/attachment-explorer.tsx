/* Attachment Explorer - Bonus Feature */
export function AttachmentExplorer() {
  const attachments = [
    { id: 1, name: "homework_001.pdf", size: 2456, type: "PDF", uploader: "Mr. Smith", date: "25 Aug 2026" },
    { id: 2, name: "homework_002.pdf", size: 1892, type: "PDF", uploader: "Ms. Johnson", date: "24 Aug 2026" },
    { id: 3, name: "project_presentation.pptx", size: 3210, type: "PowerPoint", uploader: "Mr. Smith", date: "23 Aug 2026" },
    { id: 4, name: "essay_reference.docx", size: 1560, type: "Word", uploader: "Ms. Johnson", date: "22 Aug 2026" },
    { id: 5, name: "data_analysis.xlsx", size: 4890, type: "Excel", uploader: "Mr. Smith", date: "21 Aug 2026" },
  ];

  return (
    <div className="glass-card glass-card-light p-6 rounded-xl">
      <h3 className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider mb-4">
        Attachment Explorer
      </h3>

      <div className="space-y-4">
        {/* Filter options */}
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <button className="flex-1 py-2 px-3 text-sm rounded bg-[var(--bg-dark)] transition-colors">
            All Files
          </button>
          <button className="flex-1 py-2 px-3 text-sm rounded bg-[var(--bg-dark)] transition-colors">
            PDF Only
          </button>
          <button className="flex-1 py-2 px-3 text-sm rounded bg-[var(--bg-dark)] transition-colors">
            Recent First
          </button>
        </div>

        {/* Attachment list */}
        <div className="grid grid-cols-2 gap-4">
          {attachments.map((att) => (
            <div key={att.id} className="glass-card p-4 rounded-lg hover:bg-[var(--glassAccent)]/30 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w 10 h 10 rounded-lg bg-[var(--bg-dark)] flex items-center justify-center text-xs font-bold text-white">
                  {att.name.split(".")[0].substring(0, 3).toUpperCase()}
                </div>
                <div className="flex-1">
                  <p className="font-medium truncate">{att.name}</p>
                  <p className="text-xs text-[var(--muted)]">{att.type} • {att.uploader}</p>
                </div>
                <span className="text-xs text-[var(--accent-cyan)]">{att.size}KB</span>
              </div>

              <div className="flex justify-between text-xs">
                <span>{att.date}</span>
                <div className="flex items-center gap-1">
                  <button className="text-[var(--accent-cyan)] hover:underline">Download</button>
                  <button className="text-[var(--muted)]">View</button>
                </div>
              </div>
            </div>
          )))}
        </div>

        {/* Action buttons */}
        <div className="pt-4 border-t border-[var(--border)] flex gap-3">
          <button className="flex-1 py-2 rounded bg-[var(--accent-blue)] text-white font-medium">Select All</button>
          <button className="flex-1 py-2 rounded bg-transparent border border-[var(--border)] text-white font-medium">Export Selected</button>
        </div>
      </div>
    </div>
  );
}