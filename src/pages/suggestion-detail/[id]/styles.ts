import { styled } from "@/styles/stitches.config"
import { keyframes } from "@stitches/react"

export const CommentsContainer = styled("div", {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "6.25rem",
  paddingBottom: "6.25rem",
  gap: "1.875rem",

  "@sm": {
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
  },
})

export const CommentsWrapper = styled("div", {
  width: "40%",
  display: "flex",
  flexDirection: "column",
  gap: ".9375rem",
  maxWidth: "1200px",
  alignSelf: "flex-start",

  "@media(max-width: 940px)": {
    width: "92%",
  },
})

export const ReplySectionContaner = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.875rem",
  position: "relative",

  "&::after": {
    position: "absolute",
    content: "''",
    w: "0.1px",
    h: "100%",
    left: 20,
    backgroundColor: "rgba(100,113,150,.1)",
    top: "50%",
    transform: "translate(-50%,-50%)",
  },

  "> div": {
    display: "flex",
    gap: "1.5625rem",
    width: "90%",
    alignSelf: "flex-end",
    paddingTop: "2.1875rem",
    paddingBottom: "2.1875rem",

    "@sm": {
      gap: ".625rem",
    },
  },
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

  "@sm": {
    fontSize: "1rem",
  },
})

export const CommentSectionWrapper = styled("div", {
  display: "flex",
  pd: ".625rem 2.1875rem 1.875rem 2.1875rem",
  gap: "1.25rem",
  flexDirection: "column",
  backgroundColor: "#fff",

  "@sm": {
    pd: "1.25rem",
  },
})

export const Comment = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: ".9375rem",
  w: "100%",
})

export const Reply = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: ".9375rem",
  w: "100%",

  "@sm": {
    w: "85%",

    textAreA: {
      fontSize: ".8125rem",
    },
  },
})

export const CommentWrapper = styled("div", {
  display: "flex",
  gap: "1.5625rem",

  "@sm": {
    gap: ".625rem",
  },
})

export const Text = styled("p", {
  margin: 0,
  color: "#647196",

  ".replied-user": {
    color: "#ad1fea",
    fontWeight: "600",
  },

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

        "@sm": {
          fontSize: ".8125rem",
        },
      },
    },
  },
})

export const CommentImage = styled("div", {
  display: "flex",
  flexDirection: "column",
  aligItems: "center",
  gap: ".9375rem",
  position: "relative",

  img: {
    br: "9999px",
  },

  "&::after": {
    content: "var(--has-reply)",
    w: "0.1px",
    h: "100%",
    backgroundColor: "rgba(100,113,150,.1)",
    alignSelf: "center",
  },
})

export const ReplyImage = styled("div", {
  img: {
    br: "9999px",
  },
})

export const CommentInformations = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  gap: "1.875rem",

  ".comment-and-reply-wrapper:not(:last-child)": {
    paddingBottom: ".625rem",
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

    "@sm": {
      fontSize: ".8125rem",
    },

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
    pd: ".9375rem",
    fontSize: "1rem",
    fontFamily: "Jost, sans-serif",
    color: "#3a4374",
    resize: "none",
    height: "4.375rem",
    overflowY: "auto",

    "&:focus": {
      outline: "1px solid #4661e6",
    },

    "@sm": {
      width: "auto",
      fontSize: ".8125rem",
    },
  },

  p: {
    color: "#3a4374",
    fontWeight: "700",
    fontSize: "1.125rem",

    "@sm": {
      fontSize: "1rem",
    },
  },

  "@sm": {
    pd: ".625rem .9375rem",
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

    "@sm": {
      pd: ".625rem 1.5625rem",
    },
  },

  p: {
    color: "#647196",
    fontSize: ".8125rem",
    fontWeight: "400",
  },
})

const showModal = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(-15%)",
  },

  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
})

export const ReplyArea = styled("div", {
  w: "100%",
  display: "flex",
  alignItems: "center",
  gap: ".9375rem",

  animation: `${showModal} .3s forwards ease-in-out`,

  animationFillMode: "both",

  button: {
    all: "unset",
    color: "#fff",
    fontWeight: "700",
    fontSize: ".875rem",
    backgroundColor: "#ad1fea",
    pd: ".75rem 1.875rem",
    br: "10px",
    cursor: "pointer",
    alignSelf: "end",
    transition: ".3s ease-in-out",

    "&:hover": {
      backgroundColor: "#C75AF6",
    },

    "@sm": {
      padding: "10px 25px",
      fontSize: ".75rem",
    },
  },

  textArea: {
    flex: 1,
    resize: "none",
    height: "3.125rem",
    overflowY: "auto",
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

    "@sm": {
      fontSize: ".8125rem",
    },
  },
})
