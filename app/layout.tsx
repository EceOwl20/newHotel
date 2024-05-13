import type { GetServerSidePropsContext, Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import FooterMobil from "./components/FooterMobil";
import FooterDesktop from "./components/FooterDesktop";
import { fetchTextsByLanguage } from "./lib/data";
import { cookies, headers  } from 'next/headers'

export async function getServerSideProps(context:GetServerSidePropsContext) {
  // Get the language from the request headers
  const language = context.req.headers['accept-language'];
  context.res.setHeader('Set-Cookie', `language=${language}; Path=/; HttpOnly`);
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miramare Hotel",
  description: "Miramare hotels website, Antalya side",
  keywords:"hotel, vacation, Antalya",
  metadataBase: new URL('http://localhost:3000'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'de': '/de',
      'tr': '/tr',
      'ru':'/ru'
    },
  },
};

export default async function RootLayout({
  children,
  language,
}: Readonly<{
  children: React.ReactNode;
  language: string
}>) {

  const cookieLanguage = cookies();
  const lang = cookieLanguage.get('language');
  const langValue=lang?.value;
  
  console.log("language " + langValue);

  const navbar = await fetchTextsByLanguage('navbar',langValue);
  const footer = await fetchTextsByLanguage('footer',langValue);

  return (
    <html lang={language}>
      <body className={inter.className}>

        <Navbar tranlastions={navbar} />

        {children}
        <div className="hidden relative py-6 sm:flex flex-col justify-center">
          <FooterDesktop translations={footer} />
        </div>
        <div className="sm:hidden relative flex flex-row my-4">
          <FooterMobil translations={footer} />

        </div>
      </body>
    </html>
  );
}
