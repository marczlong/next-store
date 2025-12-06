import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing"; 
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  APP_NAME,
  APP_DESCRIPTION,
  APP_VERSION,
  APP_BASE_URL,
} from "@/lib/constants";
// import { ThemeProvider } from "next-themes";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | Veter`,
    default: APP_NAME,
  },

  description: `${APP_DESCRIPTION} - ${APP_VERSION}`,
  metadataBase: new URL(APP_BASE_URL),
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} antialiased h-full`}>
        <NextIntlClientProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>          
        </NextIntlClientProvider>

      </body>
    </html>
  );
}
