import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Main from "@/components/Layout/Main";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
