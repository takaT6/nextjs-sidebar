import Link from "next/link";
import { useState } from "react";
import classes from "src/components/Header/Header.module.css"
import Siderbar from "../Sidebar"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(isOpen => !isOpen);
  };
  return (
    <>
      <header className={classes.header}>

        <div className={classes.hamburger} onClick={handleClick}>🍔</div>
        <Link href="/">This is header.</Link>
      </header>

      {isOpen && <Siderbar />}
    </>
  )
}

export default Header