import prisma from '../src/config/database';

async function main() {

// await prisma.medical_insurance.createMany({
//   data: [
//     {
//       "name": "Bradesco",
//     },
//     {
//       "name": "Intermédica",
//     },
//     {
//       "name": "Sulmérica"
//     },
//     {
//       "name": "Porto Seguro"
//     },
//     {
//       "name": "Mediservice"
//     },
//     {
//       "name": "Central Nacional Unimed"
//     },
//   ]
// })

await prisma.medical_insurance_plan.createMany({
  data: [
    {
      "name": "Saude Top",
      "medical_insurance_id":1
    },
    {
      "name": "Rede Nacional",
      "medical_insurance_id":1
    },
    {
      "name": "Personal",
      "medical_insurance_id":1
    },
    {
      "name": "Tim Nacional",
      "medical_insurance_id":1
    },
    {
      "name": "Rede Ideal",
      "medical_insurance_id":1
    },
    {
      "name": "Nacional Flex",
      "medical_insurance_id":1
    },
    {
      "name": "Smart 200",
      "medical_insurance_id":2
    },
    {
      "name": "Smart 400",
      "medical_insurance_id":2
    },
    {
      "name": "Max 300",
      "medical_insurance_id":2
    },
    {
      "name": "Rede Imasf",
      "medical_insurance_id":2
    },
    {
      "name": "Smart Básico",
      "medical_insurance_id":2
    },
    {
      "name": "Smart Prime",
      "medical_insurance_id":2
    },
    {
      "name": "Rede Master",
      "medical_insurance_id":3
    },
    {
      "name": "Rede Essencial",
      "medical_insurance_id":3
    },
    {
      "name": "Classic",
      "medical_insurance_id":3
    },
    {
      "name": "Prata",
      "medical_insurance_id":4
    },
    {
      "name": "Ouro",
      "medical_insurance_id":4
    },
    {
      "name": "Bronze",
      "medical_insurance_id":4
    },
    {
      "name": "Branco",
      "medical_insurance_id":5
    },
    {
      "name": "Bronze",
      "medical_insurance_id":5
    },
    {
      "name": "Tupy",
      "medical_insurance_id":5
    },
    {
      "name": "Unimed Fesp",
      "medical_insurance_id":6
    },
    {
      "name": "Unimed Rio",
      "medical_insurance_id":6
    },
  ]
})

}
main().then(()=> "Registro feito com sucesso!").catch(e => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});
