import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#153430]">
        
        {/* Next.js Optimized Image */}
        <div className="absolute inset-0">
          <Image 
            src="/hero-bg.jpg" // Place your downloaded image in the /public folder
            alt="Ψ-PSY Κέντρο Είσοδος" 
            fill 
            priority
            className="object-cover object-[center_30%] opacity-60" 
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#153430]/80 via-[#153430]/40 to-[#153430]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
            <span className="inline-flex items-center gap-3 px-6 py-2.5 mb-10 rounded-full border border-sage/40 bg-sage/10 text-[#8f9e88] text-xs font-bold tracking-widest uppercase backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#7a8873] animate-pulse"></span>
              Ψ-PSY ΙΝΣΤΙΤΟΥΤΟ
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.1] mb-10 font-serif">
              Η εξέλιξή σας <br/>
              ξεκινά <span className="italic text-[#8f9e88] font-light">εδώ.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
              Μετατρέψτε τις προκλήσεις της ζωής σε αφετηρία για μια νέα ισορροπία. Στο Ψ-PSY, συνδυάζουμε 18 χρόνια εμπειρίας με μια βαθιά ανθρωποκεντρική προσέγγιση.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="px-12 py-5 bg-[#7a8873] text-[#183833] font-bold rounded-full text-sm tracking-widest uppercase transition-all hover:shadow-[0_0_60px_rgba(122,136,115,0.5)] hover:-translate-y-1">
                ΚΛΕΙΣΤΕ ΣΥΝΕΔΡΙΑ
              </Link>
              <a href="#about" className="px-12 py-5 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all font-bold text-sm tracking-widest uppercase flex items-center gap-3">
                ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ <ArrowDown className="w-4 h-4" />
              </a>
            </div>
        </div>
      </section>

      {/* Add the rest of your home page sections here (Stats, About preview, Services grid) */}
    </>
  );
}
