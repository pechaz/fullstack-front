import { Metadata } from "next";

import { TasksPage } from "@/components/atomic/pages";

export const metadata: Metadata = {
  title: "Tasks",
  description: "tasks",
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TasksPage />
    </main>
  );
}
