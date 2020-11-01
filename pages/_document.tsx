import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import SWRegister from '@/sw-register'
import { ServerStyleSheet } from 'styled-components'
import { ServerStyleSheets as MaterialServerStyleSheets } from '@material-ui/core'

export default class extends Document {
  static async getInitialProps(ctx: any): Promise<any> {
    const styledComponentsSheet = new ServerStyleSheet()
    const materialUiSheets = new MaterialServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = (): any =>
        originalRenderPage({
          enhanceApp: (App) => (
            props
          ): React.ReactElement<{
            sheet: ServerStyleSheet
          }> =>
            styledComponentsSheet.collectStyles(
              materialUiSheets.collect(<App {...props} />)
            ),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <React.Fragment key="styles">
            {initialProps.styles}
            {styledComponentsSheet.getStyleElement()}
            {materialUiSheets.getStyleElement()}
          </React.Fragment>
        ),
      }
    } finally {
      styledComponentsSheet.seal()
    }
  }

  render(): React.ReactElement {
    return (
      <Html lang="ja-JP">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <SWRegister />
        </body>
      </Html>
    )
  }
}
