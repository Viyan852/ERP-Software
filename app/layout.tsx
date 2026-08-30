/* App Layout - ERP GlassOS */
import "./styles/globals.css";
import { Inter } from "next/font";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ERP GlassOS - Next-Generation ERP Analytics",
  description: "Premium ERP analytics platform with Apple Liquid Glass aesthetic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}