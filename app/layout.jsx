import { DM_Sans, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin', 'greek'], variable: '--font-dm-sans' });
const playfair = Playfair_Display({ subsets: ['latin', 'greek'], variable: '--font-playfair' });

export const metadata = {
  title: 'Ψ-PSY | Ψυχολόγος Γλυφάδα - Ψυχοθεραπεία & Συμβουλευτική',
  description: 'Ψυχοθεραπεία & Συμβουλευτική στη Γλυφάδα. 10 εξειδικευμένοι ψυχολόγοι...',
};

export default function RootLayout({ children }) {
  return (
    <html lang="el">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans grain`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
