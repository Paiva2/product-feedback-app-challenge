import { prisma } from "@/lib/prisma"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { post_id } = req.query

  if (req.method !== "GET") {
    return res.status(404).end()
  }

  const post = await prisma.posts.findUnique({
    where: {
      id: Number(post_id),
    },
    include: {
      comment: true,
      _count: {
        select: { comment: true },
      },
    },
  })

  return res.status(200).json(post)
}
