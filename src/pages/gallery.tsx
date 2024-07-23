import { useAppContext } from "../context";
import ZoomedDiv from "../custom/ZoomedDiv";

export default function Gallery (): JSX.Element {
    const { openZoom } = useAppContext();
    return (
    //   <>
    //     {openZoom === false ? (
    //       <div className="App overflow-x-hidden">
    //       </div>
    //     ) : (
    //       <ZoomedDiv />
    //     )}
    //   </>
    <ZoomedDiv/>
    );
}