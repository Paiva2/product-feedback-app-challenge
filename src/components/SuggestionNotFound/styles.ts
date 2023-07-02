import { styled } from "@/styles/stitches.config"

export const NotFoundContainer = styled("div", {
  backgroundColor: "#fff",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  br: "10px",
  boxShadow: "9px 13px 9px -6px #000)",

  "@sm": {
    w: "90%",
  },
})

export const Wrapper = styled("div", {
  padding: "9.375rem",
  textAlign: "center",
  fontFamily: "Jost, sans-serif",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "2.5rem",

  "@sm": {
    padding: "3.125rem .625rem",
  },
})

export const TextsWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "65%",

  "@sm": {
    w: "100%",
  },
})

export const Text = styled("p", {
  margin: 5,

  variants: {
    model: {
      title: {
        fontWeight: "900",
        fontSize: "1.5rem",
        color: "#3a4374",
      },
      normal: {
        fontSize: "1rem",
        color: "#647196",
      },
    },
  },
})
