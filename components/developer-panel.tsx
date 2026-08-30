/* Developer Panel */
export function DeveloperPanel() {
  return (
    <div className="glass-card glass-card-light p-6 rounded-xl">
      <h3 className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider mb-4">
        Developer Panel
      </h3>

      <div className="space-y-4">
        {/* Detected URLs */}
        <div>
          <h4 className="text-xs font-medium text-[var(--accent-blue)] uppercase tracking-wider mb-2">
            Detected URLs
          </h4>
          <div className="h 64 overflow-y-auto bg-[var(--bg-dark)] rounded p-3">
            <div className="text-xs text-[var(--muted)] px-2 py-1 rounded hover:bg-[var(--glassAccent)]/20 transition-colors">
              https://erp.example.com/api/homework
            </div>
            <div className="text-xs text-[var(--muted)] px-2 py-1 rounded hover:bg-[var(--glassAccent)]/20 transition-colors">
              https://erp.example.com/api/circulars
            </div>
            <div className="text-xs text-[var(--muted)] px-2 py-1 rounded hover:bg-[var(--glassAccent)]/20 transition-colors">
              https://erp.example.com/api/attachments
            </div>
            <div className="text-xs text-[var(--muted)] px-2 py-1 rounded hover:bg-[var(--glassAccent)]/20 transition-colors">
              https://erp.example.com/api/exports
            </div>
          </div>
        </div>

        {/* Raw ERP Data */}
        <div>
          <h4 className="text-xs font-medium text-[var(--accent-purple)] uppercase tracking-wider mb-2">
            Raw ERP Data
          </h4>
          <div className="h 64 overflow-y-auto bg-[var(--bg-dark)] rounded p-3">
            <div className="text-xs text-[var(--muted)] px-2 py-1 rounded code">
              {"homework": [{ "id": "1", "subject": "Math", "status": "pending" }], "timestamp": 1787729246}
            </div>
          </div>
        </div>

        {/* Attachment URLs */}
        <div>
          <h4 className="text-xs font-medium text-[var(--accent-cyan)] uppercase tracking-wider mb-2">
            Attachment URLs
          </h4>
          <div className="h 64 overflow-y-auto bg-[var(--bg-dark)] rounded p-3">
            <div className="text-xs text-[var(--muted)] px-2 py-1 rounded code">
              {"attachments": ["https://storage.example.com/hw1.pdf", "https://storage.example.com/hw2.pdf"]}
            </div>
          </div>
        </div>

        {/* Recovered Timestamps */}
        <div>
          <h4 className="text-xs font-medium text-[var(--accent-cyan)] uppercase tracking-wider mb-2">
            Recovered Timestamps
          </h4>
          <div className="grid grid-cols-2 gap-3 pt-3">
            <div>
              <p className="text-sm font-medium">Filename:</p>
              <p className="text-lg font-mono text-[var(--accent-cyan)] mt-1">class 7 HW.1787729246.pdf</p>
            </div>
            <div>
              <p className="text-sm font-medium">Epoch:</p>
              <p className="text-lg font-bold text-[var(--accent-blue)] mt-1">1787729246</p>
            </div>
          </div>
          <div className="pt-3 mt-3 border-t border-[var(--border)]">
            <p className="text-xs text-[var(--muted)]">Display:</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span>26 Aug 2026</span>
              <span>12:27:26 AM</span>
            </div>
          </div>
        </div>

        {/* Parsing Logs */}
        <div>
          <h4 className="text-xs font-medium text-[var(--muted)] uppercase tracking-wider mb-2">
            Parsing Logs
          </h4>
          <div className="h 64 overflow-y-auto bg-[var(--bg-dark)] rounded p-3">
            <div className="flex items-center gap-2 px-2 py-1 rounded code text-xs">
              <span className="text-[var(--accent-cyan)]">[12:27:20]</span>
              <span>Reading Homework Module...</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 rounded code text-xs">
              <span className="text-[var(--accent-blue)]">[12:27:21]</span>
              <span>Found 23 Attachments</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 rounded code text-xs">
              <span className="text-[var(--accent-cyan)]">[12:27:21]</span>
              <span>Recovered 14 Timestamps</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 rounded code text-xs">
              <span className="text-[var(--accent-cyan)]">[12:27:22]</span>
              <span>Loaded Circulars</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 rounded code text-xs">
              <span className="text-[var(--accent-blue)]">[12:27:22]</span>
              <span>Analysis Complete</span>
            </div>
          </div>
        </div>

        {/* Network Logs */}
        <div>
          <h4 className="text-xs font-medium text-[var(--muted)] uppercase tracking-wider mb-2">
            Network Logs
          </h4>
          <div className="h 64 overflow-y-auto bg-[var(--bg-dark)] rounded p-3">
            <div className="text-xs text-[var(--muted)] px-2 py-1 rounded code">
              GET /api/homework 200 12ms
            </div>
            <div className="text-xs text-[var(--muted)] px-2 py-1 rounded code">
              GET /api/circulars 200 8ms
            </div>
            <div className="text-xs text-[var(--muted)] px-2 py-1 rounded code">
              POST /api/exports 201 15ms
            </div>
          </div>
        </div>

        {/* System Health */}
        <div>
          <h4 className="text-xs font-medium text-[var(--muted)] uppercase tracking-wider mb-2">
            System Health
          </h4>
          <div className="grid grid-cols-3 gap-3 pt-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg">
              <span className="w 8 h 8 rounded-full bg-green-500/20"></span>
              <span>API: Online</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg">
              <span className="w 8 h 8 rounded-full bg-yellow-500/20"></span>
              <span>Cache: Warm</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg">
              <span className="w 8 h 8 rounded-full bg-blue-500/20"></span>
              <span>Memory: 45%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}