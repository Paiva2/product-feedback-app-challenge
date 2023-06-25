import { styled } from "@/styles/stitches.config"

export const CommentsContainer = styled("div", {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "6.25rem",
  paddingBottom: "6.25rem",
  gap: "1.875rem",
})

export const CommentsWrapper = styled("div", {
  width: "40%",
  display: "flex",
  flexDirection: "column",
  gap: ".9375rem",
  maxWidth: "1200px",
  alignSelf: "flex-start",
})

export const Header = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  div: {
    display: "flex",
    alignItems: "center",
    gap: ".3125rem",
    fontWeight: "700",
    fontSize: ".875rem",

    button: {
      all: "unset",
      backgroundColor: "#4661e6",
      pd: ".75rem 1.875rem",
      br: "8px",
      color: "#fff",
      cursor: "pointer",
      transition: "opacity .2s ease-in-out",

      "&:hover": {
        opacity: ".8",
      },
    },

    a: {
      textDecoration: "none",
      color: "#647196",

      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
})

export const MiddleSection = styled("div", {
  w: "100%",
  display: "flex",
  br: "10px",
  gap: "1.5625rem",
  flexDirection: "column",
})

export const CommentQuantity = styled("p", {
  color: "#3a4374",
  fontWeight: "700",
  fontSize: "1.125rem",
})

export const CommentSectionWrapper = styled("div", {
  display: "flex",
  pd: ".625rem 2.1875rem 1.875rem 2.1875rem",
  gap: "1.25rem",
  flexDirection: "column",
  backgroundColor: "#fff",
})

export const Comment = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: ".9375rem",
})

export const Text = styled("p", {
  margin: 0,
  color: "#647196",

  variants: {
    model: {
      user: {
        color: "#3a4374",
        fontWeight: "700",
        fontSize: ".875rem",
      },
      username: {
        fontSize: ".75rem",
      },
      comment: {
        fontSize: ".9375rem",
      },
    },
  },
})

export const CommentImage = styled("div", {
  img: {
    br: "9999px",
  },
})

export const CommentInformations = styled("div", {
  display: "flex",
  gap: "1.25rem",

  "&:not(:last-child)": {
    paddingBottom: "1.25rem",
    borderBottom: "1px solid rgba(58,67,115,0.15)",
  },
})

export const UserInformations = styled("div", {
  display: "flex",
  alignItems: "center",
  w: "100%",
  justifyContent: "space-between",
  fontFamily: "jost, sans-serif",

  button: {
    all: "unset",
    cursor: "pointer",
    border: 0,
    font: 0,
    backgroundColor: "transparent",
    fontSize: ".875rem",
    color: "#4661e6",
    fontWeight: "700",

    "&:hover": {
      textDecoration: "underline",
    },
  },
})

export const Username = styled("div", {
  p: {
    margin: 0,
  },
})

export const NewCommentContainer = styled("div", {
  backgroundColor: "#fff",
  br: ".625rem",
  pd: ".625rem 2.1875rem 1.875rem 2.1875rem",
  display: "flex",
  flexDirection: "column",
  gap: ".9375rem",

  textarea: {
    border: 0,
    w: "95%",
    backgroundColor: "#f7f8fd",
    br: "10px",
    paddingLeft: "1.25rem",
    paddingTop: "1.25rem",
    fontSize: "1rem",
    fontFamily: "Jost, sans-serif",
    color: "#3a4374",
    resize: "none",
    height: "4.375rem",
    overflowY: "auto",

    "&:focus": {
      outline: "1px solid #4661e6",
    },
  },

  p: {
    color: "#3a4374",
    fontWeight: "700",
    fontSize: "1.125rem",
  },
})

export const PostComment = styled("div", {
  display: "flex",
  w: "100%",
  justifyContent: "space-between",
  alignItems: "center",

  button: {
    all: "unset",
    color: "#fff",
    fontWeight: "700",
    fontSize: ".875rem",
    backgroundColor: "#ad1fea",
    pd: ".75rem 1.875rem",
    br: "10px",
    cursor: "pointer",
    transition: ".3s ease-in-out",

    "&:hover": {
      backgroundColor: "#C75AF6",
    },
  },

  p: {
    color: "#647196 !important",
    fontSize: ".875rem !important",
    fontWeight: "400 !important",
  },
})
