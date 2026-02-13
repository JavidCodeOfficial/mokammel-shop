"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products } from "@/lib/constants";
import ProductCard from "@/components/ProductCard";
import { motion } from "motion/react";

function ProductsSection() {
  return (
    <section id="Products" className="px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-background text-foreground rounded-lg shadow-lg overflow-hidden">
          <div dir="rtl" className="container mx-auto px-4 py-10">
            {/* Header */}
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h1 className="text-3xl font-bold">فروشگاه مکمل‌های ورزشی</h1>
                <p className="text-muted-foreground mt-1">
                  بهترین مکمل‌ها برای رشد و سلامت بدن
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex gap-3"
              >
                <Input placeholder="جستجوی محصول..." className="w-56" />
                <Select defaultValue="popular">
                  <SelectTrigger className="w-44">
                    <SelectValue placeholder="مرتب‌سازی" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">محبوب‌ترین</SelectItem>
                    <SelectItem value="price-low">ارزان‌ترین</SelectItem>
                    <SelectItem value="price-high">گران‌ترین</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
            </div>

            {/* Products Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  key={product.id}
                >
                  <ProductCard product={product} isAdminPanel={false} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
