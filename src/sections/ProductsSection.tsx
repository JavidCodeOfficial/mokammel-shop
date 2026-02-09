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

function ProductsSection() {
  return (
    <section className="bg-background text-foreground flex min-h-dvh flex-col items-center justify-items-center">
      <div dir="rtl" className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold">فروشگاه مکمل‌های ورزشی</h1>
            <p className="text-muted-foreground mt-1">
              بهترین مکمل‌ها برای رشد و سلامت بدن
            </p>
          </div>

          <div className="flex gap-3">
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
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isAdminPanel={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
