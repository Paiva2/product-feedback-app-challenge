/*
  Warnings:

  - Made the column `iconImage` on table `Comment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `iconImage` on table `Reply` required. This step will fail if there are existing NULL values in that column.
  - Made the column `commentId` on table `Reply` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Reply` DROP FOREIGN KEY `Reply_commentId_fkey`;

-- AlterTable
ALTER TABLE `Comment` MODIFY `iconImage` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Reply` MODIFY `iconImage` VARCHAR(191) NOT NULL,
    MODIFY `commentId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Reply` ADD CONSTRAINT `Reply_commentId_fkey` FOREIGN KEY (`commentId`) REFERENCES `Comment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
