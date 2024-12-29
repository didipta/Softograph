import { Geist, Geist_Mono } from "next/font/google";
import "./root-variable.css";
import "./globals.css";
import "./table-responsive.css";
import "./mobile-responsive.css";
import Main from "@/components/Layout/Main";
import Head from "next/head";
import Link from "next/link";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Main>{children}</Main>

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="./shift.js"></script>
      </body>
    </html>
  );
}
