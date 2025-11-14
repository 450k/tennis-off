import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// 日付の表示を調整するスクリプト
import dayjs from "dayjs"; 
import timezone from "dayjs/plugin/timezone"; 
import utc from "dayjs/plugin/utc";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 日付の設定
dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: string) => {
  const formattedDate = dayjs.utc(date).tz("Asia/Tokyo").format("YYYY/MM/DD");
  return formattedDate;
};