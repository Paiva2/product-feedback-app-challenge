import { styled } from "@/styles/stitches.config"

export const RoadmapContainer = styled("div", {
  w: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  paddingTop: "5rem",
  paddingBottom: "5rem",
})

export const RoadmapWrapper = styled("div", {
  w: "55%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "1.5625rem",
  maxWidth: "75rem",
})

export const Topbar = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#373f68",
  w: "100%",
  br: "10px",
  pd: "1.5625rem 1.875rem",
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
  },

  span: {
    display: "flex",
    alignItems: "center",
    gap: ".625rem",

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
  },
})

export const CardsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5625rem",
  w: "35%",
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

  "&::before": {
    content: "''",
    w: "100%",
    top: 0,
    left: 0,
    h: ".375rem",
    br: "9999px",
    backgroundColor: "#f49f85",
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
    backgroundColor: "#f49f85",
  },
})

export const CardResume = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: ".625rem",

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
