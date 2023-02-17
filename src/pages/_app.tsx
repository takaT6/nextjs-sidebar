import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Dispatch, createContext, useState } from "react"


export const AppContext = createContext(
  {} as {
    isOpen: boolean;
    setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  }
)

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <AppContext.Provider value={{ isOpen, setIsOpen }}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
