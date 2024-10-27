import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

type CompleteMissionRequest = {
    user_id: string
    mission_id: number
    completed: boolean
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const input_data = req.body;
  const {user_id, mission_id, completed}: CompleteMissionRequest=input_data;

  const mission = await prisma.mission.findFirst({
    where: {
        id: mission_id
    }
  })
  const updatedMission = await prisma.mission.update({
    where: {
        id: mission_id,
    },
    data: {
        count: mission?.count&&mission.count+1
    }
  })
    
  res.json(updatedMission)
}

export default handler;
