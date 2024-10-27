import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const input_data = req.query;
  const profile_id = input_data["profile_id"];

  const profile = await prisma.profile.findFirst({
    where: {
        id: Number(profile_id)
    }
  })
    
  res.json(profile)
}

export default handler;
