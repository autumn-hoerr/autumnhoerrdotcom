import { Fleur_De_Leah, Inter } from "next/font/google";
import "./globals.css";

const fleurDL = Fleur_De_Leah({
  weight: '400',
  variable: "--font-fleur",
  subsets: ["latin"],
});

const inter = Inter({
  weight: '400',
  variable: "--font-inter",
  subsets: ["latin"]
})

export const metadata = {
  title: "Autumn Hoerr",
  description: "I do stuff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fleurDL.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
