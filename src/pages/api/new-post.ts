import { prisma } from "@/lib/prisma"
import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  message?: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    return res.status(404).end()
  }

  prisma.posts.create({
    data: {
      title: req.body.title,
      description: req.body.description,
      upVotes: 0,
      category: req.body.category,
    },
  })

  return res.status(201).end({ message: "Feedback created with success!" })
}
