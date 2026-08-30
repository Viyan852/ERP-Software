/* Weekly Calendar Chart */
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Cell, LabelList } from "recharts";

interface WeeklyCalendarProps {
  data: Array<{ date: string; homework: number; circulars: number; uploads: number }>;
}

export function CalendarWeekly({ data }: WeeklyCalendarProps) {
  return (
    <div className="glass-card glass-card-light p-6 rounded-xl">
      <h3 className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider mb-4">
        Weekly Overview
      </h3>

      <div className="h 64">
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            type="category"
            stroke={["var(--muted)]" }
            fontSize={10}
            dataTruncation
          />
          <YAxis
            domain={["0", "max"]}
            stroke={["var(--muted)]" }
            fontSize={10}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="homework"
            stroke={["var(--accent-blue)"]
            }
            fill="var(--glassAccent)"
            activeDot={{ r: 4, fill: "var(--accent-blue)" }}
            dot={false}
          />
          <Area
            type="monotone"
            dataKey="circulars"
            stroke={["var(--accent-purple)"]
            }
            fill="rgba(167, 139, 250, 0.15)"
            activeDot={{ r: 4, fill: "var(--accent-purple)" }}
            dot={false}
          />
          <Area
            type="monotone"
            dataKey="uploads"
            stroke={["var(--accent-cyan)"]
            }
            fill="rgba(95, 200, 170, 0.15)"
            activeDot={{ r: 4, fill: "var(--accent-cyan)" }}
            dot={false}
          />
          <LabelList dataKey="homework" fontSize={8} fill="var(--accent-blue)" />
        </AreaChart>
      </div>
    </div>
  );
}

/* Monthly Statistics Chart */
interface MonthlyStatsProps {
  data: Array<{ month: string; submissions: number; attachments: number }>;
}

export function MonthlyStatistics({ data }: MonthlyStatsProps) {
  return (
    <div className="glass-card glass-card-light p-6 rounded-xl">
      <h3 className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider mb-4">
        Monthly Statistics
      </h3>

      <div className="h 64">
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            type="category"
            stroke={["var(--muted)]" }
            fontSize={10}
            dataTruncation
          />
          <YAxis
            domain={[0, "max"]}
            stroke={["var(--muted)]" }
            fontSize={10}
          />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="submissions"
            stroke={["var(--accent-blue)"]
            }
            fill="var(--glassAccent)"
            activeDot={{ r: 4, fill: "var(--accent-blue)" }}
            dot={false}
          />
          <Area
            type="monotone"
            dataKey="attachments"
            stroke={["var(--accent-cyan)"]
            }
            fill="rgba(95, 200, 170, 0.15)"
            activeDot={{ r: 4, fill: "var(--accent-cyan)" }}
            dot={false}
          />
        </AreaChart>
      </div>
    </div>
  );
}