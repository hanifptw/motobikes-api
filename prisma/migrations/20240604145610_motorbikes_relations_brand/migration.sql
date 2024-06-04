/*
  Warnings:

  - You are about to drop the column `brand_id` on the `Motorbike` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Motorbike` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Motorbike` table. All the data in the column will be lost.
  - Added the required column `brandId` to the `Motorbike` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Motorbike" DROP COLUMN "brand_id",
DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "brandId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "founder" TEXT,
    "headqurter" TEXT,
    "foundedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Motorbike" ADD CONSTRAINT "Motorbike_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
