"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const ADMIN_SECRET = "letmein123"; // fake

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = () => {
    if (password === ADMIN_SECRET) {
      localStorage.setItem("isAdmin", "true");
      router.push("/admin");
    } else {
      alert("Wrong password");
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

        <Input
          type="password"
          className="border w-full p-2"
          placeholder="رمز عبور"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="button" onClick={login} className="w-full p-2">
          ورود
        </Button>
      </div>
    </motion.div>
  );
}
