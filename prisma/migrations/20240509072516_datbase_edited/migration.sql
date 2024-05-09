/*
  Warnings:

  - Added the required column `compName` to the `Text` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `text` ADD COLUMN `compName` VARCHAR(100) NOT NULL;
