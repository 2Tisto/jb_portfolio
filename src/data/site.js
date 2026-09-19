export const site = {
  firstName: 'Vignonfodo',
  lastName: 'Jean-Baptiste',
  name: 'Vignonfodo Jean-Baptiste',
  short: 'JB',
  brand: 'JB.dev',
  email: 'jeanbaptistevignonfodo@gmail.com',
  role: 'Backend Engineer & Security Analyst',
  availability: 'Disponible pour un stage — 2026',
  location: 'Bénin',
  github: '',
  linkedin: '',
  cv: '',
  portrait: '',
  roles: ['le backend', 'la cybersécurité', 'Java / Spring', 'PHP / Laravel'],
};

export const about = {
  lead:
    'Étudiant en informatique, je construis des services backend fiables et j’approfondis la sécurité par la pratique : authentification, audit réseau, code défensif.',
  paragraphs: [
    'Je m’intéresse aux systèmes qui tiennent sous contrainte — API, sessions, chiffrement, analyse de trafic. Moins de jargon, plus d’outils qui servent vraiment.',
    'Je cherche un stage en développement backend ou en cybersécurité en 2026, au contact d’une équipe exigeante sur des problèmes concrets.',
  ],
};

export const facts = [
  { label: 'Profil', value: 'Backend & sécurité' },
  { label: 'Disponibilité', value: 'Stage 2026' },
  { label: 'Stack', value: 'Java · PHP · C++' },
  { label: 'Lieu', value: 'Bénin' },
];

export const skills = [
  {
    name: 'Java / Spring',
    hint: 'Services, authentification, persistance.',
    items: ['Spring Security', 'Multithreading', 'Hibernate', 'JWT'],
  },
  {
    name: 'PHP / Laravel',
    hint: 'API web et bonnes pratiques de sécurité applicative.',
    items: ['Laravel', 'Secure coding', 'CSRF / XSS', 'MySQL'],
  },
  {
    name: 'C++ & réseau',
    hint: 'Quand il faut descendre près des sockets et de la mémoire.',
    items: ['Sockets', 'TCP/IP', 'Pointeurs', 'Memory management'],
  },
  {
    name: 'Cybersécurité',
    hint: 'Un axe que je construis : comprendre, tester, durcir.',
    items: ['Audit réseau', 'OWASP', 'AES / RSA', 'Linux'],
  },
];

export const projects = [
  {
    id: '01',
    title: 'Packet sniffer C++',
    desc: 'Capture et décodage de paquets TCP/IP en temps réel, pour voir ce qui circule vraiment sur un lien.',
    tags: ['C++', 'Sockets', 'Réseau'],
  },
  {
    id: '02',
    title: 'Auth centralisée Java',
    desc: 'Authentification avec chiffrement et protections contre la force brute — un vrai exercice d’architecture.',
    tags: ['Java', 'Spring', 'JWT'],
  },
  {
    id: '03',
    title: 'Scanner PHP',
    desc: 'Scan automatisé (SQLi, LFI) pour des audits internes : lire une app comme un attaquant, puis la corriger.',
    tags: ['PHP', 'Sécurité', 'OWASP'],
  },
];

export const nextSteps = [
  'Des APIs de production : auth, limites, observabilité.',
  'Des audits web OWASP sur de vrais codebases.',
  'Plus de C++ réseau et d’administration Linux.',
];

export const nav = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#projets', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
];
