import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import {Poppins} from 'next/font/google'
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import Navbar from "./_components/navbar";
import Script from "next/script";

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
      <head>

      </head>
      <body>
      <script src="http://localhost:3000/embed.js" data-site-id="cm02gtgkh0001y8pdva2o9txe"></script>
      <script src="https://feedback-form-saas.vercel.app/embed.js" data-site-id="cm17kiuyn0005g6y7r9isxf7h"></script>

        <TRPCReactProvider>
          <Navbar />
          <div className="relative pt-20 ">{children}</div>
          
          </TRPCReactProvider>
      </body>
    </html>
  );
}
