import localFont from "next/font/local";
import "./globals.css";

import { Abril_Fatface } from 'next/font/google';

const abrilFatface = Abril_Fatface({
    weight: '400', // Adjust weight based on Google Fonts availability
    subsets: ['latin'], // Add subsets if needed
});

export const metadata = {
  title: "My Blog",
  description: "Created By Kerlos Dev with Next JS & Tailwind & Hygraph ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
