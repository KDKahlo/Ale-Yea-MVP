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
    `breweryname` VARCHAR(255) NOT NULL,
    `breweryurl` VARCHAR(255) NOT NULL,
    `location` VARCHAR(255) NOT NULL
);
CREATE TABLE `craftbeers` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `breweries_id` BIGINT NOT NULL,
    `beername` VARCHAR(255) NOT NULL,
    `flavor` VARCHAR(255) NOT NULL,
    `type_style` VARCHAR(255) NOT NULL,
    `ABV` INT NOT NULL,
    `color` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `guest_beer` TINYINT(1) NOT NULL,
    `image_url` VARCHAR(400) NOT NULL
);
-- junction table to allow 1 brewerery to be linked to many craft beers and 1 craft beer to many breweries.
CREATE TABLE `brewery_craftbeer` (
    `brewery_id` BIGINT UNSIGNED NOT NULL,
    `craftbeer_id` BIGINT UNSIGNED NOT NULL,
    PRIMARY KEY (`brewery_id`, `craftbeer_id`),
    CONSTRAINT `fk_brewery_id` FOREIGN KEY (`brewery_id`) REFERENCES `breweries` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_craftbeer_id` FOREIGN KEY (`craftbeer_id`) REFERENCES `craftbeers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);