import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

type CompleteMatchingRequest = {
    user_id: string
    partner_id: string
    item_id : number
    venue_id: number
}
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const input_data = req.body;
  const {user_id, partner_id, item_id, venue_id}: CompleteMatchingRequest = input_data;

  const mission = await prisma.matching.create({
    data: {
      user_id,
      partner_id,
      item_id,
      venue_id,
    }
  })
    
  res.json(mission)
}

export default handler;
