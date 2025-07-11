import type { Metadata } from "next";
import { Nunito} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navigation";

const nunitoSans = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Next-auth-cata",
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
        className={`${nunitoSans.variable}   antialiased`}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
