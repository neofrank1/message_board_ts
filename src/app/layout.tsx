import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Message Board",
  description: "Testing Message Board",
};
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
