-- DropForeignKey
ALTER TABLE "Motorbike" DROP CONSTRAINT "Motorbike_brandId_fkey";

-- AlterTable
ALTER TABLE "Motorbike" ALTER COLUMN "brandId" DROP NOT NULL,
ALTER COLUMN "brandId" SET DEFAULT 1;

-- AddForeignKey
ALTER TABLE "Motorbike" ADD CONSTRAINT "Motorbike_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;
