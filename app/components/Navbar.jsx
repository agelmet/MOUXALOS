"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cream/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-4 group">
          <Image src="/logo.jpg" alt="Ψ-PSY Logo" width={48} height={48} className="rounded-full border border-white/30" />
          <span className={`text-xl font-bold tracking-widest uppercase font-serif ${scrolled ? 'text-forest' : 'text-white'}`}>Ψ-PSY</span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-10">
          <Link href="/" className={`text-xs tracking-widest font-bold uppercase hover:opacity-100 ${scrolled ? 'text-forest/70' : 'text-white/80'}`}>ΑΡΧΙΚΗ</Link>
          <Link href="/services" className={`text-xs tracking-widest font-bold uppercase hover:opacity-100 ${scrolled ? 'text-forest/70' : 'text-white/80'}`}>ΥΠΗΡΕΣΙΕΣ</Link>
          <Link href="/team" className={`text-xs tracking-widest font-bold uppercase hover:opacity-100 ${scrolled ? 'text-forest/70' : 'text-white/80'}`}>Η ΟΜΑΔΑ ΜΑΣ</Link>
          <Link href="/contact" className={`text-xs tracking-widest font-bold uppercase hover:opacity-100 ${scrolled ? 'text-forest/70' : 'text-white/80'}`}>ΕΠΙΚΟΙΝΩΝΙΑ</Link>
          
          <Link href="/contact" className="px-8 py-3.5 bg-sage text-cream text-xs tracking-widest font-bold rounded-full transition-all hover:shadow-lg hover:-translate-y-1 uppercase">
            ΚΛΕΙΣΤΕ ΣΥΝΕΔΡΙΑ
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X color={scrolled ? '#183833' : 'white'} /> : <Menu color={scrolled ? '#183833' : 'white'} />}
        </button>
      </div>
    </header>
  );
}
