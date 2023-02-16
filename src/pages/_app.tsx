import SiderMenu from '@/components/SiderMenu'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SiderMenu />
      <Component {...pageProps} />
    </>
  )
}
