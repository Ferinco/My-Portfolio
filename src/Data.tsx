interface ProjectInfo {
    image: string,
    title: string,
    subtitle: string,
    about: string,
    url: string,
    role: string,
    tools: string[]
}
interface ProjectImage {
    firstBanner: string,
    firstMobile: string,
    secondBanner: string,
    secondMobile: string,
    subtitle: string,
}
export const ProjectData: Array<ProjectInfo> = [
    {
        image: "/images/ferinstore.png",
        title: "clothify",
        subtitle: "clothify",

        about: "Website to shop for clothes and clothing items",
        url: "www.ferinstore.netlify.app",
        role: "A",
        tools: ["reactjs,", "bootstrap css,", "context api"]
    },
    {
        image: "/images/seemax.png",
        title: "seemax",
        subtitle: "seemax",

        about: "Website to view get the latest movie releases, search through popular choices and watch trailers.",
        url: "www.ferinco.com",
        role: "B",
        tools: ["reactjs,", "tailwind css,", "context api"]

    },
    {
        image: "/images/ferinco.png",
        title: "Ferinco's Portfolio Website",
        subtitle: "ferinco",
        about: "A portfolio website built for myself.",
        url: "www.ferinco.com",
        role: "C",
        tools: ["typescript,", "tailwind css,", "context api"]

    },
    {
        image: "/images/fgms.png",
        title: "Firdaus-Gate Model Schools",
        subtitle: "fgms",
        about: "School webiste built for Firdaus-Gate Model Schools.",
        url: "www.firdausgateschools.com",
        role: "D",
        tools: ["reactjs,", "bootstrap css,", "redux", "context api"]

    },
]

export const ProjectImages: Array<ProjectImage> = [
    {
        firstBanner: "/images/ferinstore/banner3.png",
        firstMobile: "/images/ferinstore/mobile1.png",
        secondBanner: "/images/ferinstore/banner2.png",
        secondMobile: "/images/ferinstore/mobile2.png",
        subtitle: "clothify",
    },
    {
        firstBanner: "/images/seemax/banner1.png",
        firstMobile: "/images/seemax/mobile1.png",
        secondBanner: "/images/seemax/banner2.png",
        secondMobile: "/images/seemax/mobile2.png",
        subtitle: "seemax",
    }, {
        firstBanner: "/images/ferinstore.png",
        firstMobile: "",
        secondBanner: "",
        secondMobile: "",
        subtitle: "ferinco",
    }, {
        firstBanner: "/images/fgms/banner1.png",
        firstMobile: "/images/fgms/mobile1.png",
        secondBanner: "/images/fgms/banner2.png",
        secondMobile: "/images/fgms/mobile2.png",
        subtitle: "fgms",
    },



]