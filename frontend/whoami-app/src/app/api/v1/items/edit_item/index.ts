import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

type EditItemRequest = {
    profile_id: number
    title: string
    content: string
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const input_data = req.body;
  const {profile_id, title, content}: EditItemRequest = input_data;

  const item = await prisma.item.update({
    where: {
        id: profile_id
    },
    data: {
        title,
        content,
    }
  })
  res.json(item)
}

export default handler;
