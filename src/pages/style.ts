import { styled } from "@/styles/stitches.config"

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "4rem",
  paddingBottom: "3rem",
  gap: "1.875rem",
})

export const MiddleSection = styled("div", {
  width: "50%",
  display: "flex",
  flexDirection: "column",
  gap: ".9375rem",
  maxWidth: "1300px",
  alignSelf: "flex-start",
})
