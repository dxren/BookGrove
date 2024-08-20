/*
  Warnings:

  - You are about to drop the column `analysisId` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the `Analysis` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `summary` to the `BookAnalysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summary` to the `DocumentAnalysis` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Analysis" DROP CONSTRAINT "Analysis_userId_fkey";

-- AlterTable
ALTER TABLE "BookAnalysis" ADD COLUMN     "summary" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Document" DROP COLUMN "analysisId";

-- AlterTable
ALTER TABLE "DocumentAnalysis" ADD COLUMN     "summary" TEXT NOT NULL;

-- DropTable
DROP TABLE "Analysis";

-- CreateTable
CREATE TABLE "UserAnalysis" (
    "id" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserAnalysis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAnalysis_userId_key" ON "UserAnalysis"("userId");

-- AddForeignKey
ALTER TABLE "UserAnalysis" ADD CONSTRAINT "UserAnalysis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
