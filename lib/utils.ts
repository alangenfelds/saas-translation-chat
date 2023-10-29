import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(fullName?: string | null) {
  if (fullName) {
    return fullName
      .split(" ")
      .map((item) => item[0])
      .join("");
  } else {
    return "";
  }
}
