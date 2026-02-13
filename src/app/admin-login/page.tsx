"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useAuthStore } from "@/store/useAuthStore";
import toast from "react-hot-toast";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const { login, role, loading, error } = useAuthStore();

  const handleLogin = async () => {
    await login(email, password);

    const currentRole = useAuthStore.getState().role;

    if (currentRole === "admin") {
      router.push("/admin");
    } else {
      toast.error(".شما دسترسی ادمین ندارید");
      console.log(role);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      dir="rtl"
      className="min-h-[80vh] flex items-center justify-center"
    >
      <div className="w-80 space-y-4">
        <h1 className="text-xl font-bold">ورود مدیر</h1>

        {error && <p className="text-red-500">{error}</p>}

        <Input
          type="email"
          className="border w-full p-2"
          placeholder="ایمیل"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          className="border w-full p-2"
          placeholder="رمز عبور"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          type="button"
          onClick={handleLogin}
          className="w-full p-2"
          disabled={loading}
        >
          {loading ? "در حال ورود..." : "ورود"}
        </Button>
      </div>
    </motion.div>
  );
}
