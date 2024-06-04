/*
  Warnings:

  - You are about to drop the `Motobike` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Motobike";

-- CreateTable
CREATE TABLE "Motorbike" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "brand_id" TEXT,
    "cc" INTEGER,
    "type" TEXT,
    "transmission" TEXT,
    "price" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Motorbike_pkey" PRIMARY KEY ("id")
);
