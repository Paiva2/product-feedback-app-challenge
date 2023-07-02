import { styled } from "@/styles/stitches.config"
import { keyframes } from "@stitches/react"

export const spinAnimation = keyframes({
  "0%": { transform: "rotate(0deg)" },

  "100%": { transform: "rotate(360deg)" },
})

export const LoaderOverlay = styled("div", {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  w: "100%",
  h: "100%",
  inset: 0,
  zIndex: 100,
})

export const Loader = styled("div", {
  margin: "0 auto",
  border: "5px solid #f3f3f3",
  borderRadius: "100%",
  borderTop: "5px solid #3a4374",
  width: "60px",
  height: "60px",
  webkitAnimation: `${spinAnimation} 1s linear infinite`,
  animation: `${spinAnimation} 1s linear infinite`,
})
