import type { Metadata } from "next";
import "./globals.css";
import Nav from "./(ui)/Nav";
import Footer from '@/app/(ui)/Footer'



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
