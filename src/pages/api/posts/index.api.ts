import { prisma } from "@/lib/prisma"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(404).end()
  }

  if (req.method === "GET") {
    const posts = await prisma.posts.findMany({
      include: {
        comment: {
          include: {
            replies: true,
          },
        },
        _count: {
          select: { comment: true },
        },
      },
    })

    return res.status(200).json(posts)
  }

  if (req.method === "POST") {
    const post = await prisma.posts.findUnique({
      where: {
        id: req.body.id,
      },
    })

    if (post) {
      await prisma.posts.update({
        where: {
          id: req.body.id,
        },
        data: {
          upVotes: post.upVotes + 1,
        },
      })

      return res.status(201).end()
    }
  }
}
