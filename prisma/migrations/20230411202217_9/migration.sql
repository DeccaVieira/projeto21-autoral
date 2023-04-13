/*
  Warnings:

  - You are about to drop the column `created_at` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "schedule" ALTER COLUMN "date_schedule" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "created_at",
ADD COLUMN     "isdoctor" BOOLEAN DEFAULT false;

-- CreateTable
CREATE TABLE "schedule_hour" (
    "id" SERIAL NOT NULL,
    "hour" TEXT NOT NULL,
    "date_schadule_id" INTEGER,

    CONSTRAINT "schedule_hour_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "schedule_hour" ADD CONSTRAINT "schedule_hour_date_schadule_id_fkey" FOREIGN KEY ("date_schadule_id") REFERENCES "schedule"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
