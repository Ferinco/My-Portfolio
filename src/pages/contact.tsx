import Button from "../custom/button";
import { SocialLinks } from "../data/socials";

export default function Contact(): JSX.Element {
  return (
    <div className="px-3 md:px-6 lg:px-8 xl:px-14">
      <div className="flex flex-col gap-5 mt-[100px]">
        <p className="text-center text-3xl">
          I'm currently seeking a full-time position but I am also available for
          gigs and freelance work. Send me an email to hire me, let's create
          something amazing together.
        </p>
        <div>
          <h2
            className="lg:text-[9rem] leading-[0.9] text-[3.2rem] sm:text-[5rem] md:text-[8rem] text-center mt-10 break-all"
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="5000"
          >
            EMMANUELFERRUM003
            <br />
            @GMAIL.COM
          </h2>
          <h1>Emmanuel "ferrum zero zero 3" @gmail.com</h1>
        </div>
        <div className="flex justify-center items-center mt-0 lg:mt-5">
          <Button
            title="Send Email"
            link="mailto:emmanuelferrum003@gmail.com"
            target="_blank"
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
              target="_target"
              link={social.path}
            ></Button>
          ))}
        </div>
        <div className="flex flex-col lg:w-[20%] gap-2 md:w-[35%] w-[100%]">
          <p className="hidden text-start text-2xl">
            Hire me so I can afford starlink :)
          </p>
        </div>
      </div>
    </div>
  );
}
