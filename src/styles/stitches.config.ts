import { globalCss } from "@stitches/react"
import { createStitches } from "@stitches/react"

export const { styled, css, getCssText } = createStitches({
  media: {
    sm: "(max-width: 768px)",
  },
  utils: {
    m: (value: string) => ({
      margin: value,
    }),
    mt: (value: string) => ({
      marginTop: value,
    }),
    mr: (value: string) => ({
      marginRight: value,
    }),
    mb: (value: string) => ({
      marginBottom: value,
    }),
    ml: (value: string) => ({
      marginLeft: value,
    }),

    pd: (value: string) => ({
      padding: value,
    }),
    pt: (value: string) => ({
      paddingTop: value,
    }),
    pr: (value: string) => ({
      paddingRight: value,
    }),
    pb: (value: string) => ({
      paddingBottom: value,
    }),
    pl: (value: string) => ({
      paddingLeft: value,
    }),

    w: (value: string) => ({
      width: value,
    }),
    h: (value: string) => ({
      height: value,
    }),

    br: (value: string) => ({
      borderRadius: value,
    }),
  },
})

export const globalStyles = globalCss({
  body: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    backgroundColor: "#f7f8fd",
    fontFamily: "Jost, sans-serif",
    position: "relative",
  },
})
