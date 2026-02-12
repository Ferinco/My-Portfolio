export default function WriteUp(): JSX.Element {
  const categories = [
    {
      title: "Languages",
      skills: "TypeScript, JavaScript (ES6+), HTML, CSS, PHP",
    },
    {
      title: "Frontend & Mobile",
      skills:
        "React, Next.js, Vue.js, React Native, Tailwind CSS, SCSS, Material UI, Bootstrap, Apache Cordova",
    },
    {
      title: "Backend & APIs",
      skills:
        "Node.js (Express), Laravel, RESTful APIs, WebSockets, GraphQL, BullMQ",
    },
    {
      title: "Databases & Caching",
      skills: "MongoDB, PostgreSQL, MySQL, Redis, Prisma ORM, Firebase",
    },
    {
      title: "Infra. & Tools",
      skills: "Git, AWS, Docker, CI/CD Pipelines, WordPress, Microsoft Excel",
    },
  ];

  return (
    <div className="flex flex-col mt-40 lg:mt-96">
      <h2
        className="lg:text-[10rem] leading-[0.9] text-[4rem] md:text-[8rem] text-start font-medium lg:font-bold"
        data-aos="fade-in"
        data-aos-delay={100}
        data-aos-easing="ease-in-sine"
      >
        Technical <br /> Skills.
      </h2>
      <div className="flex flex-col gap-10 mt-10 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3"
              data-aos="fade-up"
              data-aos-delay={150 + index * 50}
              data-aos-easing="ease-in-sine"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-[2px] bg-black"></div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-[#0069FF]">
                  {item.title}
                </h3>
              </div>
              <p className="text-start text-xl lg:text-2xl font-medium leading-relaxed">
                {item.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
