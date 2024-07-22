import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Queen's Women in Computing",
  description: "QWIC Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
