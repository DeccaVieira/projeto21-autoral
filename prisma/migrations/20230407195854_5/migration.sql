/*
  Warnings:

  - You are about to drop the column `served_cities_id` on the `health_professional` table. All the data in the column will be lost.
  - You are about to drop the `cities` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `picture_professional` to the `health_professional` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "health_professional" DROP CONSTRAINT "health_professional_served_cities_id_fkey";

-- AlterTable
ALTER TABLE "health_professional" DROP COLUMN "served_cities_id",
ADD COLUMN     "picture_professional" TEXT NOT NULL;

-- DropTable
DROP TABLE "cities";
