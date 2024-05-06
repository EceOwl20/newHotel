-- CreateTable
CREATE TABLE `Text` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `textTr` VARCHAR(255) NOT NULL,
    `textEn` VARCHAR(255) NOT NULL,
    `textRu` VARCHAR(255) NOT NULL,
    `textDe` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
