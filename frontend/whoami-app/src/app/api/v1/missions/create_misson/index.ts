import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

type MissionRequest = {
    user_id: string
    capacity: number
    title: string
    venue_id: number
}
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const input_data = req.body;
  const {user_id, capacity, title, venue_id}: MissionRequest = input_data;

  const mission = await prisma.mission.create({
    data: {
      venue_id,
      capacity,
      count: capacity,
      title,
    }
  })
    
  res.json(mission)
}

export default handler;
