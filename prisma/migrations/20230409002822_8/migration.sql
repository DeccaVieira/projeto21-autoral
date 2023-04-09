/*
  Warnings:

  - Added the required column `professional_number` to the `health_professional` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "health_professional" ADD COLUMN     "professional_number" INTEGER NOT NULL;
