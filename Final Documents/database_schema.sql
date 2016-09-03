DROP TABLE IF EXISTS `Malware`;
CREATE TABLE `Malware` (
  `id` bigint,
  `name` varchar(260) character set utf8mb4,
  `ip` varchar(20),
  `port` int(11),
  `ip_num` bigint,
  `size` bigint,
  `sha1` varchar(120),
  `md5` varchar(120),
  `created_utc` datetime,
  `modified_utc` datetime,
  `user_agent` varchar(100),
  `base_user_agent` varchar(100),
  `protocol_id` bigint,
  `infection` varchar(100),
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_bin;


DROP TABLE IF EXISTS `GeoStat`;
CREATE TABLE `GeoStat` (
  `id` bigint,
  `date` datetime,
  `countryCode` char(2),
  `country` varchar(128),
  `state` varchar(128),
  `stateDayCount` bigint,
  `countryDayCount` bigint,
  `stateTotalCount` bigint,
  `countryTotalCount` bigint,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_bin;

DROP TABLE IF EXISTS `InfectionStat`;
CREATE TABLE `InfectionStat` (
  `id` bigint NOT NULL AUTO_INCREMENT , 
  `infection` varchar(256),
  `date` datetime,
  `state` varchar(128),
  `infectionCount` int(11),
  `total` int(11),
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_bin;

DROP TABLE IF EXISTS `FiletypeStat`;
CREATE TABLE `FiletypeStat` (
  `id` bigint NOT NULL AUTO_INCREMENT , 
  `typeName` varchar(256),
  `date` datetime,
  `dayCount` bigint,
  `totalCount` bigint,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_bin;

DROP TABLE IF EXISTS `UseragentStat`;
CREATE TABLE `UseragentStat` (
  `id` bigint NOT NULL AUTO_INCREMENT , 
  `userAgent` varchar(256),
  `date` datetime,
  `userAgentCount` int(11),
  `total` int(11),
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_bin;

DROP TABLE IF EXISTS `PortStat`;
CREATE TABLE `PortStat` (
  `id` bigint NOT NULL AUTO_INCREMENT , 
  `port` int(11),
  `date` datetime,
  `portDayCount` int(11),
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_bin;


CREATE TABLE `ipmap` ( 
    `id` INT NOT NULL AUTO_INCREMENT , 
    `ip` VARCHAR(20) NOT NULL , 
    `ip_num` BIGINT(20) NOT NULL , 
    `countryCode` CHAR(2), 
    `countryName` VARCHAR(64), 
    `state` VARCHAR(128), 
    `city` VARCHAR(128), 
    `latitude` DOUBLE, 
    `longitude` DOUBLE, 
    PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_bin;

create index state_index on GeoStat (state);
create index country_index on GeoStat (country);
create index countryCode_index on GeoStat (countryCode);
create index stateTotalCount_index on GeoStat (stateTotalCount);

create index state_index on GeoStat (state);
create index country_index on GeoStat (country);
create index countryCode_index on GeoStat (countryCode);
create index stateTotalCount_index on GeoStat (stateTotalCount);
