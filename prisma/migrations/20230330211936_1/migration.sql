/*
  Warnings:

  - You are about to drop the column `medical_insurance_id` on the `personal_data` table. All the data in the column will be lost.
  - You are about to drop the column `medical_insurance_number` on the `personal_data` table. All the data in the column will be lost.
  - You are about to drop the column `medical_insurance_plan_id` on the `personal_data` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `personal_data` table. All the data in the column will be lost.
  - Added the required column `medical_insurance` to the `personal_data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medical_insurance_plan` to the `personal_data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medical_number` to the `personal_data` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "personal_data" DROP CONSTRAINT "personal_data_medical_insurance_id_fkey";

-- DropForeignKey
ALTER TABLE "personal_data" DROP CONSTRAINT "personal_data_medical_insurance_plan_id_fkey";

-- AlterTable
ALTER TABLE "personal_data" DROP COLUMN "medical_insurance_id",
DROP COLUMN "medical_insurance_number",
DROP COLUMN "medical_insurance_plan_id",
DROP COLUMN "phone_number",
ADD COLUMN     "medical_insurance" INTEGER NOT NULL,
ADD COLUMN     "medical_insurance_plan" INTEGER NOT NULL,
ADD COLUMN     "medical_number" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "candidate_health_professional" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "uf_registration" TEXT NOT NULL,
    "registration_type" TEXT NOT NULL,
    "professional_number" INTEGER NOT NULL,
    "phone_number" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "candidate_health_professional_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "personal_data" ADD CONSTRAINT "personal_data_medical_insurance_fkey" FOREIGN KEY ("medical_insurance") REFERENCES "medical_insurance"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "personal_data" ADD CONSTRAINT "personal_data_medical_insurance_plan_fkey" FOREIGN KEY ("medical_insurance_plan") REFERENCES "medical_insurance_plan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
