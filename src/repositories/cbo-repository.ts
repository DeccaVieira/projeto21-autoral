import prisma from "../config/database";

async function getCboRepository() {
  return prisma.cbo.findMany();
}
const cboRepository = {
  getCboRepository
}
export default cboRepository;