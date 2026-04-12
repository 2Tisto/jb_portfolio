export default function Contact() {
  return (
    <section id="contact" className="snap-section bg-[#00ff41] text-black">
      <div className="w-full">
        <h2 className="text-[12vw] font-black leading-none uppercase mb-10 tracking-tighter italic">Hiring_Me.</h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <p className="text-xl font-bold mb-4 uppercase tracking-widest">Avis aux recruteurs :</p>
            <p className="max-w-md font-bold leading-tight">
              Étudiant disponible immédiatement pour un stage en développement Backend ou Cybersécurité.
              Prêt à relever des défis techniques complexes.
            </p>
          </div>
          <div className="text-left md:text-right break-all font-black text-lg md:text-3xl">
            <a href="mailto:jeanbaptistevignonfodo@gmail.com" className="hover:line-through transition-all">
              jeanbaptistevignonfodo@gmail.com
            </a>
            <div className="flex gap-4 md:justify-end mt-4 text-xs font-bold uppercase underline">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="#">Resume_PDF</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}