import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const input_data = req.query;
  const venue_id = input_data["venue_id"];

  const mission = await prisma.mission.findMany({
    where: {
        venue_id: Number(venue_id)
    }
  })
    
  res.json(mission)
}

export default handler;
