/*
  Warnings:

  - You are about to drop the `Jogos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JogosOnPerfis` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `JogosOnPerfis` DROP FOREIGN KEY `JogosOnPerfis_ibfk_2`;

-- DropForeignKey
ALTER TABLE `JogosOnPerfis` DROP FOREIGN KEY `JogosOnPerfis_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Perfis` DROP FOREIGN KEY `Perfis_ibfk_1`;

-- DropTable
DROP TABLE `Jogos`;

-- DropTable
DROP TABLE `JogosOnPerfis`;

-- AddForeignKey
ALTER TABLE `Perfis` ADD CONSTRAINT `Perfis_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
