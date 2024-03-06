CREATE TABLE `berlin-breweries`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `brewery name` VARCHAR(255) NOT NULL,
    `brewery address` VARCHAR(255) NOT NULL,
    `brewery url` VARCHAR(255) NOT NULL
);
CREATE TABLE `craftbeers`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `berlin-breweries-id` INT NOT NULL,
    `beer name` VARCHAR(255) NOT NULL,
    `flavor` VARCHAR(255) NOT NULL,
    `type/style` VARCHAR(255) NOT NULL,
    `ABV` INT NOT NULL,
    `color` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `craftbeers` ADD CONSTRAINT `craftbeers_berlin_breweries_id_foreign` FOREIGN KEY(`berlin-breweries-id`) REFERENCES `berlin-breweries`(`id`);