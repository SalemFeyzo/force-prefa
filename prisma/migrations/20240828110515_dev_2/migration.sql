-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "localeId" INTEGER;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE SET NULL ON UPDATE CASCADE;
