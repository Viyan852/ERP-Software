"use client";

import HomeworkCard from "@/components/glass/homework-card";
import CircularsCard from "@/components/glass/circulars-card";
import PendingCard from "@/components/glass/pending-card";
import CompletedCard from "@/components/glass/completed-card";
import AttachmentsCard from "@/components/glass/attachments-card";
import RecentUploadsCard from "@/components/glass/recent-uploads-card";

import Charts from "@/components/charts";
import TimestampRecovery from "@/components/timestamps";

export default function DashboardPage() {
  return (
    <main className="container">
      <h1>ERP GlassOS</h1>

      <div className="cards">
        <HomeworkCard />
        <CircularsCard />
        <PendingCard />
        <CompletedCard />
        <AttachmentsCard />
        <RecentUploadsCard />
      </div>

      <Charts />

      <TimestampRecovery />
    </main>
  );
}