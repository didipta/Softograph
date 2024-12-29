import { Geist, Geist_Mono } from "next/font/google";
import "./root-variable.css";
import "./globals.css";
import "./table-responsive.css";
import "./mobile-responsive.css";
import Main from "@/components/Layout/Main";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Main>{children}</Main>

        {/* Scripts */}
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.min.js"
          strategy="beforeInteractive"
        />
        <Script src="./script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
