"use client";

import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/constants";
import { getAdminStatus } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isAdminPanel={isAdmin}
              />
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
