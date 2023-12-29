import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Open_Sans } from 'next/font/google'
import { ReactElement, ReactNode, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ToastContainer } from 'react-toastify';
// import NextNprogress from 'nextjs-progressbar';
// import 'nprogress/nprogress.css'
// import 'react-toastify/dist/ReactToastify.css'
import { Router } from 'next/router'
import { ThemeProvider } from '@material-tailwind/react'
import { customTheme } from '@/styles/custome_theme'
import { Toaster } from 'react-hot-toast'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open'
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false // default: true
    }
  }
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const [loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', () => setLoading(true))
  Router.events.on('routeChangeComplete', () => setLoading(false))

  return getLayout(
    <>
      <ThemeProvider value={customTheme}>
        <QueryClientProvider client={queryClient}>
          <main className={openSans.className}>
            <Toaster />
            <Component {...pageProps} />
          </main>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}
