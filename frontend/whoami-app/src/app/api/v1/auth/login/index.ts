import {NextApiRequest, NextApiResponse} from "next";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

type LoginRequest = {
  username: string,
  password: string,
}

class SuspendEmailError extends Error {
}

// prismaでログイン
const tryLogin = async ({username, password}: LoginRequest) => {
  const user = await prisma.user.findUnique({
    where: {
      username: username
    }
  });

  const hashedPassword = user?.salt && bcrypt.hashSync(password, user?.salt||"")

  if (user && (hashedPassword === user.password_hash)) {
    return {
      id: user.id,
      username: user.username,
      full_name: user.full_name,
      email: user.email,
      is_admin: user.is_admin
    }
  } else {
    return null;
  }
}

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const {username, password} = await req.body;
  try {
    // prismaでログイン
    const userInfo = await tryLogin({username, password});
    if (!userInfo) {
      res.status(400).json({message: "ユーザー名もしくはパスワードが正しくありません。"});
      return;
    }

    return res.status(200).json(userInfo);
  } catch (error: any) {
    if (error) {
      res.status(500).json({message: "サーバーエラーが発生しました"});
    }
  }
}

export default loginRoute;
