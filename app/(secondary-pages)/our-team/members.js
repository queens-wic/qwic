// use place photo for Annika Tran, Keely McSpurren, Alyssa Zhao, Rena Hajjar, Kaleigh Feder

const profiles = [
  {
    src: "/team-photos-2024/MariaKobilaski.jpg",
    alt: "Maria Kobilaski, Co-Chair",
    name: "Maria Kobilaski",
    role: "Co-Chair",
    portfolio: "Co-Chairs",
  },
  {
    src: "/team-photos-2024/JadeWarren.jpg",
    alt: "Jade Warren, Co-Chair",
    name: "Jade Warren",
    role: "Co-Chair",
    portfolio: "Co-Chairs",
  },
  {
    src: "/team-photos-2024/PhoebeStarnino.jpg",
    alt: "Phoebe Starnio, Vice-Chair of Community",
    name: "Phoebe Starnio",
    role: "Vice-Chair of Community",
    portfolio: "Community",
  },
  {
    src: "/team-photos-2024/NavyaBajwa.jpg",
    alt: "Navya Bajwa, Community Coordinator",
    name: "Navya Bajwa",
    role: "Community Coordinator",
    portfolio: "Community",
  },
  {
    src: "/team-photos-2024/LilyanaBoraniev.jpg",
    alt: "Lilyana Boraniev, Community Coordinator",
    name: "Lilyana Boraniev",
    role: "Community Coordinator",
    portfolio: "Community",
  },
  {
    src: "/team-photos-2024/Ashley.jpg",
    alt: "Ashley Van Rooyen, Community Coordinator",
    name: "Ashley Van Rooyen",
    role: "Community Coordinator",
    portfolio: "Community",
  },
  {
    src: "/team-photos-2024/SophiaWang.jpg",
    alt: "Sophia Wang, First-Year Community Representative",
    name: "Sophia Wang",
    role: "First-Year Community Representative",
    portfolio: "Community",
  },
  {
    src: "/team-photos-2024/ReneeKim.jpg",
    alt: "Renee Kim, Vice-Chair of Marketing",
    name: "Renee Kim",
    role: "Vice-Chair of Marketing",
    portfolio: "Marketing",
  },
  {
    src: "/team-photos-2024/EmmaLeitch-Blais.jpg",
    alt: "Emma Leitch-Blais, Marketing Coordinator",
    name: "Emma Leitch-Blais",
    role: "Marketing Coordinator",
    portfolio: "Marketing",
  },
  {
    src: "/team-photos-2024/AlyssaZhao.jpg",
    alt: "Alyssa Zhao, Marketing Coordinator",
    name: "Alyssa Zhao",
    role: "Marketing Coordinator",
    portfolio: "Marketing",
  },
  {
    src: "/team-photos-2024/AmandaLi.jpg",
    alt: "Amanda Li, Graphic Designer",
    name: "Amanda Li",
    role: "Graphic Designer",
    portfolio: "Marketing",
  },
  {
    src: "/team-photos-2024/kaleighFeder.jpg",
    alt: "Kaleigh Feder, Web Developer",
    name: "Kaleigh Feder",
    role: "Web Developer",
    portfolio: "Marketing",
  },
  {
    src: "/team-photos-2024/KavitaThomas.jpg",
    alt: "Kavita Thomas, Web Developer",
    name: "Kavita Thomas",
    role: "Web Developer",
    portfolio: "Marketing",
  },
  {
    src: "/team-photos-2024/HargunKour.jpg",
    alt: "Hargun Kour, First-Year Web Developer Representative",
    name: "Hargun Kour",
    role: "First-Year Web Developer Representative",
    portfolio: "Marketing",
  },
  {
    src: "/team-photos-2024/KarinaQiu.jpg",
    alt: "Karina Qiu, First-Year Marketing Representative",
    name: "Karina Qiu",
    role: "First-Year Marketing Representative",
    portfolio: "Marketing",
  },
  {
    src: "/team-photos-2024/LiaSilver.jpg",
    alt: "Lia Silver, Vice-Chair of Operations",
    name: "Lia Silver",
    role: "Vice-Chair of Operations",
    portfolio: "Operations",
  },
  {
    src: "/team-photos-2024/KeelyMcSpurren.jpg",
    alt: "Keely McSpurren, Senior Advisor",
    name: "Keely McSpurren",
    role: "Senior Advisor",
    portfolio: "Operations",
  },
  {
    src: "/team-photos-2024/AnnikaTran.jpg",
    alt: "Annika Tran, Sponsorships Coordinator",
    name: "Annika Tran",
    role: "Sponsorships Coordinator",
    portfolio: "Operations",
  },
  {
    src: "/team-photos-2024/AllixFletcher.jpg",
    alt: "Allix Fletcher, Finance Coordinator",
    name: "Allix Fletcher",
    role: "Finance Coordinator",
    portfolio: "Operations",
  },
  {
    src: "/team-photos-2024/JeshnaKanduri.jpg",
    alt: "Jeshna Kanduri, First-Year Operations Representative",
    name: "Jeshna Kanduri",
    role: "First-Year Operations Representative",
    portfolio: "Operations",
  },
  {
    src: "/team-photos-2024/SariPagurekvanMossel.jpg",
    alt: "Sari Pagurek Van Mossal, Vice-Chair of HackHer",
    name: "Sari Pagurek Van Mossal",
    role: "Vice-Chair of HackHer",
    portfolio: "HackHer",
  },
  {
    src: "/team-photos-2024/SaanviBakshi.jpg",
    alt: "Saanvi Bakshi, HackHer Coordinator",
    name: "Saanvi Bakshi",
    role: "HackHer Coordinator",
    portfolio: "HackHer",
  },
  {
    src: "/team-photos-2024/RenaHajjar.jpg",
    alt: "Réna Hajjar, HackHer Coordinator",
    name: "Réna Hajjar",
    role: "HackHer Coordinator",
    portfolio: "HackHer",
  },
  {
    src: "/team-photos-2024/TeaganWright.jpg",
    alt: "Teagan Wright, HackHer Coordinator",
    name: "Teagan Wright",
    role: "HackHer Coordinator",
    portfolio: "HackHer",
  },
  {
    src: "/team-photos-2024/MonaAyoub.jpg",
    alt: "Mona Ayoub, First-Year HackHer Representative",
    name: "Mona Ayoub",
    role: "First-Year HackHer Representative",
    portfolio: "HackHer",
  },
  {
    src: "/team-photos-2024/NaveiniVasikaran.jpg",
    alt: "Naveini Vasikaran, First-Year HackHer Representative",
    name: "Naveini Vasikaran",
    role: "First-Year HackHer Representative",
    portfolio: "HackHer",
  },
  {
    src: "/team-photos-2024/BethArmstrong.jpg",
    alt: "Beth Armstrong, Vice-Chair of Mentorship",
    name: "Beth Armstrong",
    role: "Vice-Chair of Mentorship",
    portfolio: "Mentorship",
  },
  {
    src: "/team-photos-2024/MadeleineDomantay.jpg",
    alt: "Madeleine Domantay, Mentorship Coordinator",
    name: "Madeleine Domantay",
    role: "Mentorship Coordinator",
    portfolio: "Mentorship",
  },
  {
    src: "/team-photos-2024/KateRam.jpg",
    alt: "Kate Ram, Mentorship Coordinator",
    name: "Kate Ram",
    role: "Mentorship Coordinator",
    portfolio: "Mentorship",
  },
  {
    src: "/team-photos-2024/lauren.jpg",
    alt: "Lauren Lidhar, Mentorship Coordinator",
    name: "Lauren Lidhar",
    role: "Mentorship Coordinator",
    portfolio: "Mentorship",
  },
  {
    src: "/team-photos-2024/JasmineQin.jpg",
    alt: "Jasmin Qin, First-Year Mentorship Coordinator",
    name: "Jasmine Qin",
    role: "First-Year Mentorship Coordinator",
    portfolio: "Mentorship",
  },
];

export default profiles;
