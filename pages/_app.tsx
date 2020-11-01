import 'sanitize.css'
import '@/styles/global.css'
import { AppProps } from 'next/app'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import {
  ThemeProvider as MaterialUIThemeProvider,
  StylesProvider,
} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '@/styles/theme'

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <StylesProvider injectFirst>
      <MaterialUIThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </StyledComponentsThemeProvider>
      </MaterialUIThemeProvider>
    </StylesProvider>
  )
}
