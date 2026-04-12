export default function Expertises() {
  const skills = [
    { name: "JAVA_ENVIRONMENT", list: ["Spring Security", "Multithreading", "Hibernate"] },
    { name: "PHP_SECURITY", list: ["Secure Coding", "Laravel", "CSRF/XSS Protection"] },
    { name: "C++_BAS_NIVEAU", list: ["Socket Programming", "Memory Management", "Pointers"] },
    { name: "CYBER_OPS", list: ["Pentesting", "Network Auditing", "Encryption (AES/RSA)"] }
  ];

  return (
    <section id="expertises" className="snap-section bg-black">
      <h2 className="text-2xl font-bold mb-10 uppercase tracking-[0.5em] text-[#00ff41]">&gt;_COMPÉTENCES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((s, i) => (
          <div key={i} className="hacker-card">
            <h3 className="text-[#00ff41] font-bold mb-4"># {s.name}</h3>
            <ul className="text-slate-500 text-sm space-y-1">
              {s.list.map(item => <li key={item}>[+] {item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}