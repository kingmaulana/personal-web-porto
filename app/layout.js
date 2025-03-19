import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import SplashCursor from "./effects/SplashCurrsor";

const Outfits = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"],
});

const Ovos = Ovo({
  subsets: ["latin"], weight: ["400"],
});

export const metadata = {
  title: "Portfolio - Akbar Maulana",
  description: "My personal potfolio - Akbar Maulana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${Outfits.className} ${Ovos.className} antialiased leading-8 overflow-x-hidden dark:bg-black dark:text-white`}
      >
        <SplashCursor />
        {children}
      </body>
    </html>
  );
}
