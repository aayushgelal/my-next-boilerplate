import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import {Poppins} from 'next/font/google'
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import Navbar from "./_components/navbar";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const poppins= Poppins({weight:['400','600'],subsets:['latin']})
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body>
        
        <TRPCReactProvider>
          <Navbar />
          <div className="relative pt-20 ">{children}</div>
          
          </TRPCReactProvider>
      </body>
    </html>
  );
}
