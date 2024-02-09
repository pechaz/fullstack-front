import { Metadata } from "next";

import { LoginPage } from "@/components/atomic/pages";

export const metadata: Metadata = {
  title: "Login",
  description: "login",
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginPage />
    </main>
  );
}
