"use client";

import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";

export default function AddProductDialog() {
  const [open, setOpen] = useState(false);

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
          {/* Animated wrapper inside DialogContent */}
          <div dir="rtl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="rounded-3xl bg-background p-8 shadow-lg flex flex-col items-center justify-around"
            >
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  افزودن محصول جدید
                </DialogTitle>
                <DialogDescription>
                  لطفا اطلاعات محصول را وارد کنید{" "}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 space-y-4">
                <Input placeholder="نام محصول" />
                <Input type="number" placeholder="قیمت (تومان)" />
                <Textarea placeholder="توضیحات محصول" />
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <Button variant="outline" onClick={() => setOpen(false)}>
                  انصراف
                </Button>
                <Button
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  ذخیره محصول{" "}
                </Button>
              </div>
            </motion.div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
