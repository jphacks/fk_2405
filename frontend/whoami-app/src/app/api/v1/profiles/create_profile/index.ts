import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

type CreateProfileRequest = {
    user_id: string
    title: string
    venue_id: number
}
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const input_data = req.body;
  const {user_id, title, venue_id}: CreateProfileRequest = input_data;

  const profile = await prisma.profile.create({
    data: {
      user_id,
      venue_id,
      title,
    }
  })
    
  res.json(profile)
}

export default handler;
