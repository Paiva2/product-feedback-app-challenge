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
        name: "Random User",
        username: `@randomusername${Math.floor(Math.random() * 9000) + 1000}`,
        iconImage:
          "https://i.postimg.cc/mD8C6kTc/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg",
        description: req.body.comment,
        postsId: post.id,
      },
    })
  }

  return res.status(201).end()
}
