import Header from "@/components/navbar/header";
import "./globals.css";
import { Montserrat } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/home/footer";
import ThemeSwitch from "@/components/home/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import ProfileHeader from "@/components/profile-header/profile-header";

const mont = Montserrat({ subsets: ["latin"] });
export const metadata = {
  title: "BRIGHT",
  description: "Fast web development",
  image: "https://example.com/image.jpg",
  url: "https://example.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EHK6K1XR52"
        ></Script>
        <Script id="google-anal">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-EHK6K1XR52');`}
        </Script>
      </head>
      <body
        className={`${mont.className} bg-white text-gray-950 relative  dark:bg-black dark:text-white dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <ProfileHeader />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
