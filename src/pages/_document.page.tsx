import { getCssText } from "@/styles/stitches.config"
import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
