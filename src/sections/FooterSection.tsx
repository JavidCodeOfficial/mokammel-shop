import { Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer dir="rtl" className="border-t bg-background">
      <div className="container mx-auto px-4 py-8 flex flex-col gap-8 md:flex-row items-center md:justify-between">
        {/* Brand */}
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg font-bold">Jenova</h3>
          <p className="text-sm text-muted-foreground">مکمل‌های ورزشی اصل</p>
        </div>

        {/* Social & Contact */}
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="https://instagram.com/powersupps"
            target="_blank"
            className="flex items-center gap-2 hover:text-primary transition"
          >
            <Instagram className="w-5 h-5" />
            اینستاگرام
          </Link>

          <span className="flex items-center gap-2 text-muted-foreground">
            <Phone className="w-4 h-4" />
            ۰۹۱۲۱۲۳۴۵۶۷
          </span>

          <span className="flex items-center gap-2 text-muted-foreground">
            <Mail className="w-4 h-4" />
            info@powersupps.ir
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Jenova
        </p>
      </div>
    </footer>
  );
}
