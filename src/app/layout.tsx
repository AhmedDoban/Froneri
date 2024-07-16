import type { Metadata } from "next";
import AOSProvider from "@/Components/AOS/AOS";
import Header from "@/Components/Header/Header";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "@/Style/Normalize.css";
import "@/Style/Root.css";
import "@/Style/Style.css";
import Footer from "@/Components/Footer/Footer";

export const metadata: Metadata = {
  title: "Froneri",
  description: "Chart your way to success with Froneri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <AOSProvider>
          <Header />
          {children}
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
