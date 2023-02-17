import { AppContext } from "@/pages/_app";
import Link from "next/link";
import { useContext, useState } from "react";
import Sidebar from "../Sidebar"

const Header = () => {
  const { isOpen, setIsOpen } = useContext(AppContext);

  const handleClick = () => {
    setIsOpen(isOpen => !isOpen);
  };
  return (
    <header className="sticky top-0 text-right w-full bg-red-100">
      {/* <div className="float-left absolute inset-y-0 z-10" onClick={handleClick}>🍔</div> */}
      <Sidebar />
      <Link href="/">This is header.</Link>
    </header>
  )
}

export default Header