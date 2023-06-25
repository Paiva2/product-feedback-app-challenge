import { prisma } from "@/lib/prisma"
import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(404).end()
  }

  await prisma.posts.create({
    data: {
      title: req.body.feedbackTitle.text,
      description: req.body.feedbackDetail.text,
      category: req.body.feedbackCategory.text,
      upVotes: 0,
    },
  })

  return res.status(201).json({ message: "Feedback created with success!" })
}
