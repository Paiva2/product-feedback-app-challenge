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

  "@sm": {
    gap: 0,
    paddingTop: 0,
    paddingBottom: "20px",
  },
})

export const SuggestionsWrapper = styled("div", {
  display: "flex",
  gap: ".9375rem",
  width: "100%",
  flexDirection: "column",

  "@sm": {
    width: "90%",
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
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
})
