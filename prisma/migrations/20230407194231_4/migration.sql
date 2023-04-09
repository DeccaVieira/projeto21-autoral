/*
  Warnings:

  - Added the required column `procedure_code` to the `cbo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cbo" ADD COLUMN     "procedure_code" INTEGER NOT NULL;
