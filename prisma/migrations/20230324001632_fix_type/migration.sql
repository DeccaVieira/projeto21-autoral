-- CreateTable
CREATE TABLE "cbo" (
    "id" SERIAL NOT NULL,
    "cbo_code" INTEGER,
    "role" TEXT NOT NULL,

    CONSTRAINT "cbo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cid" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "health_professional" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cbo_id" INTEGER NOT NULL,
    "served_cities_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "health_professional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medical_insurance" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "medical_insurance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medical_insurance_plan" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "medical_insurance_id" INTEGER NOT NULL,

    CONSTRAINT "medical_insurance_plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personal_data" (
    "id" SERIAL NOT NULL,
    "phone_number" TEXT NOT NULL,
    "medical_insurance_id" INTEGER NOT NULL,
    "medical_insurance_plan_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "medical_insurance_number" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "personal_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "cpf" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "phone_number" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "health_professional" ADD CONSTRAINT "health_professional_cbo_id_fkey" FOREIGN KEY ("cbo_id") REFERENCES "cbo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "health_professional" ADD CONSTRAINT "health_professional_served_cities_id_fkey" FOREIGN KEY ("served_cities_id") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "medical_insurance_plan" ADD CONSTRAINT "medical_insurance_plan_medical_insurance_id_fkey" FOREIGN KEY ("medical_insurance_id") REFERENCES "medical_insurance"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "personal_data" ADD CONSTRAINT "personal_data_medical_insurance_id_fkey" FOREIGN KEY ("medical_insurance_id") REFERENCES "medical_insurance"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "personal_data" ADD CONSTRAINT "personal_data_medical_insurance_plan_id_fkey" FOREIGN KEY ("medical_insurance_plan_id") REFERENCES "medical_insurance_plan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "personal_data" ADD CONSTRAINT "personal_data_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
