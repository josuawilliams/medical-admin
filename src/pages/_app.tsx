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
// import Loader from '@/components/atom/loader/Loader';
import { Router } from 'next/router'
import { Backdrop } from '@mui/material'
import { ThemeProvider } from '@material-tailwind/react'
import { customTheme } from '@/styles/custome_theme'

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
      {/* <NextNprogress
				color="#FF7A00"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/> */}
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
        open={loading}>
        {/* <Loader /> */}
      </Backdrop>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider value={customTheme}>
          <main className={openSans.className}>
            <Component {...pageProps} />
            {/* <ToastContainer /> */}
          </main>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}
