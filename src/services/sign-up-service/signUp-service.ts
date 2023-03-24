import { User } from "../../protocols/signUp-protocols";
import signUpRepository from "../../repositories/signUp-repository";
import signUpErrors from "./errors";
import prisma from "../../config/database";

async function createUser(cpf, name, email, hashPassword, phoneNumber) {
  if (!cpf || !name || !email || !hashPassword || !phoneNumber) {
    throw signUpErrors.emailAndPasswordRequired();
  }
  const userExists = await signUpRepository.findEmail(email);
  console.log(userExists, "user");

   if (userExists) {
    throw signUpErrors.emailAlreadyExists();
  }
  await signUpRepository.createUser(
    cpf,
    name,
    email,
    hashPassword,
    phoneNumber
  );
}

const signUpService = {
  createUser,
};

export default signUpService;
