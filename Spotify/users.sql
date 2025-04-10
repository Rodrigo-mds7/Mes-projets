CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `artist_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `cover` text NOT NULL,
  `cover_small` text NOT NULL,
  `release_date` int(11) NOT NULL,
  `popularity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `albums_artist_id` (`artist_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1626 ;