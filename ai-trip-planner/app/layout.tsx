import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import Header from "./_components/Header";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "AI Trip Planner",
  description: "Plan your perfect trip with AI",
};

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={outfit.className}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}