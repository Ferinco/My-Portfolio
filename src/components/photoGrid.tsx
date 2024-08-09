export default function PhotoGrid(): JSX.Element {
  return (
    // <div className='flex flex-col lg:flex-row justify-between gap-5 lg:gap-0 mt-[40px] px-3 md:px-6 lg:px-0'>
    //     <div className="h-[300px] w-full lg:w-[30%] border-2 border-l-0 border-red-400"></div>
    //     <div className="h-[500px] w-full lg:w-[30%] border-2 border-t-0 border-red-400"></div>
    //     <div className="hidden lg:flex flex-col lg:w-[30%] justify-between lg:h-[500px] h-[400px] items-end">
    //     <div className="h-[200px] w-full lg:w-[80%]  border-2 border-r-0 border-red-400 hidden lg:flex"></div>
    //     <div className="h-[270px] w-full border-2 border-b-0 border-red-400 hidden lg:flex"></div>
    //     </div>
    // </div>
    <div className="px-3 md:px-6 lg:px-8 xl:px-14 flex flex-col md:flex-row gap-5 md:mt-20 mt-12">
      <div className="w-full md:w-4/6 h-80 lg:h-[400px] rounded-lg overflow-hidden">
      <img
          src="images/hero-1.jpg"
          className="w-full  h-full block object-cover object-top rounded-lg"
        /></div>
      <div className="w-full md:w-2/6 lg:h-[400px] md:h-80 h-64">
        <img
          src="images/hero-1.jpg"
          className="w-full  h-full block object-cover object-top rounded-lg"
        />
      </div>
    </div>
  );
}
