import prisma from '../src/config/database';

async function main() {
  
//   await prisma.users.createMany({
//     data:[
//       {
//       "cpf": "46103940060",
//       "name":"Samara Adriana",
//       "email":"samara@email.com",
//       "password":"19EC7E",
//       "phone_number":"11988246332",
//       "isdoctor":true
//   },
//   {
//     "cpf": "44854750006",
//     "name":"Antonio Novaes",
//     "email":"antonio@resilience.com",
//     "password":"B77C00",
//     "phone_number":"11995247657",
//     "isdoctor":true
// },
// {
//   "cpf": "60199721009",
//   "name":"Celma Fonseca",
//   "email":"celma@resilience.com",
//   "password":"699EC2",
//   "phone_number":"11999358345",
//   "isdoctor":true
// },
// {
//   "cpf": "95409205073",
//   "name":"Renata Machado",
//   "email":"renata@resilience.com",
//   "password":"BA97A2",
//   "phone_number":"11981154728",
//   "isdoctor":true
// },
// {
//   "cpf": "21524695009",
//   "name":"Tabatha Cristina",
//   "email":"tabatha@resilience.com",
//   "password":"C1D33B",
//   "phone_number":"11971841363",
//   "isdoctor":true
// },
// {
//   "cpf": "16371440080",
//   "name":"Nelia Nascimento",
//   "email":"nelia@resilience.com",
//   "password":"E809F5",
//   "phone_number":"11987088187",
//   "isdoctor":true
// },
// {
//   "cpf": "39557984023",
//   "name":"Matheus Neurine",
//   "email":"matheus@resilience.com",
//   "password":"FE78DE",
//   "phone_number":"11980172283",
//   "isdoctor":true
// },
// {
//   "cpf": "32884146008",
//   "name":"Antonela Martins",
//   "email":"antonela@resilience.com",
//   "password":"866853",
//   "phone_number":"11979745388",
//   "isdoctor":true
// },
// {
//   "cpf": "72885890053",
//   "name":"Camille Noronha",
//   "email":"camille@resilience.com",
//   "password":"6D155B",
//   "phone_number":"11974771545",
//   "isdoctor":true
// },

// {
//   "cpf": "07856150084",
//   "name":"Shigueco Xan",
//   "email":"shigueco@resilience.com",
//   "password":"CB6B60",
//   "phone_number":"11985537673",
//   "isdoctor":true
// },
// {
//   "cpf": "56433243002",
//   "name":"Regina Renatti",
//   "email":"regina@resilience.com",
//   "password":"E63D7D",
//   "phone_number":"11996723751",
//   "isdoctor":true
// },
// {
//   "cpf": "21655866079",
//   "name":"Nayara Melo",
//   "email":"nayara@resilience.com",
//   "password":"F6243E",
//   "phone_number":"11968735125",
//   "isdoctor":true
// },
// {
//   "cpf": "72207368009",
//   "name":"Gio Vitoria",
//   "email":"gio@resilience.com",
//   "password":"434DBA",
//   "phone_number":"11981664636",
//   "isdoctor":true
// },
// {
//   "cpf": "44084969010",
//   "name":"Dani Schenier",
//   "email":"dani@resilience.com",
//   "password":"D0E2A0",
//   "phone_number":"11991547518",
//   "isdoctor":true
// }
// ]


//   })
  // await prisma.cbo.createMany({
  //   data:[
  //     {
  //       "cbo_code": 223605, 
  //       "role": "Fisioterapeuta",
  //       "procedure_code": 50000160,
  //           },
  //     {
  //       "cbo_code": 225105, 
  //       "role": "Acupunturista",
  //       "procedure_code": 31601014,
  //     },
  //     {
  //       "cbo_code": 251510, 
  //       "role": "Psicólogo(a)",
  //       "procedure_code": 50000470,
  //     },
  //     {
  //       "cbo_code": 223810, 
  //       "role": "Fonoaudiólogo(a)",
  //       "procedure_code": 50000616,
  //     },
  //     {
  //       "cbo_code": 223605, 
  //       "role": "Fisioterapeuta especialista em RPG",
  //       "procedure_code": 50000446,
  //     },
  //     {
  //       "cbo_code": 223710, 
  //       "role": "Nutricionista",
  //       "procedure_code": 20101074,
  //     },
  //   ]
  // });

//   await prisma.health_professional.createMany({
//     data:[
//     {
//       "name": "Antonio Novaes",
//       "cbo_id": 55,
//    "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfUGGEqyaZazDGx8KA_48yuJywLd78OMwNw&usqp=CAU",
//    "professional_number":15262
//     },
//     {
//       "name": "Samara Adriana",
//       "cbo_id": 55,
//    "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_pAL44u3UqubAgDq_pUuJkJRsf9HTeUUdbQ&usqp=CAU",
//    "professional_number":19617  
//   },
//     {
//       "name": "Celma Fonseca",
//       "cbo_id": 55,
//    "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXvBB-kwZ-XggzKYDi3lKNNrIOVwe5hjJ3aw&usqp=CAU",
//    "professional_number":29714 
//   },
//     {
//       "name": "Renata Machado",
//       "cbo_id": 56,
//    "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbO48WT-LMTwvp_eAofcfPB-YToA6Nl7kVA&usqp=CAU",
//    "professional_number":29673  
//   },
//     {
//       "name": "Tabatha Cristina",
//       "cbo_id": 57,
//    "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56vBaRmqn2EMGN6__3XZ6gizgUFwIwrskqg&usqp=CAU",
//    "professional_number":26035  
//   },
//     {
//       "name": "Nelia Nascimento",
//       "cbo_id": 57,
//    "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7XxKhCpvnyRzXe9JzjueDPjNqucPgb2kfA&usqp=CAU",
//    "professional_number":14558  
//   },
//     {
//       "name": "Matheus Neurine",
//       "cbo_id": 58,
//    "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDb5tzP4xmb4EJGIXvI8oUi-akFhY3SftcO0276-ceW3iiz9RiBw-4YH3oblegrbWOORI&usqp=CAU",
//    "professional_number":16648
//     },
//     {
//       "name": "Antonela Martins",
//       "cbo_id": 59,
//    "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLD0CgJVXRpnmhys0Ife4Ok5G3kIBZ4Oz0OXuUQlMNxqm8kVJ1um6wkMKp4Ixd7GHE_-8&usqp=CAU",
//    "professional_number":29549
//     },
//     {
//       "name": "Camille Noronha",
//       "cbo_id": 59,
//    "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NAWozdqfIU6Q6R9Mue_ZbDXuyYQ7stYiMg&usqp=CAU",
//    "professional_number":11719
//     },
//     {
//       "name": "Shigueco Xan",
//       "cbo_id": 56,
//    "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWS5DyLR8hBZCcIaLifkFn47C1067A-JL3yw&usqp=CAU",
//    "professional_number":14815
//     },
//     {
//       "name": "Regina Renatti",
//       "cbo_id": 60,
//    "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu6ui6X0eoPeFcKogy34H8Ram7tTtzMwHJuA&usqp=CAU",
//    "professional_number":20870
//     },
//     {
//       "name": "Nayara Melo",
//       "cbo_id": 60,
//    "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5bjZ4xVVc-ogauPocQIIVtuRs3JaeMv2bw&usqp=CAU",
//    "professional_number":12458
//     },
//     {
//       "name": "Gio Vitoria",
//       "cbo_id": 58,
//    "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFyZ-LSE6y_Fayz0nKTrY2D73d7sNHLWOUQ&usqp=CAU",
//    "professional_number":19915
//     },
//     {
//       "name": "Dani Schenier",
//       "cbo_id": 58,
//    "picture_professional": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFYdR_Dp8WUXdbsYh8ZInuSRMKYKJrXXiOO1_COb84LflVQruzuU12bQUBrhCSYdC3nU&usqp=CAU",
//    "professional_number":17750
//     },
//     ]
//   })
//   await prisma.medical_insurance.createMany({
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
      "medical_insurance_id":37
    },
    {
      "name": "Rede Nacional",
      "medical_insurance_id":37
    },
    {
      "name": "Personal",
      "medical_insurance_id":37
    },
    {
      "name": "Tim Nacional",
      "medical_insurance_id":37
    },
    {
      "name": "Rede Ideal",
      "medical_insurance_id":37
    },
    {
      "name": "Nacional Flex",
      "medical_insurance_id":37
    },
    {
      "name": "Smart 200",
      "medical_insurance_id":38
    },
    {
      "name": "Smart 400",
      "medical_insurance_id":38
    },
    {
      "name": "Max 300",
      "medical_insurance_id":38
    },
    {
      "name": "Rede Imasf",
      "medical_insurance_id":38
    },
    {
      "name": "Smart Básico",
      "medical_insurance_id":38
    },
    {
      "name": "Smart Prime",
      "medical_insurance_id":38
    },
    {
      "name": "Rede Master",
      "medical_insurance_id":39
    },
    {
      "name": "Rede Essencial",
      "medical_insurance_id":39
    },
    {
      "name": "Classic",
      "medical_insurance_id":39
    },
    {
      "name": "Prata",
      "medical_insurance_id":40
    },
    {
      "name": "Ouro",
      "medical_insurance_id":40
    },
    {
      "name": "Bronze",
      "medical_insurance_id":40
    },
    {
      "name": "Branco",
      "medical_insurance_id":41
    },
    {
      "name": "Bronze",
      "medical_insurance_id":41
    },
    {
      "name": "Tupy",
      "medical_insurance_id":41
    },
    {
      "name": "Unimed Fesp",
      "medical_insurance_id":42
    },
    {
      "name": "Unimed Rio",
      "medical_insurance_id":42
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
