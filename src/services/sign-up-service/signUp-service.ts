import { User } from "../../protocols/signUp-protocols";
import signUpRepository from "../../repositories/signUp-repository";
import signUpErrors from "./errors";

async function createUser(cpf, name, email, hashPassword, phoneNumber) {
   
  if (!email || !hashPassword) {
    throw signUpErrors.emailAndPasswordRequired();
  }
  const userExists = await signUpRepository.findEmail(email);
  
  if (userExists) {
    throw signUpErrors.emailAlreadyExists();
  }
  await signUpRepository.createUser(cpf, name, email, hashPassword, phoneNumber );
}

const signUpService = {
  createUser,
};

export default signUpService;
