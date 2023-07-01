import { styled } from "@/styles/stitches.config"

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "4rem",
  paddingBottom: "3rem",
  gap: "1.875rem",

  "@media(max-width: 940px)": {
    flexDirection: "column",
  },
})

export const MiddleSection = styled("div", {
  width: "65%",
  display: "flex",
  flexDirection: "column",
  gap: ".9375rem",
  maxWidth: "900px",
  alignSelf: "flex-start",

  "@media(max-width: 940px)": {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
})
