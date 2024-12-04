
import "./globals.css";
import Image from "next/image";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Abril_Fatface } from 'next/font/google';
import Link from "next/link";
import ButtonSign from "./components/ButtonSign";

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
        <ClerkProvider>

          <div className=" justify-between  p-5 m-auto flex  place-items-center gap-3">
            <Link className="flex place-items-center gap-3" href='/'>
              <Image src='/logo.svg' width={100} alt="logo" height={100}></Image>
              <h4 style={{
                backgroundImage: "url('https://myshoproject.vercel.app/logo.svg')",
                backgroundSize: "cover", // Ensures the image covers the text
                backgroundPosition: "80% 25%",
                backgroundSize: "200%",// Custom position
              }} className=" bg-cover text-black/5 bg-clip-text bg-center font-Abrial text-6xl">My Blog</h4>
            </Link>
            <ButtonSign></ButtonSign>
          </div>


          <div

            style={{
              backgroundImage: "url('https://myshoproject.vercel.app/logo.svg')",
              backgroundSize: "cover", // Ensures the image covers the text
              backgroundPosition: "80% 25%",
              backgroundSize: "200%",// Custom position
            }} className=" bg-cover rounded-2xl  bg-center m-6 p-1" >

            {children}
          </div>
        </ClerkProvider>
      </body>
    </html >
  );
}
