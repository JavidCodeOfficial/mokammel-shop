"use client";

import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useAuthStore } from "@/store/useAuthStore";
import AddProductDialog from "@/components/AddProductDialog";
import { useProductStore } from "@/store/useProductStore";
import { useEffect } from "react";

function AuthorizationPage() {
  const { logout } = useAuthStore();
  const { fetchProducts, filteredProducts, loading } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const products = filteredProducts();

  return (
    <div dir="rtl" className="container mx-auto px-4 py-10 max-w-7xl">
      <div className="flex gap-6 flex-row items-center justify-between mb-10">
        <AddProductDialog />
        <Button type="button" variant={"destructive"} onClick={logout}>
          خروج از حساب
        </Button>
      </div>
      {loading ? (
        <p className="text-center py-10">در حال بارگذاری...</p>
      ) : products.length === 0 ? (
        <p className="text-center py-10">هیچ محصولی یافت نشد.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                isAdminPanel={true}
              />
            </motion.div>
          ))}
        </div>
      )}{" "}
    </div>
  );
}
export default AuthorizationPage;
