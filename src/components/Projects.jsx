export default function Projects() {
  const projs = [
    {
      id: "01",
      title: "PACKET_SNIFFER_CPP",
      desc: "Analyseur de trafic réseau en C++ capable de capturer et décoder les paquets TCP/IP en temps réel.",
      tech: "C++ / RAW_SOCKETS"
    },
    {
      id: "02",
      title: "SECURE_AUTH_JAVA",
      desc: "Système d'authentification centralisé avec chiffrement asymétrique et protection contre les attaques par force brute.",
      tech: "JAVA / SPRING / JWT"
    },
    {
      id: "03",
      title: "PHP_VULN_SCANNER",
      desc: "Outil automatisé de scan de vulnérabilités Web (SQLi, LFI) développé spécifiquement pour les audits internes.",
      tech: "PHP / SECURITY"
    }
  ];

  return (
    <section id="projets" className="snap-section">
      <h2 className="text-2xl font-bold mb-10 uppercase tracking-[0.5em] text-[#00ff41]">&gt;_RÉALISATIONS</h2>
      <div className="flex flex-col gap-4">
        {projs.map(p => (
          <div key={p.id} className="hacker-card group cursor-pointer">
            <div className="flex justify-between items-start mb-2">
              <span className="text-white font-bold tracking-widest">{p.title}</span>
              <span className="text-[10px] text-[#00ff41]">{p.tech}</span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed group-hover:text-slate-300 transition-colors">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}