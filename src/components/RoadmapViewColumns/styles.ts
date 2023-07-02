import { styled } from "@/styles/stitches.config"
import { keyframes } from "@stitches/react"

const menuActive = keyframes({
  from: {
    transform: "translateX(-100%)",
  },

  to: {
    transform: "translateX(0%)",
  },
})

export const CardsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5625rem",
  w: "35%",
  alignSelf: "flex-start",

  "@sm": {
    animation: `${menuActive} forwards .2s ease-in-out`,
    justifyContent: "center",
    w: "100%",
  },
})

export const CardSectionTitleWrapper = styled("div", {})

export const Text = styled("p", {
  margin: 0,

  variants: {
    model: {
      titleSection: {
        color: "#3a4374",
        fontSize: "1.125rem",
        fontWeight: "700",
      },
      sectionDescription: {
        color: "#647196",
        fontSize: "1rem",
      },
    },
  },
})

export const Card = styled("div", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  gap: "1.25rem",
  br: "8px",
  pd: "1.875rem 1.875rem 1.25rem 1.875rem",
  position: "relative",
  justifyContent: "space-around",
  height: "15.625rem",

  "@media(max-width: 940px)": {
    pd: "1.25rem .9375rem 1.25rem .9375rem",
  },

  "@sm": {
    pd: "1.875rem 1.875rem 1.25rem 1.875rem",
  },

  "&::before": {
    content: "''",
    w: "100%",
    top: 0,
    left: 0,
    h: ".375rem",
    br: "100px 100px 0px 0px",
    backgroundColor: "var(--status-color)",
    position: "absolute",
  },
})

export const CategoryPin = styled("span", {
  display: "flex",
  alignItems: "center",
  gap: ".625rem",
  fontSize: "1rem",
  color: "#647196",

  "&::before": {
    content: "''",
    w: ".4375rem",
    h: ".4375rem",
    br: "9999px",
    backgroundColor: "var(--status-color)",
  },
})

export const CardResume = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: ".625rem",
  height: "100%",
  overflowY: "auto",
  cursor: "pointer",

  "&:hover": {
    "p:first-child": {
      color: "#4661e6",
    },
  },

  ".feature-pin": {
    span: {
      color: "#4661e6",
      fontWeight: "700",
      fontSize: ".8125rem",
      br: "10px",
      backgroundColor: "#f2f4ff",
      pd: ".3125rem .9375rem",
      userSelect: "none",
    },
  },
})

export const CardFooter = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  span: {
    color: "#3a4374",
    fontSize: "1rem",
    fontWeight: "700",
  },

  button: {
    all: "unset",
    display: "flex",
    alignItems: "center",
    gap: ".3125rem",
    fontSize: ".8125rem",
    fontWeight: "700",
    br: "10px",
    cursor: "pointer",
    pd: ".625rem .9375rem",
    backgroundColor: "#f2f4ff",
    color: "#3a4374",
    transition: ".2s ease-in-out",

    "&:hover": {
      backgroundColor: "#cfd7ff",
    },
  },
})
