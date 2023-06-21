import { styled } from "@/styles/stitches.config"

export const CardContainer = styled("div", {
  backgroundColor: "#ffff",
  width: "100%",
  br: "10px",
  boxShadow: "9px 13px 9px -6px rgba(245,245,245,1)",
})

export const CardWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1.875rem 2.1875rem",
})

export const UpVoteButton = styled("button", {
  all: "unset",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: ".8125rem",
  fontWeight: "700",
  br: "10px",
  cursor: "pointer",
  pd: ".75rem .625rem",
  backgroundColor: "#f2f4ff",
  color: "#3a4374",
  transition: ".2s ease-in-out",

  "&:hover": {
    backgroundColor: "#cfd7ff",
  },
})

export const CategoryPin = styled("span", {
  color: "#4661e6",
  fontWeight: "700",
  fontSize: ".8125rem",
  br: "10px",
  backgroundColor: "#f2f4ff",
  padding: ".3125rem .9375rem",
  userSelect: "none",
})

export const FeedbackResumeContainer = styled("div", {
  display: "flex",
  gap: "1.875rem",
})

export const FeedbackResume = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: ".625rem",
})

export const Text = styled("p", {
  margin: 0,

  variants: {
    model: {
      resumeTitle: {
        color: "#3a4374",
        fontWeight: "700",
        fontSize: "1.125rem",
      },
      resumeDescription: {
        color: "#657196",
        fontSize: "1rem",
      },
    },
  },
})

export const CommentsQuantity = styled("span", {
  display: "flex",
  alignItems: "center",
  gap: ".3125rem",
  color: "#3a4374",
  fontWeight: "700",
})
