interface Link {
    num: number;
    name: string;
    path: string;
}
export const NavLinks: Array<Link> = [
    {
        num: 1,
        name: "About",
        path: "/about"
    },
    {
        num: 2,
        name: "Work",
        path: "/work"
    }, {
        num: 3,
        name: "Contact",
        path: "/contact"
    },
]