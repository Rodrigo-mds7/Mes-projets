<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Design</title>
    <link rel="stylesheet" href="apropos.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div class="container">
        <header>
            <h1 class="header-title">Qui suis-je réellement??</h1>
        </header>

        <section class="hero">
            <div class="content">
                <h2>WELCOME IN MY UNIVERSE</h2>
                <p style="margin: 1.5rem 0; line-height: 1.6;">
                    Bonjour ! Je suis un développeur full-stack passionné par la création de sites web modernes et d'applications interactives. 
                    Mon objectif est de transformer des idées en solutions numériques innovantes et fonctionnelles.
                </p>
                <p>
                    Actuellement étudiant à la Web Académie, je me spécialise dans les technologies front-end et back-end, 
                    tout en explorant les dernières tendances en matière de design et de développement.
                </p>
                <p>
                    En dehors du code, j'aime explorer de nouvelles technologies, collaborer sur des projets créatifs et partager mes connaissances avec la communauté.
                </p>
                    <button class="neon-button">Contactez moi→</button>
            </div>

            <div class="profile-card">
                <img src="profile4.png" alt="Profile">
            </div>
        </section>

        <div class="projects">
            <div class="project-card">
                <h3 onclick="window.location.href='index.html'"> Accueil <i class="fa-solid fa-house"></i></h3>
                <p>Souhaitez-vous revenir a l'accueil ? Cliquez sur "Accueil" !</p>
                   
            </div>
            <div class="project-card">
                <h3 onclick="window.location.href='compétences.html'">Compétences <i class="fa-solid fa-computer"></i></h3>
                <p>Souhaitez-vous explorer mes compétences ? Cliquez sur "Compétences" !</p>
            </div>
            <div class="project-card">
                <h3 onclick="window.location.href='parcours.html'"> Parcours <i class="fa-solid fa-school"></i></h3>
                <p>Quel est mon parcours et comment suis-je parvenue ici ? Cliquez sur "Parcours" pour en savoir plus !</p>
            </div>
            <div class="project-card">
                <h3 onclick="window.location.href='contact.html'"> Contact <i class="fa-solid fa-comments"></i></h3>
                <p>Vous souhaitez me contacter parce que vous êtes intéressé par mes services ? Cliquez sur "Contact" !</p>
            </div>
        </div>
    </div>
</body>
</html>