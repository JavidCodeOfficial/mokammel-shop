"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section dir="rtl" className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 grid gap-10 lg:grid-cols-2 items-center">
        {/* Text */}
        <div className="flex flex-col items-center">
          <div className="space-y-6">
            <div className="absolute inset-16 bg-primary/10 blur-3xl rounded-full" />

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
              <Button size="lg" className="rounded-xl">
                مشاهده محصولات
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl border-white/20 text-white hover:bg-white/10"
              >
                مشاوره رایگان
              </Button>
            </div>
          </div>
        </div>

        {/* Image */}
        <Image
          src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1200&q=80"
          alt="Fitness Supplements"
          width={600}
          height={600}
          className="relative rounded-2xl object-cover shadow-2xl"
        />
      </div>
    </section>
  );
}
