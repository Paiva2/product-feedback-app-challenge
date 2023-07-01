import { styled } from "@/styles/stitches.config"

export const NotFoundContainer = styled("div", {
  backgroundColor: "#fff",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
})

export const Wrapper = styled("div", {
  padding: "9.375rem",
  textAlign: "center",
  fontFamily: "Jost, sans-serif",
})

export const TextsWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
})

export const Text = styled("p", {
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
