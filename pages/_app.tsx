import 'sanitize.css'
import '@/styles/global.css'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

const theme = {}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
