import { styled } from "@/styles/stitches.config"

export const RoadmapContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: "1300px",
  margin: "0 auto",
  padding: "3rem 1.25rem",
})

export const RoadmapWrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "1.5625rem",
  alignItems: "center",
})

export const Topbar = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#373f68",
  br: "10px",
  width: "100%",
})

export const TopbarWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "1.25rem 1.875rem",
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

export const ColumnsWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1.875rem",
})

export const CardsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5625rem",
  w: "35%",
  alignSelf: "flex-start",
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
