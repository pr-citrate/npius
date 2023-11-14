import "./globals.css";
import { Inter } from "next/font/google";
import ServerSessionProvider from "@/providers/ServerSessionProvider";
import Header from "@/components/common/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NPIUS",
  description: "North Pacific International Undersea Station",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar-hide">
      <body className={inter.className}>
        <ServerSessionProvider>{children}</ServerSessionProvider>
      </body>
    </html>
  );
}
