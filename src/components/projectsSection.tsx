import Button from "../custom/button";

export default function ProjectsSection(): JSX.Element {
  return (
    <div className="px-3 md:px-6 lg:px-8 xl:px-14 mt-40">
      <div className="flex flex-col">
        <h2 className="lg:text-[10rem] leading-none text-[7rem] md:text-[8rem] text-start">
          Selected Projects.
        </h2>
        <div className="flex flex-col lg:flex-row gap-7 w-100">
          <div className="hidden-image border-8 border-black w-48 h-1 mt-2"></div>
          <div className="flex flex-row justify-between gap-7 flex-wrap w-full items-end">
            <p className="text-start max-w-[600px] text-xl lg:text-2xl">
              I've had the opportunity to work on some exciting projects over
              the years, and here are a few of my favorites. Explore how I've
              transformed concepts into tangible results. Discover the stories
              behind successful product designs that have made a significant
              impact.
            </p>
            <Button title="View Projects" link="/projects" id="cap" className="flex items-center gap-2 lg:py-4 py-3 lg:px-10 px-5 rounded-full bg-transparent border border-black text-black transition-all  duration-300 w-fit font-medium">

            </Button>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-row gap-3 lg:hidden"></div> */}
    </div>
  );
}
