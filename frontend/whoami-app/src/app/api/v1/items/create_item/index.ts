import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

type CreateItemRequest = {
    profile_id: number
    mission_id?: number
    title: string
    content: string
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const input_data = req.body;
  const {profile_id, mission_id, title, content}: CreateItemRequest = input_data;

  let is_mission: boolean = false;
  if (mission_id) {
      const mission = await prisma.mission.findFirst({
          where: {
              id: mission_id
            }
        })
        is_mission = Boolean(mission)
    }

  let point: number;
  is_mission ? point = 3 : point = 1;

  const item = await prisma.item.create({
    data: {
        profile_id,
        mission_id: is_mission ? mission_id : null,
        title,
        content,
        point
    }
  })
  res.json(item)
}

export default handler;
