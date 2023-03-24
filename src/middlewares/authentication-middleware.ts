import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import siginInRepository from "../repositories/signIn-repository";

async function tokenAuthentication(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.header("Authorization");
  if (!authHeader) return UnauthorizedResponse(res);

  const token = authHeader.split(" ")[1];
  if (!token) return UnauthorizedResponse(res);

  const dataUser = getTokenData(token);

  const userExists = await siginInRepository.validateUserExists(dataUser?.email);
  if (!userExists) {
    return UnauthorizedResponse(res);
  }

  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET) as JWTUser;

    res.locals.signin = { id: dataUser.id, email: dataUser.email };

    return next();
  } catch (err) {
    throw new Error()
  }
}

function getTokenData(token: string) {
  let tokenData: jwt.JwtPayload;
  jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if (error) {
      return { type: "unauthorized", message: "invalid token" };
    }
    tokenData = decoded as jwt.JwtPayload;
  });
  return tokenData;
}

function UnauthorizedResponse(res: Response) {
  res.status(401).send("Transação não autorizada!");
}

export type AuthenticatedRequest = Request & JWTUser;

type JWTUser = {
  userId: number;
};

export default tokenAuthentication;
