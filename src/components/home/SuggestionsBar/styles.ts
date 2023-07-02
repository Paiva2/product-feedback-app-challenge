import { styled } from "@/styles/stitches.config"

export const CounterContainer = styled("div", {
  w: "100%",
  backgroundColor: "#373F68",
  br: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",

  "@sm": {
    br: "0",
  },
})

export const Wrapper = styled("div", {
  display: "flex",
  w: "100%",
  pd: ".3125rem .9375rem",
  justifyContent: "space-between",

  "@sm": {
    padding: ".625rem .5rem",
  },
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
  gap: "3.125rem",
  w: "65%",

  span: {
    display: "flex",
    alignItems: "center",

    "@sm": {
      display: "none",
    },
  },

  "@sm": {
    width: "auto",
  },
})

export const SortBy = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: ".3125rem",
  position: "relative",
  w: "45%",

  svg: {
    transform: "rotate(0deg)",
    transition: ".3s ease-in-out",
  },

  ".openSort": {
    svg: {
      transform: "rotate(180deg)",
    },
  },

  "@sm": {
    fontSize: ".8125rem",
    width: "auto",
  },
})

export const SortByFilterModal = styled("div", {
  position: "absolute",
  top: "55px",
  background: "#fff",
  width: "100%",
  transition: "all .3s ease-in-out",
  opacity: "var(--control-modal-opacity)",
  visibility: "var(--control-modal-visibility)",
  br: "10px",

  ul: {
    transition: "all .3s ease-in-out",
    margin: 0,
    display: "flex",
    padding: "0",
    listStyle: "none",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    visibility: "var(--control-modal-visibility)",
    boxShadow: "0 10px 40px -7px rgba(55,63,104,.35)",
    br: "10px",

    "li:not(:last-child)": {
      borderBottom: "1px solid rgba(58,67,115,0.15)",
    },

    li: {
      display: "flex",
      pd: ".625rem .9375rem",
      justifyContent: "space-between",
      fontSize: "1rem",
      color: "#647196",
      cursor: "pointer",
      transition: ".2s ease-in-out",

      "&:hover": {
        color: "#ad1fea",
      },
    },
  },
})

export const SortByButton = styled("button", {
  all: "unset",
  color: "#fff",
  fontSize: ".875rem",
  fontWeight: "700",
  display: "flex",
  alignItems: "center",
  gap: ".3125rem",
  cursor: "pointer",

  "@sm": {
    fontSize: ".75rem",
  },
})

export const NewFeedBackButtonWrapper = styled("div", {
  display: "flex",
  alignItems: "center",

  button: {
    all: "unset",
    color: "#fff",
    fontWeight: "700",
    backgroundColor: "#ad1fea",
    pd: ".625rem .9375rem",
    br: "10px",
    cursor: "pointer",
    transition: ".3s ease-in-out",

    "&:hover": {
      backgroundColor: "#C75AF6",
    },

    "@sm": {
      padding: ".625rem 10px",
      fontSize: ".8125rem",
    },
  },
})
