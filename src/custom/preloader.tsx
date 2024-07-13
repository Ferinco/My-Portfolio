import { useEffect, useState } from "react";

export default function Preloader() :JSX.Element{
  const [loading, setLoading] = useState<string>("none");
  useEffect(() => {
    setTimeout(() => {
      setLoading("first");
    }, 1500);
    setLoading("second");
  }, []);
return(
    <div className='h-[200vh] w-[100vw] z-[999] flex flex-col'>
    <div className={`mt-0 bg-black transition-all h-[100vh] w-[100vw] ${loading === "first" ? "slide-up" : "slide-down"}` }>

    </div>
    <div className={`mt-0 bg-blue-600 transition-all h-[100vh] w-[100vw] ${loading === "second" ? "mt[-100v] transition-all" : "hidden"}` }>

</div>

</div>
)
}