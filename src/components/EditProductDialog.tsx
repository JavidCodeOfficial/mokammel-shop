"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { SelectComponent } from "./SelectComponent";
import { useProductStore, Product } from "@/store/useProductStore";

interface EditProductDialogProps {
  productId: string;
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function EditProductDialog({
  productId,
  open,
  setOpen,
}: EditProductDialogProps) {
  const { form, setField, editProduct, setForm, loading, products } =
    useProductStore();

  useEffect(() => {
    if (!open) return;
    const product: Product | undefined = products.find(
      (p) => p.id === productId,
    );
    if (product) {
      setForm({
        title: product.title,
        price: product.price,
        rating: product.rating,
        tag: product.tag,
        image: product.image,
        category: product.category,
      });
    }
  }, [open, productId, products, setForm]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogOverlay className="bg-black/30 backdrop-blur-sm fixed inset-0" />

      <DialogContent className="p-0 border-none shadow-none bg-transparent">
        <div dir="rtl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="rounded-3xl bg-background p-8 shadow-lg flex flex-col justify-center items-center"
          >
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                ویرایش محصول
              </DialogTitle>
              <DialogDescription className="mx-auto">
                لطفا تغییرات محصول را وارد کنید
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 space-y-4 w-full">
              <Input
                value={form.title}
                onChange={(e) => setField("title", e.target.value)}
                type="text"
                placeholder="نام محصول"
              />

              <Input
                value={form.price !== 0 ? form.price : ""}
                onChange={(e) => setField("price", Number(e.target.value))}
                type="number"
                placeholder="قیمت (تومان)"
              />

              <Input
                value={form.rating !== 0 ? form.rating : ""}
                onChange={(e) => setField("rating", Number(e.target.value))}
                type="number"
                placeholder="امتیاز"
              />

              <Input
                value={form.tag}
                onChange={(e) => setField("tag", e.target.value)}
                type="text"
                placeholder="برچسب"
              />

              <Input
                value={form.image}
                onChange={(e) => setField("image", e.target.value)}
                type="text"
                placeholder="لینک عکس"
              />

              <SelectComponent
                placeholder="دسته بندی ها"
                options={[
                  { value: "other", label: "سایر" },
                  { value: "protein", label: "پروتئین" },
                  { value: "creatine", label: "کراتین" },
                  { value: "vitamins", label: "مولتی ویتامین" },
                  { value: "acid", label: "آمینو اسید" },
                ]}
                onChange={(value: string) => setField("category", value)}
              />
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button variant="outline" onClick={() => setOpen(false)}>
                انصراف
              </Button>

              <Button onClick={() => editProduct(productId)} disabled={loading}>
                {loading ? "در حال ذخیره..." : "ذخیره تغییرات"}
              </Button>
            </div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
