"use client";

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
import { useProductStore } from "@/store/useProductStore";
import { Textarea } from "./ui/textarea";

export default function AddProductDialog() {
  const { open, setOpen, form, setField, addProduct, loading } =
    useProductStore();

  return (
    <>
      {/* Trigger Button */}
      <Button type="button" variant="secondary" onClick={() => setOpen(true)}>
        اضافه کردن
      </Button>

      {/* Dialog */}
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
                  افزودن محصول جدید
                </DialogTitle>
                <DialogDescription className="mx-auto">
                  لطفا اطلاعات محصول را وارد کنید
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 space-y-4">
                <Input
                  value={form.title}
                  onChange={(e) => setField("title", e.target.value)}
                  type="text"
                  placeholder="نام محصول"
                />

                <Input
                  value={form.price != 0 ? form.price : ""}
                  onChange={(e) => setField("price", Number(e.target.value))}
                  type="number"
                  placeholder="قیمت (تومان)"
                />

                <Input
                  value={form.rating != 0 ? form.rating : ""}
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

                <Textarea
                  value={form.desc || ""}
                  onChange={(e) => setField("desc", e.target.value)}
                  placeholder="توضیحات محصول"
                  className="min-h-[120px] resize-none"
                />

                <SelectComponent
                  placeholder="دسته بندی ها"
                  options={[
                    { value: "other", label: "سایر" },
                    { value: "protein", label: "پروتیین وی" },
                    { value: "creatine", label: "کراتین" },
                    { value: "haircare", label: "محصولات پوست و مو" },
                    { value: "acid", label: "انواع آمینو" },
                    { value: "gainer", label: "گینر" },
                    { value: "burner", label: "چربی سوز ها" },
                    { value: "vitamins", label: "مولتی ویتامین" },
                    { value: "preworkout", label: "پمپ" },
                    { value: "coffee", label: "قهوه" },
                  ]}
                  onChange={(value: string) => setField("category", value)}
                />
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <Button variant="outline" onClick={() => setOpen(false)}>
                  انصراف
                </Button>

                <Button onClick={addProduct} disabled={loading}>
                  {loading ? "در حال ذخیره..." : "ذخیره محصول"}
                </Button>
              </div>
            </motion.div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
