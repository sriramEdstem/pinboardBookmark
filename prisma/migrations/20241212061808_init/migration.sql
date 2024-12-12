/*
  Warnings:

  - You are about to drop the column `collectionId` on the `Bookmark` table. All the data in the column will be lost.
  - You are about to drop the `Collection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CollectionShare` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Bookmark" DROP CONSTRAINT "Bookmark_collectionId_fkey";

-- DropForeignKey
ALTER TABLE "Bookmark" DROP CONSTRAINT "Bookmark_userId_fkey";

-- DropForeignKey
ALTER TABLE "Collection" DROP CONSTRAINT "Collection_userId_fkey";

-- DropForeignKey
ALTER TABLE "CollectionShare" DROP CONSTRAINT "CollectionShare_collectionId_fkey";

-- DropForeignKey
ALTER TABLE "CollectionShare" DROP CONSTRAINT "CollectionShare_userId_fkey";

-- AlterTable
ALTER TABLE "Bookmark" DROP COLUMN "collectionId";

-- DropTable
DROP TABLE "Collection";

-- DropTable
DROP TABLE "CollectionShare";

-- DropTable
DROP TABLE "User";
