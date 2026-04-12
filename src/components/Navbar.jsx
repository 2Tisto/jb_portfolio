import { ShieldCheck } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#00ff41]/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Logo en vert Matrix pour matcher le texte */}
          <ShieldCheck className="text-[#00ff41]" size={20} />
          <span className="font-bold tracking-tighter text-sm uppercase text-[#00ff41]">
            JB.VIGNONFODO
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 items-center text-[10px] font-bold uppercase tracking-widest text-[#00ff41]/70">
          <a href="#accueil" className="hover:text-[#00ff41] transition-colors">Accueil</a>
          <a href="#expertises" className="hover:text-[#00ff41] transition-colors">Expertises</a>
          <a href="#projets" className="hover:text-[#00ff41] transition-colors">Projets</a>
          
          {/* Bouton Access Granted : On vire le bleu, on passe en vert hacker */}
          <a href="#contact" className="border border-[#00ff41]/40 px-3 py-1 text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-all">
            ACCESS_GRANTED
          </a>
        </div>
      </div>
    </nav>
  );
}