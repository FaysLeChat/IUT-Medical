
# FullMedical Alchemist

Organisation
Présentation de l'équipe

Notre équipe est composée de trois personnes :

- Allan PONCHAUT
- Maxence DUBOIS
- Lucie CAUDRON

Présentation de l'application

Notre application s'appelle FullMedical Alchemist. Ce site permet à des clients (patients) de demander à des prestataires (docteurs) des rendez-vous médicaux. Les utilisateurs peuvent s'inscrire et sélectionner leur rôle (patient ou docteur).

Les patients peuvent accéder à un calendrier avec leurs rendez-vous, ou bien demander un rendez-vous à la date et avec le docteur de leur choix (tant que la date est libre et que le docteur n'est pas occupé).

Les docteurs, quant à eux, peuvent accéder aux rendez-vous qu'ils ont (soit dans le calendrier, soit dans leur profil), mais ne peuvent pas créer de rendez-vous.

Les deux types d'utilisateurs peuvent accéder à un profil qui donne des informations sur leur compte, et les rendez-vous qu'ils ont s'ils sont des docteurs.
Présentation des outils utilisés
Outils utilisés

- Trello (outil de suivi/tickets)
- Github (pour notre git)
- Discord (outil de communication)
- Webstorm (outil de développement, IDE Javascript)
- Postman (pour les appels API)

NPM

- SQLite3 (base de données)
- Express
	- Nodemon (aide au développement)
	- Passport (sécurité)
	- Mocha & Chai (tests)
- React  
	- FullCalendar (calendrier)
	- Jest (tests)
	- Cypress (tests)
	- Axios (requêtes API)
	- Bootstrap (design)

## Gestion de projet

Pour ce projet, nous avons décidé de travailler en méthode Agile car nous pensons que c'est la méthode la plus efficace pour avancer de manière optimale dans un projet. Nous avions des rôles assez définis :

- Allan PONCHAUT (plutôt orienté back-end, base de données, gestion des réunions, etc.)
- Maxence DUBOIS (plutôt orienté front-end, mais également back-end, gestion du calendrier, assez polyvalent)
- Lucie CAUDRON (plutôt orientée front-end, avec la gestion de Github pour les merges et les pull requests)

Ces rôles étaient nos rôles principaux, mais cela ne signifie pas que nous n'avons pas touché à tout (nous avons tous travaillé sur le front-end, le back-end et le Git). Nous avons organisé des réunions toutes les pauses (vers 10h, midi et vers 15h) pour voir l'avancement du projet et ce qu'il restait à faire afin de toujours avoir des tâches à accomplir. Nous avons également utilisé ces réunions pour fusionner nos branches dans notre branche "main", afin d'éviter de tout faire cela après une journée ou deux et d'avoir des problèmes à cause de cela. Cela nous a permis d'avoir une branche "main" propre et accessible.

Pour une journée type, nous arrivons à 9h. Ensuite, nous travaillons sur notre ticket. Après cela, nous nous réunissons pour voir s'il y a des problèmes, ce que nous faisons, ou si nous devons fusionner dans la branche "main". Nous continuons de travailler, et nous faisons une pause à midi pour manger. L'après-midi se passe de la même manière que le matin, où nous travaillons sur notre ticket, organisons une réunion, et continuons de travailler.

Pour notre outil de suivi, nous avons utilisé Trello. Nous avons une colonne pour mettre les questions que nous avons (pour les prochaines réunions), une colonne pour les tickets à faire, une colonne pour les tickets en cours, une colonne pour la vérification des tickets et une colonne pour les tickets finis. Nous avons utilisé le système d'étiquettes pour nous organiser pour les types de tickets.

## Application 

| Fonctionnalité                                                   | Fonctionne totalement | Fonctionne partiellement | Ne fonctionne pas | Non fait | Réalisé par        |
|------------------------------------------------------------------|--------------------|--------------------------|-------------------|----------|--------------------|
| Base de Donnée (SQLite)                                                  |         ✔️         |                          |                   |          | Allan |
| Connexion/ Inscription                                           |         ✔️         |                          |                   |          | Allan/Max           |
| Page Home                                                        |         ✔️         |                          |                   |          | Lucie           |
| Navbar                                                           |         ✔️         |                          |                   |          | Lucie/Max            |
| Page Contact                                |         ✔️         |                          |                   |          | Lucie               |
| API REST avec Express                                           |         ✔️         |                          |                   |          | Allan               |
| Calendrier FullCalendar (Avec la possibilité de supprimer, update etc.)                                          |         ✔️         |                          |                   |          | Max               |
| Recherche de prestataire                                                      |                  |                          |        ✔️           |          | Allan               |
| Séparation des rôles dans la vue |         ✔️         |                          |                   |          | Allan           |
| Test Jest (Front)                                    |         ✔️         |                          |                   |          | Lucie            |
| Test Cyress                                        |         ✔️         |                          |                   |          | Max            |
| Test Mocha/Chai (Back)                                |         ✔️         |                          |                   |          | Allan            |

## Mise en place

Voici les commandes pour cloner le dépôt, installer les dépendances nécessaires pour le back-end et le front-end, pour initialiser la base de données et pour démarrer l'application.

```
git clone https://github.com/FaysLeChat/PIUT-RdvMedecinJS.git
cd front && npm install && npm run start
cd back && npm install && npm run resetDB && npm run start
```

Lien URL pour accéder au front-end (application principale):
```
localhost:3000
```

Lien URL pour accéder au back-end:

```
localhost:8000
```

## Rétrospective

Au terme de ce projet, nous avons rencontré plusieurs difficultés, mais nous avons aussi constaté des forces dans notre équipe. Nous avons également identifié des parties qui auraient pu être améliorées et des changements que nous aurions pu apporter si nous devions refaire le projet.

Nous avons été confrontés à deux difficultés majeures durant le projet :

-   La première difficulté que nous avons rencontrée était liée à l'utilisation de la bibliothèque fullcalendar. Nous avons eu des difficultés à l'intégrer à notre projet, ce qui nous a pris plus de temps que prévu.
    
-   La deuxième difficulté était liée aux tests. Après avoir effectué des modifications sur notre projet, les tests ont cessé de fonctionner correctement. Nous avons donc dû les réécrire pour nous assurer que tout fonctionnait correctement.

Malgré ces difficultés, notre équipe a également présenté des forces :

-   Tout d'abord, notre équipe était composée de membres compétents, qui ont su travailler ensemble efficacement pour surmonter les difficultés rencontrées.
    
-   Ensuite, nous avons bien attribué les rôles dans notre équipe, ce qui nous a permis de travailler efficacement en fonction des compétences de chacun.

Nous avons également identifié des parties qui auraient pu être améliorées dans notre projet :

-   Tout d'abord, nous aurions pu améliorer la création de rendez-vous en automatisant certaines tâches, comme la saisie automatique des informations du patient.
    
-   Ensuite, nous aurions pu travailler davantage sur le profil utilisateur pour le rendre plus convivial et plus facile à utiliser.

Si nous devions refaire le projet, nous pourrions apporter les changements suivants :

-   Nous pourrions attaquer l'énoncé plus rapidement, pour nous donner plus de temps pour surmonter les difficultés qui pourraient survenir.
    
-   Nous pourrions également travailler sur les créneaux plus rapidement pour nous assurer que tout fonctionne correctement dès le début.
