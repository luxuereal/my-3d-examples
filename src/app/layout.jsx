import { Poiret_One, Timmana } from "next/font/google";
import { Menu } from "@/components/layouts/menu";
import "./globals.css";

const timmana = Timmana({ subsets: ["latin"], display: 'swap', weight: '400' });

export const metadata = {
  title: "3D Examples",
  description: "Three.js & React-three-fiber",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={timmana.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
