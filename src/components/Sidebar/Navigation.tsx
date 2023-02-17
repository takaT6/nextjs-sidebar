import { AppContext } from "@/pages/_app";
import Link from "next/link";
import { useContext, useState } from "react";

type NavigationItem = {
  label: string,
  href: string,
  icon: JSX.Element,
  isActive: boolean
}

const navigations: NavigationItem[] = [
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
const Navigation = () => {
  const { isOpen, setIsOpen } = useContext(AppContext);

  const handleClick = () => {
    setIsOpen(isOpen => !isOpen);
  };
  return (
    <nav>
      <ul className="list-none">
        {navigations.map((navigation) => (
          <li key={navigation.href} onClick={handleClick}>
            <Link href={navigation.href}>
              {navigation.icon}{navigation.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation