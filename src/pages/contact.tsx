import Button from "../custom/button";

export default function Contact(): JSX.Element {
  interface Social {
    id: number;
    name: string;
    path: string;
  }
  const SocialLinks: Array<Social> = [
    {
      id: 1,
      name: "LINKEDLN",
      path: "/",
    },
    {
      id: 2,
      name: "TWITTER",
      path: "/work",
    },
    {
      id: 3,
      name: "INSTAGRAM",
      path: "/contact",
    },
    {
      id: 4,
      name: "WHATSAPP",
      path: "/contact",
    },
  ];
  return (
    <div>
        <div className="flex flex-col gap-5 mt-[100px]">
      <p className="text-center text-3xl">
        I'm currently seeking a full-time position but I am also available for
        gigs and freelance work. Send me an email to hire me, let's create
        something amazing together.
      </p>
      <h2
        className="lg:text-[10rem] leading-[0.9] text-[6rem] md:text-[8rem] text-center mt-10"
        data-aos="fade-in"
        data-aos-delay="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="5000"
      >
        FERINCO001<br />@GMAIL.COM
      </h2>
      <div className="flex justify-center items-center">
        <Button
          title="Send Email"
          link="/"
          // id="cap"
          className="flex items-center gap-2 lg:py-4 py-3 lg:px-10 px-5 rounded-full bg-transparent border border-black text-black transition-all  duration-300 w-fit font-medium"
        ></Button>
      </div>
        </div>
      <div className="flex flex-row justify-between py-12 border-t-2 border-gray-200 flex-wrap gap-y-6 lg:gap-0 mt-[70px]">
        <div className="flex flex-col text-start lg:w-[30%] md:w-[60%]">
          <p className="text-start text-2xl">
            You can also connect with me on my social media platforms. Click on
            any of them to connect!
          </p>
        </div>
        <div className="flex flex-col text-start lg:w-[35%] gap-2 md:w-[35%] w-[100%]">
          {SocialLinks.map((social) => (
            <Button
              className="social-link lg:text-4xl text-3xl flex flex-row items-center justify-between lg:w-[300px]"
              id={social.name}
              title={social.name}
              iconSize="text-xl"
            ></Button>
          ))}
        </div>
        <div className="flex flex-col lg:w-[20%] gap-2 md:w-[35%] w-[100%]">
        <p className="text-start text-2xl">Hire me so I can afford starlink :)</p>
        </div>
      </div>
    </div>
  );
}
