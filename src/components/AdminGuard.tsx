"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAuthStore } from "@/store/useAuthStore";

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { user, role, loading, initialized } = useAuthStore();

  useEffect(() => {
    if (!initialized) return;

    if (!user) {
      router.replace("/");
      toast.error(".شما دسترسی ادمین ندارید");
      return;
    }

    if (role !== "admin") {
      router.replace("/");
      toast.error(".شما دسترسی ادمین ندارید");
    }
  }, [initialized, user, role, router]);

  if (!initialized || loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>در حال بررسی دسترسی...</p>
      </div>
    );
  }

  if (user && role === "admin") {
    return <>{children}</>;
  }

  return null;
}
