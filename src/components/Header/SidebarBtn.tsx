import { AppContext } from "@/pages/_app";
import { useContext } from "react";

const SidebarBtn = () => {
    const { isOpen, setIsOpen } = useContext(AppContext);

    const handleClick = () => {
        setIsOpen(isOpen => !isOpen);
    };
    return (
        <div className="absolute inset-y-0 top-0 z-50" onClick={handleClick}>🍔</div>
    )
}

export default SidebarBtn