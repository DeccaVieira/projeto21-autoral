/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `personal_data` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "personal_data_user_id_key" ON "personal_data"("user_id");
