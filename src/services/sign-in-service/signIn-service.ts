import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { exclude } from "../../utils/prisma.utils";
import siginInRepository from "../../repositories/signIn-repository";
import signInErrors from "./errors";
import { UserSelect } from "../../protocols/signIn-protocols";

async function userLogin(email: string, password: string) {
  if (!email || !password) {
    throw signInErrors.emailAndPasswordRequired();
  }
  const userExists = await siginInRepository.validateUserExists(email);
console.log(userExists,"userExists");

  if (!userExists) {
    throw signInErrors.userDoesNotExist();
  }
if(userExists.isdoctor === true){
  compare(password, userExists.password)
  const token = await createToken(userExists);
  console.log(comparePassword, "compare");

  return {
    user: exclude(userExists, "password"),
    token,
  };
  }
  await comparePassword(password, userExists.password);
  console.log(comparePassword, "compare");
  
  const token = await createToken(userExists);

  return {
    user: exclude(userExists, "password"),
    token,
  };
}

async function createToken(userExists) {

  const token = jwt.sign(
    { id: userExists.id, email: userExists.email },
    process.env.JWT_SECRET
  );
  return token;
}
async function compare(password: string, userPassword: string){
const passwordOk = await password === userPassword
console.log(passwordOk);
if (!passwordOk) {
  throw signInErrors.wrongEmailOrPassword();
}
}

async function comparePassword(password: string, userPassword: string) {
  
  const passwordOk = await bcrypt.compare(password, userPassword);
  if (!passwordOk) {
    throw signInErrors.wrongEmailOrPassword();
  }
}

const signInService = {
  userLogin,
};
export default signInService;
