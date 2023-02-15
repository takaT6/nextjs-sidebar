import Link from "next/link"

type Navigation = {
  pageName: string,
  path: string,
  icon: JSX.Element
}

const navigations: Navigation[] = [
  {
    pageName: "トップ",
    path: "/",
    icon: <h1>★</h1>
  },
  {
    pageName: "ページ2",
    path: "/page2",
    icon: <h1>★</h1>
  },
]

const Menu = () => {
  return (
    <>
      <div>
        {navigations.map((navigation) => (
          <Link href={navigation.path} key={navigation.path}>
            {navigation.icon}
            {navigation.pageName}
          </Link>
        ))}
      </div>
    </>
  )
}

export default Menu