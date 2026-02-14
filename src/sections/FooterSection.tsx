import { Instagram, Phone } from "lucide-react";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer
      id="Footer"
      dir="rtl"
      className="bg-background border-t border-border/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="container flex flex-col gap-8 md:flex-row items-center md:justify-between">
          {/* Brand */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg font-bold">Lux Shop</h3>
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
              <span dir="ltr">0904 434 6650</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Lux Shop
          </p>
        </div>
      </div>
    </footer>
  );
}
