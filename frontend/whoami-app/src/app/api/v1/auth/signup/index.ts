import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt"

type SignupRequest = {
    username: string
    full_name: string
    email : string
    password: string
    is_admin: boolean
}

const CRYPTO_ROUNDS = 10

const createUser = async ({username, full_name, email, password, is_admin}:SignupRequest) => {
    // Check if username already exists
    const existingUser = await prisma.user.findUnique({
        where: {
            username: username
        }
    });

    if (existingUser) {
        throw new Error('このユーザー名はすでに利用されています');
    }

    const salt = bcrypt.genSaltSync(CRYPTO_ROUNDS)
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = await prisma.user.create({
        data: {
            username,
            full_name,
            password_hash: hashedPassword,
            email,
            is_admin,
            salt: salt
        },
    });

    return newUser;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const input_data: SignupRequest = req.body;

  try {
    const newUser = await createUser(input_data);

    console.log("signup success", newUser);

    return res.status(200).json(newUser);
  } catch (error) {
      return res.status(400).json({ message: "Username already existed."});
  }
}

export default handler;
