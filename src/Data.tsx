interface ProjectInfo {
    image: string,
    title: string,
    subtitle: string,
    about: string,
    url: string,
    role: string
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
        role: "A"
    },
    {
        image: "/images/seemax.png",
        title: "seemax",
        subtitle: "seemax",

        about: "Website to view get the latest movie releases, search through popular choices and watch trailers.",
        url: "www.ferinco.com",
        role: "B"
    },
    {
        image: "/images/ferinco.png",
        title: "Ferinco's Portfolio Website",
        subtitle: "ferinco",
        about: "A portfolio website built for myself.",
        url: "www.ferinco.com",
        role: "C"
    },
    {
        image: "/images/fgms.png",
        title: "Firdaus-Gate Model Schools",
        subtitle: "fgms",
        about: "School webiste built for Firdaus-Gate Model Schools.",
        url: "www.firdausgateschools.com",
        role: "D"
    },
]

export const ProjectImages: Array<ProjectImage> = [
    {
        firstBanner: "/images/ferinstore/banner1.png",
        firstMobile: "/images/ferinstore/mobile1.png",
        secondBanner: "/images/ferinstore/banner2.png",
        secondMobile: "www.ferinstore.netlify.app",
        subtitle: "clothify",
    },
    {
        firstBanner: "/images/ferinstore/mobile1.png",
        firstMobile: "",
        secondBanner: "",
        secondMobile: "",
        subtitle: "seemax",
    }, {
        firstBanner: "/images/ferinstore.png",
        firstMobile: "",
        secondBanner: "",
        secondMobile: "",
        subtitle: "ferinco",
    }, {
        firstBanner: "/images/ferinstore.png",
        firstMobile: "",
        secondBanner: "",
        secondMobile: "",
        subtitle: "fgms",
    },



]