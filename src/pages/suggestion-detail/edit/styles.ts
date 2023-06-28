import { styled } from "@/styles/stitches.config"

export const EditFeedbackContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100vh",
})

export const EditFeedbackWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "3.75rem",
  justifyContent: "center",
  height: "100%",
})

export const GoBackWrapper = styled("div", {
  a: {
    display: "flex",
    alignItems: "center",
    color: "#647196",
    fontSize: ".875rem",
    fontWeight: "700",
    textDecoration: "none",
    gap: ".625rem",

    "&:hover": {
      textDecoration: "underline",
    },
  },
})

export const EditFeedbackCard = styled("div", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  br: "10px",
  pd: "2.5rem",
  position: "relative",
  boxShadow: "9px 13px 9px -6px rgba(245,245,245,1)",

  ".edit-icon": {
    position: "absolute",
    top: "-30px",
  },
})

export const EditFeedbackForm = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",

  ".error-msg": {
    "input, textarea": {
      border: "1px solid #d73737",

      "&:focus": {
        outline: "1px solid #d73737",
      },
    },

    "p:last-child": {
      margin: 0,
      color: "#d73737",
      fontSize: ".875rem",
    },
  },

  label: {
    display: "flex",
    w: "100%",
    flexDirection: "column",
    gap: ".3125rem",

    "input, button, textArea": {
      border: 0,
      backgroundColor: "#f7f8fd",
      br: "10px",
      pd: ".9375rem 1.25rem",
      fontSize: "1rem",
      fontFamily: "Jost, sans-serif",
      color: "#3a4374",

      "&:focus": {
        outline: "1px solid #4661e6",
      },
    },

    textArea: {
      resize: "none",
      height: "4.375rem",
      overflowY: "auto",
    },
  },
})

export const CategoryLabel = styled("label", {
  position: "relative",

  button: {
    cursor: "pointer",
  },
})

export const CategoryDropDownMenu = styled("ul", {
  position: "absolute",
  transition: "opacity .2s ease-in-out, visibility .2s",
  display: "flex",
  padding: "0",
  listStyle: "none",
  background: "#fff",
  top: "100%",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  boxShadow: "0 10px 40px -7px rgba(55,63,104,.35)",
  br: "10px",
  opacity: "var(--control-modal)",
  visibility: "var(--control-visibility)",
  zIndex: 1000,

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
    alignItems: "center",

    "&:hover": {
      color: "#ad1fea",
    },
  },
})

export const Text = styled("p", {
  margin: 0,
  color: "#3a4374",

  variants: {
    model: {
      title: {
        marginBottom: "1.875rem",
        fontSize: "1.5rem",
        fontWeight: "700",
      },
      labelTitle: {
        fontSize: ".875rem",
        fontWeight: "700",
      },
      description: {
        fontSize: ".875rem",
        color: "#647196",
      },
    },
  },
})

export const DropdownButton = styled("button", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "1rem",

  svg: {
    transition: ".3s ease-in-out",
    transform: "var(--control-modal)",
  },
})

export const SaveChangesButtonWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
})

export const Button = styled("button", {
  all: "unset",
  color: "#fff",
  fontWeight: "700",
  pd: ".625rem 1.25rem",
  br: "10px",
  cursor: "pointer",
  transition: ".3s ease-in-out",

  "&:hover": {
    opacity: ".7",
  },

  variants: {
    model: {
      delete: {
        backgroundColor: "#d73737",
      },
      saveChanges: {
        backgroundColor: "#ad1fea",
      },
    },
  },
})

export const StatusLabel = styled("label", {
  position: "relative",

  button: {
    cursor: "pointer",
  },
})

export const StatusDropdownMenu = styled("ul", {
  position: "absolute",
  transition: "opacity .2s ease-in-out, visibility .2s",
  display: "flex",
  padding: "0",
  listStyle: "none",
  background: "#fff",
  top: "100%",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  boxShadow: "0 10px 40px -7px rgba(55,63,104,.35)",
  br: "10px",
  opacity: "var(--control-modal)",
  visibility: "var(--control-visibility)",
  zIndex: 1000,

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
    alignItems: "center",

    "&:hover": {
      color: "#ad1fea",
    },
  },
})
