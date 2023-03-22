import prisma from "../config/database";
import { Users } from "protocols/signUp-protocols";

async function findEmail(email: string) {
  return prisma.users.findFirst({
    where: { email },
  });
}

async function createUser(cpf:number, name:string, email:string, hashPassword:string, phoneNumber:number ) {
  return prisma.users.create({
    data: {
      cpf: cpf,
      name: name,
      email: email,
      password: hashPassword,
      phone_number: phoneNumber,
    },
  });
}

const signUpRepository = {
  findEmail,
  createUser,
};

export default signUpRepository;
