/* Login Page - ERP GlassOS */
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleLogin = () => {
    // Read-only session - no credential storage
    if (!email || !password) {
      setError("Please enter your credentials");
      return;
    }

    // Session-only authentication - no database storage
    setSuccess(true);
    setError(null);

    // Simulate session creation (current tab only)
    setTimeout(() => {
      // In a real app, this would set up auth session
      console.log("Session created - current tab only");
    }, 500);
  };

  if (success) {
    return <DashboardPage />;
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center p-6">
      <div className="glass-card glass-card-light p-8 rounded-2xl w-full max-w-md animate-fade-in-up">
        <div className="text-center mb-8">
          <div className="w 40 h 40 rounded-full bg-[var(--glassAccent)] mx-auto mb-4 flex items-center justify-center">
            <svg className="w 20 h 20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path className="stroke-2" d="M17 21v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6l2 3h9a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[var(--text)]">Welcome to ERP GlassOS</h2>
          <p className="text-[var(--muted)] mt-2">Premium ERP analytics platform</p>
        </div>

        {error && (
          <div className="bg-red-100/20 border-l-4 border-red-500 rounded px-4 py-3 mb-4">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--muted)] mb-2">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              autoComplete="email"
              className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-dark)] text-[var(--text)] placeholder-[enter-email] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-[var(--accent-blue)]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--muted)] mb-2">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              autoComplete="current-password"
              className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-dark)] text-[var(--text)] placeholder-[enter-password] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-[var(--accent-blue)]"
              required
            />
          </div>

          <button
            type="submit"
            onClick={handleLogin}
            className="w-full py-3 rounded-xl bg-[var(--accent-blue)] text-white font-medium text-lg transition-all hover:opacity-90 active:opacity-80"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-[var(--muted)] mt-4">
            {/* No password storage, no database storage */}
            <span>Session only • Current tab</span>
          </p>
        </form>
      </div>
    </div>
  );
}

/* Dashboard Page shown after login */
function DashboardPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] flex flex-col overflow-x-hidden">
      <header className="border-b border-[var(--border)] backdrop-blur-sm bg-[rgba(255,255,255,0.02)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">ERP GlassOS</h1>
          <div className="flex items-center gap-4">
            <span className="text-[var(--muted)] text-sm">
              Session active
            </span>
            <button
              onClick={() => {
                // Destroy all session memory
                console.log("Session destroyed - all memory cleared");
                // In real app: clear all auth state
              }}
              className="hidden sm:block px-4 py-2 bg-transparent border border-[var(--border)] rounded hover:bg-[var(--glassAccent)] transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          <HomeworkCard />
          <CircularsCard />
          <PendingCard />
          <CompletedCard />
          <AttachmentsCard />
          <RecentUploadsCard />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <CalendarWeekly />
          <TimestampRecovery />
        </div>
      </div>
    </main>
  );
}