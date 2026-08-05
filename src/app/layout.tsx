import type { Metadata } from 'next';
import { Cinzel as CinzelFont, Playfair_Display as PlayfairFont, Plus_Jakarta_Sans as JakartaFont, Great_Vibes as ScriptFont } from 'next/font/google';
import './globals.css';

const cinzel = CinzelFont({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const playfair = PlayfairFont({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = JakartaFont({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const script = ScriptFont({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bespoke & Co. Luxury Events | Premium Event Planning & Management',
  description: 'Bespoke event planning, design & management for Weddings, Private Parties, Grand Celebrations, Hotel & Corporate Events and Social Soirées in Dubai & worldwide.',
  keywords: 'luxury event planning, luxury weddings Dubai, corporate event planner, Bespoke and Co luxury events',
  openGraph: {
    title: 'Bespoke & Co. Luxury Events',
    description: 'From vision to celebration – every detail perfected.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${playfair.variable} ${jakarta.variable} ${script.variable}`}>
      <body className="bg-[#08080A] text-[#FDFBF7] antialiased selection:bg-gold-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
