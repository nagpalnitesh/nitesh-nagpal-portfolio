import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nitesh Nagpal",
  description:
    "Showcasing my journey as a full-stack developer, this portfolio highlights my passion for crafting innovative digital solutions that inspire and engage.",
  keywords:
    "software engineer, full stack developer, web3, ai, machine learning, mern stack, mongodb, reactjs, nextjs, postgresql, javascript, typescript, express",
  openGraph: {
    type: "website",
    url: "https://niteshnagpal.com",
    title: "Nitesh Nagpal",
    description:
      "Showcasing my journey as a full-stack developer, this portfolio highlights my passion for crafting innovative digital solutions that inspire and engage.",
    siteName: "Nitesh Nagpal",
    // images: [
    //   {
    //     url: "https://example.com/og.png",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon"
          type="image"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
