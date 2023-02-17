import { AppContext } from "@/pages/_app"
import Link from "next/link"
import { useCallback, useContext, useEffect, useState } from "react"
import classes from "src/components/Sidebar/Sidebar.module.css"

type Navigation = {
  label: string,
  href: string,
  icon: JSX.Element,
  isActive: boolean
}

const navigations: Navigation[] = [
  {
    label: "トップ",
    href: "/",
    icon: <span>★</span>,
    isActive: false,
  },
  {
    label: "ページ2",
    href: "/page2",
    icon: <span>★</span>,
    isActive: false,
  },
  {
    label: "ページ3",
    href: "/page3",
    icon: <span>★</span>,
    isActive: false,
  },
  {
    label: "ページ4",
    href: "/page4",
    icon: <span>★</span>,
    isActive: false,
  },
]

const stopScroll = (on: boolean) => {
  if (on) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";
}

const Sidebar = () => {
  const { isOpen, setIsOpen } = useContext(AppContext);
  const handleClick = () => {
    setIsOpen(isOpen => !isOpen);
  };
  useEffect(() => stopScroll(isOpen), [isOpen]);
  return (
    <>
      <div className="absolute inset-y-0 top-0 z-50" onClick={handleClick}>🍔</div>
      <div className={`${isOpen ? "left-0 translate-x-0"
        : "-translate-x-full"} 
        absolute z-40 w-6/12 inset-y-0 max-h-screen min-h-screen overflow-y-auto bg-white transition duration-200 ease-in-out`}>
        <div className="text-right">🏍</div>
        <ul className={classes.ul}>
          {navigations.map((navigation) => (
            <li key={navigation.href} onClick={handleClick}>
              <Link href={navigation.href} className={classes.menu}>
                {navigation.icon}{navigation.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`fixed inset-0 z-10 bg-black bg-opacity-10 transition duration-200 ease-in-out ${isOpen
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
          }`}
        onClick={() => setIsOpen(false)} />
    </>
  )
}

export default Sidebar