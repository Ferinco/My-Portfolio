import { useEffect, useState } from "react";
import Preloader from "./custom/preloader";
import App from "./App";

export default function Main(){
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    setLoading(true);
  }, []);
    return (
      <>
      {loading ? (
        <Preloader />
      ) : (
       <App/>
      )}
    </>
    )
  }
