import "../styles/globals.css";

export const metadata = {
  title: "ERP GlassOS",
  description: "ERP Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}