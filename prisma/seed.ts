import prisma from '../src/config/database';

async function main() {
  await prisma.cid.createMany({
    data: [
      {
        "name": "E660",
        "description": "Obesidade causada por excesso de calorias"
      },
      {
        "name": "F32",
        "description": "Ansiedade Generalizada"
      }
    ]
  })
}
main().then(()=> "Registro feito com sucesso!").catch(e => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
})