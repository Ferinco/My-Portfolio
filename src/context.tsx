import { createContext, ReactNode, useContext, useState } from "react";

interface AppContextTypes {
    zoomedImage: string
    setZoomedImage: (image: string) => void
    openZoom: boolean
    setOpenZoom: (zoom: boolean) => void
    name: string
    setName: (name: string) => void

}
const AppContext = createContext<AppContextTypes | undefined>(undefined)
export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [zoomedImage, setZoomedImage] = useState("")
    const [openZoom, setOpenZoom] = useState(false)
    const [name, setName] = useState("")


    return (
        <AppContext.Provider
            value={{
                zoomedImage,
                setZoomedImage,
                openZoom,
                setOpenZoom,
                name,
                setName
            }}
        >
            {children}
        </AppContext.Provider>

    )
}
export const useAppContext = (): AppContextTypes => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
