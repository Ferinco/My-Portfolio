interface Project {
    image: string,
    title: string,
    subtitle: string,
    about: string,
    url: string,
    role: string
}
export const ProjectData: Array<Project> = [
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