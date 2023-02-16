import Link from "next/link"
import { useCallback, useState } from "react"
import classes from "src/components/SiderMenu/SideMenu.module.css"

type Navigation = {
  pageName: string,
  path: string,
  icon: JSX.Element
}

const navigations: Navigation[] = [
  {
    pageName: "トップ",
    path: "/",
    icon: <div>★</div>
  },
  {
    pageName: "ページ2",
    path: "/page2",
    icon: <div>★</div>
  },
  {
    pageName: "ページ3",
    path: "/page3",
    icon: <div>★</div>
  },
  {
    pageName: "ページ4",
    path: "/page4",
    icon: <div>★</div>
  },
]


const SiderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = useCallback(() => {
    setIsOpen(isOpen => !isOpen);
  }, [])
  return (
    <div className={classes.sidemenu}>
      <div className={classes.hamburger} onClick={handleClick}>🍔</div>
      {navigations.map((navigation) => (
        <Link href={navigation.path} key={navigation.path}>
          <div className={classes.menu}>
            {navigation.icon}
            {isOpen && navigation.pageName}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default SiderMenu