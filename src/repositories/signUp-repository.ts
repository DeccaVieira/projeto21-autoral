import prisma from "../config/database";

async function findEmail(email: string) {
  return prisma.users.findFirst({
    where: { email: email },
  });
}

async function createUser(cpf, name, email, hashPassword, phoneNumber) {
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
