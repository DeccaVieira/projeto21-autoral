import { ResultBuilder } from "pg";
import prisma from "../config/database";
import { Scheduling } from "../protocols/scheduling-protocols";

async function createScheduling(scheduling) {
  try {
    return prisma.scheduling.create({
      data: {
        professional_id: scheduling.professional_id,
        patient_id: scheduling.patient_id,
        hour: scheduling.hour,
        schedule_date: scheduling.schedule_date,
        share_data: scheduling.share_data,
        cbo: scheduling.cbo,
        quantity: scheduling.quantity,
      },
    });
  } catch (err) {
    console.log(err, "rep");
  }
}

async function filterScheduling(hour, professional_id) {
  console.log(hour, "repository");

  return prisma.scheduling.findMany({
    where: { hour: hour, professional_id: professional_id },
  });
}
async function professionalScheduling(schedule_date, id) {
  console.log("professional");

  return prisma.scheduling.findMany({
    where: {
      professional_id: id,
      schedule_date: schedule_date,
    },
    include: { users: true},
  
    orderBy: {
      hour: "asc",
    },
  });
}

async function dataUser(id) {
  return prisma.users.findUnique({
    where: { id },
  });
}

async function professionalById(id) {
  console.log("professional");

  return prisma.users.findUnique({
    where: {
      id: id,
    },
  });
}
async function professionalByName(name) {
  console.log(name);
  
  return prisma.health_professional.findFirst({
    where: {
      name,
    },
  });
}

async function patientScheduling(id) {


  return prisma.users.findMany({
    where: { id },
    include: {
      scheduling: true,
    },
  });
}

const schedulingRepository = {
  createScheduling,
  filterScheduling,
  professionalScheduling,
  patientScheduling,
  professionalById,
  professionalByName,
  dataUser,
};

export default schedulingRepository;
