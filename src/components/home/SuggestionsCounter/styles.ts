import { styled } from "@/styles/stitches.config"

export const CounterContainer = styled("div", {
  w: "100%",
  backgroundColor: "#373F68",
  br: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",

  "div:last-child": {
    display: "flex",
    alignItems: "center",
  },
})

export const Wrapper = styled("div", {
  display: "flex",
  w: "100%",
  pd: "5px 15px",
  justifyContent: "space-between",
})

export const Suggestions = styled("span", {
  fontSize: "1.125rem",
  fontWeight: "700",
  gap: ".625rem",
})

export const SuggestionsController = styled("div", {
  display: "flex",
  alignItems: "center",
  color: "#fff",
  gap: "50px",

  span: {
    display: "flex",
    alignItems: "center",
  },
})

export const SortBy = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: ".3125rem",

  button: {
    all: "unset",
    color: "#fff",
    fontSize: ".875rem",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    gap: ".3125rem",
    cursor: "pointer",
  },
})

export const NewFeedbackButton = styled("button", {
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
})
