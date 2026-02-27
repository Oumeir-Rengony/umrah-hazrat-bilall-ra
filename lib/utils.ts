import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function sleep(waitTimeInMs: number){
  return new Promise(resolve => setTimeout(resolve, waitTimeInMs))
}


export function isValidUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function extractIframeSrc(html: string): string | null {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const iframe = doc.querySelector("iframe");
  return iframe?.getAttribute("src") ?? null;
}
