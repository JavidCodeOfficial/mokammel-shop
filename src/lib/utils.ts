import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAdminStatus(): boolean {
  if (typeof window === "undefined") return false;
  return Boolean(localStorage.getItem("isAdmin"));
}
