import type { GetServerSidePropsContext, Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import FooterMobil from "./components/FooterMobil";
import FooterDesktop from "./components/FooterDesktop";
import { fetchTextsByLanguage } from "./lib/data";
import cookie from 'cookie';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Parse cookies
  const cookies = cookie.parse(context.req.headers.cookie || '');

  // Get language from cookies
  const language = cookies.language || 'EN';
  console.log(language + "FJSGHJPREJGPREOJGPOREJGOP");

  // Pass language to the page component as props
  return { props: { language } };
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


  const navbar = await fetchTextsByLanguage('navbar', language);
  //const footer = await fetchTextsByLanguage('footer',language);

  return (
    <html lang={language}>
      <body className={inter.className}>

        <Navbar tranlastions={navbar} />

        {children}
        <div className="hidden relative py-6 sm:flex flex-col justify-center">
          <FooterDesktop language={language} />
        </div>
        <div className="sm:hidden relative flex flex-row my-4">
          <FooterMobil language={language} />

        </div>
      </body>
    </html>
  );
}
