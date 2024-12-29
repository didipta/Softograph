import { Geist, Geist_Mono } from "next/font/google";
import "./root-variable.css";
import "./globals.css";
import "./table-responsive.css";
import "./mobile-responsive.css";
import Main from "@/components/Layout/Main";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Main>{children}</Main>

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.min.js"></script>
        <Script src="./script.js"></Script>
      </body>
    </html>
  );
}
