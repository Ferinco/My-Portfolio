interface ProjectInfo {
  image: string;
  title: string;
  subtitle: string;
  about: string;
  url: string;
  role: string;
  tools: string[];
  images: string[];
  did: string
}
interface ProjectImage {
  firstBanner: string;
  secondBanner: string;
  thirdBanner: string;
  firstMobile: string;
  subtitle: string;
  secondMobile: string;
}

export const ProjectData: Array<ProjectInfo> = [
  {
    image: "/images/seemax.png",
    title: "seemax",
    subtitle: "seemax",
    about:
      "Website to view get the latest movie releases, search through popular choices and watch trailers.",
    url: "https://seemax.netlify.app",
    role: "A",
    tools: ["reactjs,", "tailwind css,", "context api"],
    images: [
        "/images/seemax.png",
      "/images/seemax/banner2.png",
      "/images/seemax/banner1.png",
    ],
    did: ""
  },
  {
    image: "/images/ferinstore.png",
    title: "clothify",
    subtitle: "clothify",
    about: "Website to shop for clothes and clothing items",
    url: "https://ferinstore.netlify.app",
    role: "B",
    tools: ["reactjs,", "bootstrap css,", "context api"],
    images: [
        "/images/ferinstore.png",
      "/images/ferinstore/banner3.png",
      "/images/ferinstore/banner1.png",
      "/images/ferinstore/banner2.png",
    ],
    did: ""

  },

  {
    image: "/images/bato.png",
    title: "Bato Footwears",
    subtitle: "bato",

    about:
      "An ecommerce project from a shoemaker client.",
    url: "https://seemax.netlify.app",
    role: "C",
    tools: ["vite + reactjs,", "tailwind css,", "context api", "redux"],
    images: [

    ],
    did: ""

  },
  {
    image: "/images/ferinco.png",
    title: "Ferinco's Portfolio Website",
    subtitle: "ferinco",
    about: "A portfolio website built for myself.",
    url: "https://emmanuelferinco.vercel.app",
    role: "D",
    tools: ["typescript,", "tailwind css,", "context api"],
    images: [
    ],
    did: ""

  },
  {
    image: "/images/fgms.png",
    title: "Firdaus-Gate Model Schools",
    subtitle: "fgms",
    about: "School webiste built for Firdaus-Gate Model Schools.",
    url: "https://firdausgateschools.com",
    role: "E",
    tools: ["reactjs,", "bootstrap css,", "redux", "context api"],
    images: [
      "/images/ferinstore/seemax3.png",
      "/images/ferinstore/seemax2.png",
      "/images/ferinstore/seemax2.png",
    ],
    did: "Fully designed and launched the school's website, ensuring a user-friendly and responsive interface. Implemented SEO best practices to enhance search engine visibility."

  },
];

export const ProjectImages: Array<ProjectImage> = [
  {
    firstBanner: "/images/ferinstore/banner3.png",
    secondBanner: "/images/ferinstore/banner2.png",
    thirdBanner: "/images/ferinstore/banner2.png",
    secondMobile: "/images/ferinstore/mobile2.png",
    firstMobile: "/images/ferinstore/mobile1.png",
    subtitle: "clothify",
  },
  {
    firstBanner: "/images/seemax/banner1.png",
    secondBanner: "/images/seemax/banner2.png",
    thirdBanner: "/images/ferinstore/banner2.png",
    firstMobile: "/images/seemax/mobile1.png",

    secondMobile: "/images/seemax/mobile2.png",
    subtitle: "seemax",
  },
  {
    firstBanner: "/images/ferinstore.png",
    secondBanner: "",
    thirdBanner: "/images/ferinstore/banner2.png",
    firstMobile: "",

    secondMobile: "",
    subtitle: "ferinco",
  },
  {
    firstBanner: "/images/fgms/banner1.png",
    secondBanner: "/images/fgms/banner2.png",
    thirdBanner: "/images/ferinstore/banner2.png",

    firstMobile: "/images/fgms/mobile1.png",
    secondMobile: "/images/fgms/mobile2.png",
    subtitle: "fgms",
  },
];
