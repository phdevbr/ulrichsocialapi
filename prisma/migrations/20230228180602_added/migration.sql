/*
  Warnings:

  - Added the required column `content` to the `thoughts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "thoughts" ADD COLUMN     "content" TEXT NOT NULL;
