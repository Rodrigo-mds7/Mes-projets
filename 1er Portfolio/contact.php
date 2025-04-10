<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Design</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div class="container">
        <header>
            <h1 class="header-title">DEV FULL-STACK</h1>
        </header>

        <section class="hero">
            <div class="content">
                <form>
                    <h1>Contactez-nous</h1>
                    <div class="separation"></div>
                    <div class="corps-formulaire">
                      <div class="gauche">
                        <div class="groupe">
                          <label>Votre Prénom</label>
                          <input type="text" autocomplete="off" />
                          <i class="fas fa-user"></i>
                        </div>
                        <div class="groupe">
                          <label>Votre adresse e-mail</label>
                          <input type="text" autocomplete="off" />
                          <i class="fas fa-envelope"></i>
                        </div>
                        <div class="groupe">
                          <label>Votre téléphone</label>
                          <input type="text" autocomplete="off" />
                          <i class="fas fa-mobile"></i>
                        </div>
                      </div>
              
                      <div class="droite">
                        <div class="groupe">
                          <label>Message</label>
                          <textarea placeholder="Saisissez ici..."></textarea>
                        </div>
                      </div>
                    </div>
              
                    <div class="pied-formulaire" align="center">
                      <button>Envoyer le message</button>
                    </div>
                  </form>
        </section>

        <div class="projects">
            <div class="project-card">
                <h3 onclick="window.location.href='apropos.html'"> À Propos <i class="fa-solid fa-address-card"></i></h3>
                <p>Souhaitez-vous en savoir davantage sur moi ? Cliquez sur "À propos" !</p>
                   
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
                <h3 onclick="window.location.href='index.html'"> Accueil <i class="fa-solid fa-house"></i></h3>
                <p>Souhaitez-vous revenir a l'accueil ? Cliquez sur "Accueil"</p>
            </div>
        </div>
    </div>
</body>
</html>