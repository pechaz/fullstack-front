import { Metadata } from "next";

import { TaskForm } from "@/components/atomic/molecules";

export const metadata: Metadata = {
  title: "Create Task",
  description: "create task",
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TaskForm />
    </main>
  );
}
