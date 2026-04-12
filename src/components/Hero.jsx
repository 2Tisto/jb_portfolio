export default function Hero() {
  return (
    <section id="accueil" className="snap-section bg-[#0a0a0a]">
      {/* On ajoute un padding top pour compenser la nav si nécessaire, 
          mais avec snap-section, le centrage flex gère souvent bien l'espace */}
      <div className="max-w-6xl w-full pt-20 md:pt-0">
        <div className="mb-6 flex items-center gap-3">
          <span className="px-2 py-1 bg-[#00ff41] text-black text-[10px] font-bold">STAGIAIRE_RECRUTABLE</span>
          <span className="text-[10px] text-[#00ff41] animate-pulse">● CONNECTION_ESTABLISHED</span>
        </div>
        
        <h1 className="text-[10vw] font-black leading-none uppercase tracking-tighter text-white">
          <span className="text-[#00ff41]">VIGNONFODO</span><br/>
          JEAN-BAPTISTE<span className="cursor-blink text-[#00ff41]"></span>
        </h1>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-slate-400 text-lg md:text-xl border-l-2 border-[#00ff41] pl-6">
            <p className="mb-4">&gt; apt-get install expertise</p>
            <p>Backend Engineer & Security Analyst.</p>
            <p className="text-[#00ff41]/70 font-bold mt-2">Disponible pour Stage (2026)</p>
          </div>
          
          <div className="flex flex-col justify-end items-start md:items-end font-mono text-xs space-y-2 opacity-50">
            <span>IP_REMOTE: 192.168.1.XX</span>
            <span>OS: KALI_LINUX_PRO</span>
            <span>ROOT: GRANTED</span>
          </div>
        </div>
      </div>
    </section>
  );
}