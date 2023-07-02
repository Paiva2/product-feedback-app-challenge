import { styled } from "@/styles/stitches.config"
import { keyframes } from "@stitches/react"

export const RoadmapContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: "1300px",
  margin: "0 auto",
  padding: "3rem 1.25rem",

  "@sm": {
    padding: 0,
  },
})

export const RoadmapWrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "1.5625rem",
  alignItems: "center",

  "@sm": {
    gap: "1.25rem",
    paddingBottom: "1.25rem",
    w: "100%",
  },
})

export const Topbar = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#373f68",
  br: "10px",
  width: "100%",

  "@sm": {
    br: "0",
  },
})

export const TopbarWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "1.25rem 1.875rem",

  "@sm": {
    padding: "1.25rem",
  },
})

export const GoBackWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  color: "#fff",
  fontWeight: "700",
  gap: ".625rem",

  p: {
    margin: 0,
    fontSize: "1.5rem",

    "@sm": {
      fontSize: "1.125rem",
    },
  },

  span: {
    display: "flex",
    alignItems: "center",
    gap: ".625rem",

    "@sm": {
      fontSize: "13px",
    },

    a: {
      color: "inherit",
      textDecoration: "none",

      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
})

export const NewfeedbackButtonWrapper = styled("div", {
  button: {
    all: "unset",
    color: "#fff",
    fontWeight: "700",
    backgroundColor: "#ad1fea",
    pd: ".625rem 1.25rem",
    br: "10px",
    cursor: "pointer",
    transition: ".3s ease-in-out",

    "&:hover": {
      backgroundColor: "#C75AF6",
    },

    "@sm": {
      fontSize: "13px",
    },
  },
})

export const ColumnsWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1.875rem",

  "@sm": {
    w: "90%",
    flexDirection: "column",
    justifyContent: "center",
  },
})

export const MobileSubmenu = styled("div", {
  display: "none",

  "@sm": {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    borderBottom: "1px solid rgba(140,146,179,.25)",

    button: {
      all: "unset",
      fontSize: ".8125rem",
      fontWeight: "700",
      color: "#3a4374",
    },
  },
})

export const SubmenuWrapper = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: ".9375rem",
})

export const MenuButtonWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  w: "33.3%",
  position: "relative",
  h: "100%",

  "&.inactive": {
    opacity: 0.5,
    transition: ".3s ease-in-out",
  },

  "&.active": {
    transition: ".3s ease-in-out",

    "&::before": {
      content: "''",
      width: "100%",
      height: "4px",
      position: "absolute",
      top: "calc(100% + .6875rem)",
      background: "var(--identification)",
    },
  },
})
