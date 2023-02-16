import Link from "next/link"
import { useCallback, useState } from "react"
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


const Siderbar = () => {
  return (
    <>
      <div className={classes.sidebar}>
        <ul className={classes.ul}>
          {navigations.map((navigation) => (
            <li key={navigation.href}>
              <Link href={navigation.href} className={classes.menu}>
                {navigation.icon}
                {navigation.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Siderbar