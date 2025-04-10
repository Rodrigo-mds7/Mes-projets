DROP DATABASE IF EXISTS meetic;
CREATE database meetic;

USE meetic;

CREATE TABLE user (
    id              INT             NOT NULL AUTO_INCREMENT,
    email           VARCHAR(255)    NOT NULL UNIQUE,
    firstname       VARCHAR(255)    NOT NULL,
    lastname        VARCHAR(255)    NOT NULL,
    birthdate       DATETIME        NOT NULL,
    address         VARCHAR(255),
    gender          VARCHAR(10),
    city            VARCHAR(255),
    PRIMARY KEY (id),
);

INSERT INTO user (email, firstname, lastname, birthdate, address, gender, city)
VALUES

('Saiyandelaterre@gmail.com', 'Goku', 'Saiyan', '1980-06-22', 'Terre', 'Saiyan', 'Paris' ),
('monarchedesombres@gmail.com', 'Jinwoo', 'Sung', '2000-06-22', 'Séoul', 'Homme', 'Darkworld' ),
('mickey@gmail.com', 'Mickey', 'Mouse', '1970-06-22', 'Disney', 'Souris', 'Maison magique,' ),
('Vaiana@gmail.com', 'Vaiana', 'Des îles', '1350-06-22', 'Disney', 'Femme', 'Îles' ),
('Kakashi@gmail.com', 'Kakashi', 'Hatake', '1970-06-22', 'Terre', 'Homme', 'Konoha' ),
('Mario@gmail.com', 'Mario', 'Bros', '1987-06-22', 'Terre', 'Homme', 'Monde des champignons' ),
('LuffyD@gmail.com', 'Luffy', 'Monkey D', '1973-06-22', 'Terre', 'Homme', 'Grand Line' ),
('le7hokage@gmail.com', 'Naruto', 'Uzumaki', '1994-09-22', 'Terre', 'Homme', 'Konoha' );



CREATE TABLE hobbies (
    id   INT NOT NULL AUTO_INCREMENT,
    type VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
);


INSERT INTO hobbies (type)
VALUES

    ("Voyages"),
    ("Cinéma"),
    ("Technologie"),
    ("Lecture"),
    ("Sport"),
    ("Animaux"),
    ("Art"),
    ("Histoire"),
    ("Astronomie"),
    ("Science"),
    ("Cuisine"),
    ("Mode"),
    ("Danse"),
    ("Musique"),
    ("Automobile"),
    ("Jeux vidéo"),
    ("Photographie"),
    ("Randonnée"),
    ("Plongée");

