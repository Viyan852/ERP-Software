/* Export Module */
export function ExportModule() {
  return (
    <div className="glass-card glass-card-light p-6 rounded-xl">
      <h3 className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider mb-4">
        Export Selected Records
      </h3>

      <div className="space-y-4">
        {/* Export Format Options */}
        <div>
          <label className="block text-sm font-medium text-[var(--muted)] mb-2">
            Export Format
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button className="glass-card p-3 rounded-lg text-left select-format">
              <div className="text-sm font-medium">CSV</div>
              <div className="text-xs text-[var(--muted)]">Comma Separated Values</div>
            </button>
            <button className="glass-card p-3 rounded-lg text-left select-format">
              <div className="text-sm font-medium">Excel</div>
              <div className="text-xs text-[var(--muted)]">Spreadsheet Format</div>
            </button>
            <button className="glass-card p-3 rounded-lg text-left select-format">
              <div className="text-sm font-medium">JSON</div>
              <div className="text-xs text-[var(--muted)]">JavaScript Object Notation</div>
            </button>
            <button className="glass-card p-3 rounded-lg text-left select-format">
              <div className="text-sm font-medium">PDF</div>
              <div className="text-xs text-[var(--muted)]">Portable Document Format</div>
            </button>
          </div>
        </div>

        {/* Export button */}
        <div>
          <button
            className="w-full py-3 rounded-xl bg-[var(--accent-blue)] text-white font-medium text-lg transition-all hover:shadow-glow-glow:hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
          >
            Export Selected Records
          </button>
        </div>

        {/* Export info */}
        <div className="pt-3 border-t border-[var(--border)] text-xs text-[var(--muted)]">
          <p>Export will include selected rows with all columns</p>
          <p className="mt-1">Format preserves data integrity and styling</p>
        </div>
      </div>
    </div>
  );
}