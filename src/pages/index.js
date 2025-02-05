
import { Geist, Geist_Mono } from "next/font/google";
import Hero from '@/components/hero';
import Item from '@/components/item';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Hero className="pb-24"/>
      <ul className="itemsList">
      <li><Item /></li>
      <li><Item /></li>
      <li><Item /></li>
      </ul>


    </div>
  );
}
