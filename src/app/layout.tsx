import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import AuthInitializer from "@/components/Authinitializer";

const vazir = Vazirmatn({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "لوکس شاپ - فروشگاه مکمل‌های ورزشی",
  description: "بهترین مکمل‌ها برای رشد و سلامت بدن در لوکس شاپ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${vazir.className} antialiased`}>
        <Toaster position="top-center" reverseOrder={false} />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <AuthInitializer />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
