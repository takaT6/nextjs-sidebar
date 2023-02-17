import { AppContext } from "@/pages/_app"
import { useContext } from "react"

const Overlay = () => {
  const { isOpen, setIsOpen } = useContext(AppContext);
  return (
    <div
      className={`fixed inset-0 z-10 bg-black bg-opacity-10 transition duration-200 ease-in-out ${isOpen
        ? 'pointer-events-auto opacity-100'
        : 'pointer-events-none opacity-0'
        }`}
      onClick={() => setIsOpen(false)} />
  )
}

export default Overlay