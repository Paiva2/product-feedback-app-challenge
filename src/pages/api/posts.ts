import { prisma } from "@/lib/prisma"
import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  id: number
  title: string
  description: string
  upVotes: number
  createdAt: Date
  updatedAt: Date
  category: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") {
    return res.status(404).end()
  }

  const posts = await prisma.posts.findMany()

  return res.status(200).json(posts)
}
