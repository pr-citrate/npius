import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import ServerSessionProvider from "@/providers/ServerSessionProvider";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NPIUS",
  description: "North Pacific International Undersea Station",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar-hide">
      <body className={inter.className}>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          limit={5}
        />
        <ServerSessionProvider>{children}</ServerSessionProvider>
      </body>
    </html>
  );
}
