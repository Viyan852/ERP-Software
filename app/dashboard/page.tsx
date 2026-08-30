/* Dashboard Page - ERP GlassOS */
import {
  HomeworkCard,
  CircularsCard,
  PendingCard,
  CompletedCard,
  AttachmentsCard,
  RecentUploadsCard,
} from "@//components/glass";
import { CalendarWeekly } from "@/components/charts";
import { TimestampRecovery } from "@/components/timestamps";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[var(--bg)] flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="border-b border-[var(--border)] backdrop-blur-sm bg-[rgba(255,255,255,0.02)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">
            ERP GlassOS
          </h1>
          <div className="flex items-center gap-4">
            <button className="btn-apple text-sm">New Homework</button>
            <button className="hidden sm:block px-4 py-2 bg-transparent border border-[var(--border)] rounded hover:bg-[var(--glassAccent)] transition-colors">
              Settings
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6 flex flex-col gap-6">
        {/* KPI Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          <HomeworkCard />
          <CircularsCard />
          <PendingCard />
          <CompletedCard />
          <AttachmentsCard />
          <RecentUploadsCard />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <CalendarWeekly />
          <TimestampRecovery />
        </div>
      </div>
    </main>
  );
}