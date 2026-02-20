"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      dir="rtl"
      className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 py-16 grid gap-10 lg:grid-cols-2 items-center"
        >
          {/* Text */}
          <div className="flex flex-col items-start justify-center">
            <div className="space-y-6">
              <Badge className="w-fit bg-primary/90 text-white">
                فروش ویژه مکمل‌های ورزشی
              </Badge>

              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-white">
                قدرت بدنت رو <br />
                <span className="text-primary">حرفه‌ای بساز</span>
              </h1>

              <p className="text-zinc-300 max-w-md leading-relaxed">
                بهترین برندهای مکمل ورزشی، پروتئین، کراتین و ویتامین‌ها با تضمین
                اصالت
              </p>

              <div className="flex gap-4">
                <Button size="lg" className="rounded-xl" asChild>
                  <Link href="#Products">مشاهده محصولات</Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-white/20 text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="#Footer">مشاوره رایگان</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Image */}

          <div className="relative flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1200&q=80"
              alt="Fitness Supplements"
              width={600}
              height={600}
              className="rounded-4xl object-cover shadow-2xl"
            />

            {/* Glow */}
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-4xl pointer-events-none -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
