import { prisma } from "@/lib/prisma"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { post_id } = req.query

  if (
    req.method !== "GET" &&
    req.method !== "POST" &&
    req.method !== "DELETE" &&
    req.method !== "PATCH"
  ) {
    return res.status(404).end()
  }

  const post = await prisma.posts.findUnique({
    where: {
      id: Number(post_id),
    },
    include: {
      comment: true,
      reply: true,
      _count: {
        select: { comment: true },
      },
    },
  })

  if (req.method === "PATCH") {
    const comment = await prisma.comment.findFirst({
      where: {
        postsId: post?.id,
      },
    })

    await prisma.reply.create({
      data: {
        iconImage: "",
        name: "",
        username: "",
        description: req.body.reply,
        commentId: comment?.id,
        postsId: post?.id,
      },
    })
  }

  if (req.method === "DELETE") {
    await prisma.posts.delete({
      where: {
        id: post?.id,
      },
    })

    return res.status(200).json({ message: "Feedback deleted successfully!" })
  }

  if (req.method === "POST") {
    await prisma.posts.update({
      where: {
        id: post?.id,
      },
      data: {
        title: req.body.feedbackTitle.text,
        category: req.body.feedbackCategory.text,
        status: req.body.feedbackStatus.text,
        description: req.body.feedbackDetail.text,
      },
    })

    return res.status(200).json({ message: "Feedback edited successfully!" })
  }

  return res.status(200).json(post)
}
