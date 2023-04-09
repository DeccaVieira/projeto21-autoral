-- CreateTable
CREATE TABLE "schedule" (
    "id" SERIAL NOT NULL,
    "professional_id" INTEGER NOT NULL,
    "date_schedule" DATE NOT NULL,
    "hour_schedule" CHAR(5) NOT NULL,
    "patient_id" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "schedule_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_professional_id_fkey" FOREIGN KEY ("professional_id") REFERENCES "health_professional"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
