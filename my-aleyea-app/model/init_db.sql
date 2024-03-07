--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists craftbeer;
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE `breweries`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `brewery name` VARCHAR(255) NOT NULL,
    `brewery address` VARCHAR(255) NOT NULL,
    `brewery url` VARCHAR(255) NOT NULL,
    `location` VARCHAR(255) NOT NULL
);
CREATE TABLE `craftbeers`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `breweries-id` INT NOT NULL,
    `beer name` VARCHAR(255) NOT NULL,
    `flavor` VARCHAR(255) NOT NULL,
    `type/style` VARCHAR(255) NOT NULL,
    `ABV` INT NOT NULL,
    `color` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `craftbeers` ADD CONSTRAINT `craftbeers_breweries_id_foreign` FOREIGN KEY(`breweries-id`) REFERENCES `breweries`(`id`);