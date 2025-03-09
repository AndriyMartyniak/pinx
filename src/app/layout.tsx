import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pinx | Acupressure Mat - Pain Relief & Relaxation",
  description:
    "Relieve back pain and stress with our acupressure mat. Natural therapy at home.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Header />
        {children}
        <footer className="bg-gray-800 text-white py-6 text-center">
          <p>&copy; 2025 Pinx - Acupressure Wellness. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
