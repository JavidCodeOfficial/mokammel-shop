"use client";

import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/constants";
import { getAdminStatus } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

function AuthorizationPage() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsAdmin(getAdminStatus());
    }, 0);

    return () => clearTimeout(id);
  }, []);

  const handleLogout = () => {
    if (typeof window !== "undefined") localStorage.removeItem("isAdmin");
    setIsAdmin(false);
    router.replace("/");
  };

  return (
    <>
      {isAdmin ? (
        <div dir="rtl" className="container mx-auto px-4 py-10">
          <div className="flex gap-6 flex-row items-center justify-between mb-10">
            <Button type="button" variant={"secondary"}>
              اضافه کردن
            </Button>
            <Button
              type="button"
              variant={"destructive"}
              onClick={handleLogout}
            >
              خروج از حساب
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                key={product.id}
              >
                <ProductCard
                  key={product.id}
                  product={product}
                  isAdminPanel={isAdmin}
                />
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1>loading...</h1>
        </div>
      )}
    </>
  );
}

export default AuthorizationPage;
