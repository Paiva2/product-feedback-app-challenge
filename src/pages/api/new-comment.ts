import { prisma } from "@/lib/prisma"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(404).end()
  }

  const post = await prisma.posts.findUnique({
    where: {
      id: req.body.id,
    },
  })

  if (post) {
    await prisma.comment.create({
      data: {
        name: "paiva",
        username: "@paiva",
        iconImage:
          "https://i.postimg.cc/cC3ZKyyP/052c177ea1956fbd4b22c9ee508ee67a.jpg",
        description: req.body.comment,
        postsId: post.id,
      },
    })
  }

  return res.status(201).end()
}
