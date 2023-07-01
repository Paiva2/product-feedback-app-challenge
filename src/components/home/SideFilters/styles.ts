import { styled } from "@/styles/stitches.config"

export const FilterContainer = styled("div", {
  alignSelf: "flex-start",
  display: "flex",
  flexDirection: "column",

  "@media(max-width: 940px)": {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
})

export const FilterWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: ".9375rem",

  "@media(max-width: 940px)": {
    display: "flex",
    alignItems: "center",
    width: "90%",
    gap: ".625rem",
    flexDirection: "row",
  },
})

export const GradientCardWrapper = styled("div", {
  "@media(max-width: 940px)": {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-end",
  },
})

export const TopCard = styled("div", {
  fontSize: "1.25rem",
  background:
    "radial-gradient(128.88% 128.88% at 103.9% -10.39%,#e84d70 0%,#a337f6 53.09%,#28a7ed 100%)",
  br: "10px",
  padding: "4.0625rem 4.0625rem 1.5625rem 1.25rem",
  transition: ".2s ease-in-out",

  "&:hover": {
    opacity: ".9",
  },

  "@media(max-width: 940px)": {
    display: "flex",
    minWidth: "12.5rem",
    minHeight: "7.5rem",
    pd: "2.1875rem 0px 1.5625rem 1.5625rem",
  },
})

export const TopText = styled("p", {
  margin: 0,

  variants: {
    model: {
      cardTitle: {
        fontSize: "1.25rem",
        fontWeight: "700",
        color: "#fff",
      },
      cardDescription: {
        fontSize: ".9375rem",
        color: "hsla(0,0%,100%,.75)",
      },
    },
  },
})

export const FilterButtonsWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "100%",
  alignSelf: "flex-start",
  gap: ".9375rem",
  flexWrap: "wrap",
})

export const Filters = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  br: "10px",
  padding: "1.5625rem 0px 2.5rem .9375rem",
  background: "#fff",
  gap: ".625rem",
  maxWidth: "15.625rem",

  "@media(max-width: 940px)": {
    maxWith: "unset",
    flex: "1",
    minHeight: "7.5rem",
    maxHeight: "7.5rem",
    maxWidth: "unset",
  },
})

export const FilterButton = styled("button", {
  all: "unset",
  color: "var(--active-filter-color)",
  fontWeight: "700",
  fontSize: ".8125rem",
  br: "10px",
  backgroundColor: "var(--active-filter-bg)",
  padding: ".3125rem .9375rem",
  userSelect: "none",
  cursor: "pointer",
  transition: ".2s ease-in-out",

  "&:hover": {
    backgroundColor: "#cfd7ff",
  },

  "@media(max-width: 940px)": {
    pd: ".5625rem 1.5625rem",
  },
})

export const RoadmapWrapper = styled("div", {
  background: "#fff",
  padding: "1.5625rem 1.5625rem 2.5rem 20px",
  display: "flex",
  flexDirection: "column",
  br: "10px",
  gap: ".9375rem",

  "@media(max-width: 940px)": {
    width: "25%",
    minHeight: "7.5rem",
    maxHeight: "7.5rem",
  },
})

export const RoadmapTitle = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  fontWeight: "700",
  alignItems: "center",

  span: {
    fontSize: "1.125rem",
    color: "#3a4374",
  },

  a: {
    fontSize: ".8125rem",
    color: "#4661e6",
  },
})

export const Roadmaps = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: ".625rem",
})

export const Names = styled("span", {
  display: "flex",
  justifyContent: "unset",
  alignItems: "center",
  gap: ".625rem",

  "&::before": {
    content: "''",
    w: ".4375rem",
    h: ".4375rem",
    br: "9999px",
    backgroundColor: "var(--color-pin)",
  },
})

export const RoadmapNamesWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  color: "#3a4374",
  fontSize: "1rem",
  alignItems: "center",
})

export const RoadmapNumberCount = styled("p", {
  margin: 0,
  color: "#647196",
  fontWeight: "700",
})
