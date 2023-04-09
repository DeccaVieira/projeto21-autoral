import prisma from '../src/config/database';

async function main() {
  
  await prisma.cbo.createMany({
    data:[
      {
        "cbo_code": 223605, 
        "role": "Fisioterapia",
        "procedure_code": 50000160,
            },
      {
        "cbo_code": 225105, 
        "role": "Acupuntura",
        "procedure_code": 31601014,
      },
      {
        "cbo_code": 251510, 
        "role": "Psicologia",
        "procedure_code": 50000470,
      },
      {
        "cbo_code": 223810, 
        "role": "Fonoaudiologia",
        "procedure_code": 50000616,
      },
      {
        "cbo_code": 223605, 
        "role": "RPG",
        "procedure_code": 50000446,
      },
      {
        "cbo_code": 223710, 
        "role": "Nutrição",
        "procedure_code": 20101074,
      },
    ]
  })
  await prisma.health_professional.createMany({
    data:[
    {
      "name": "Antonio Novaes",
      "cbo_id": 1,
   "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfUGGEqyaZazDGx8KA_48yuJywLd78OMwNw&usqp=CAU",
   "professional_number":1254
    },
    {
      "name": "Samara Adriana",
      "cbo_id": 1,
   "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_pAL44u3UqubAgDq_pUuJkJRsf9HTeUUdbQ&usqp=CAU",
   "professional_number":1254  
  },
    {
      "name": "Celma Fonseca",
      "cbo_id": 2,
   "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXvBB-kwZ-XggzKYDi3lKNNrIOVwe5hjJ3aw&usqp=CAU",
   "professional_number":1254 
  },
    {
      "name": "Renata Machado",
      "cbo_id": 2,
   "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbO48WT-LMTwvp_eAofcfPB-YToA6Nl7kVA&usqp=CAU",
   "professional_number":1254  
  },
    {
      "name": "Tabatha Cristina",
      "cbo_id": 3,
   "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56vBaRmqn2EMGN6__3XZ6gizgUFwIwrskqg&usqp=CAU",
   "professional_number":1254  
  },
    {
      "name": "Nelia Nascimento",
      "cbo_id": 3,
   "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7XxKhCpvnyRzXe9JzjueDPjNqucPgb2kfA&usqp=CAU",
   "professional_number":1254  
  },
    {
      "name": "Matheus Neurine",
      "cbo_id": 4,
   "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDb5tzP4xmb4EJGIXvI8oUi-akFhY3SftcO0276-ceW3iiz9RiBw-4YH3oblegrbWOORI&usqp=CAU",
   "professional_number":1254
    },
    {
      "name": "Antonela Martins",
      "cbo_id": 4,
   "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLD0CgJVXRpnmhys0Ife4Ok5G3kIBZ4Oz0OXuUQlMNxqm8kVJ1um6wkMKp4Ixd7GHE_-8&usqp=CAU",
   "professional_number":1254
    },
    {
      "name": "Camille Noronha",
      "cbo_id": 5,
   "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NAWozdqfIU6Q6R9Mue_ZbDXuyYQ7stYiMg&usqp=CAU",
   "professional_number":1254
    },
    {
      "name": "Shigueco Xan",
      "cbo_id": 5,
   "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWS5DyLR8hBZCcIaLifkFn47C1067A-JL3yw&usqp=CAU",
   "professional_number":1254
    },
    {
      "name": "Regina Renatti",
      "cbo_id": 6,
   "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu6ui6X0eoPeFcKogy34H8Ram7tTtzMwHJuA&usqp=CAU",
   "professional_number":1254
    },
    {
      "name": "Nayara Melo",
      "cbo_id": 6,
   "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5bjZ4xVVc-ogauPocQIIVtuRs3JaeMv2bw&usqp=CAU",
   "professional_number":1254
    },
    {
      "name": "Gio Vitoria",
      "cbo_id": 1,
   "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFyZ-LSE6y_Fayz0nKTrY2D73d7sNHLWOUQ&usqp=CAU",
   "professional_number":1254
    },
    {
      "name": "Dani Schenier",
      "cbo_id": 2,
   "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFYdR_Dp8WUXdbsYh8ZInuSRMKYKJrXXiOO1_COb84LflVQruzuU12bQUBrhCSYdC3nU&usqp=CAU",
   "professional_number":1254
    },
    ]
  })
  await prisma.medical_insurance.createMany({
  data: [
    {
      "name": "Bradesco",
    },
    {
      "name": "Intermédica",
    },
    {
      "name": "Sulmérica"
    },
    {
      "name": "Porto Seguro"
    },
    {
      "name": "Mediservice"
    },
    {
      "name": "Central Nacional Unimed"
    },
  ]
})

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
