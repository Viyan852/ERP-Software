/* Homework KPI Card */
import { Sparkline } from "recharts";

export interface HomeworkCardProps {
  title: string;
  number: string;
  change: string;
  changeType: "up" | "down";
  trendData: { name: string; score: number }[];
}

export function HomeworkCard({
  title = "Homework",
  number = "23",
  change = "+12%",
  changeType = "up",
  trendData = [],
}: HomeworkCardProps) {
  return (
    <div className="glass-card glass-card-light p-6 rounded-xl animate-fade-in-up">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider">
          {title}
        </h3>
        <span className="text-xs font-semibold bg-[var(--accent-blue)]/20 text-[var(--accent-blue)] rounded px-2 py-0.5">
          {changeType === "up" ? "▲" : "▼"} {change}
        </span>
      </div>

      <div className="space-y-3">
        {/* Animated Number Counter */}
        <div className="text-3xl font-bold text-[var(--text)]">
          {number}
        </div>

        {/* Trend Sparkline */}
        {trendData.length > 0 && (
          <Sparkline
            data={trendData}
            type="line"
            stroke={["var(--accent-blue)"]
            }
            activeDot={{
              r: 4,
              fill: "var(--accent-blue)",
            }}
            dot={false}
            margin={{ top: 8 }}
            style={{ strokeWidth: 2 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke={["var(--muted)]" }} 
            />
            <YAxis dataKey="score" domain={["0", "100"]} />
            <Tooltip />
            <LabelList dataKey="name" />
          </Sparkline>
        )}

        {/* Quick Actions */}
        <div className="flex gap-2 pt-3">
          <button className="flex-1 py-2 px-3 text-sm rounded hover:bg-[var(--glassAccent)] transition-colors">
            Search
          </button>
          <button className="flex-1 py-2 px-3 text-sm rounded hover:bg-[var(--glassAccent)] transition-colors">
            Filters
          </button>
        </div>
      </div>
    </div>
  );
}