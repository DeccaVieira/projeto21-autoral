import prisma from "../config/database";

async function validateUserExists(email) {
  return prisma.users.findFirst({
    where: { email: email },
  });
}

async function validateUserExistsId(id) {
  return prisma.users.findFirst({
    where: { id },
  });
} 

const siginInRepository = {
  validateUserExists, validateUserExistsId
}

export default siginInRepository;