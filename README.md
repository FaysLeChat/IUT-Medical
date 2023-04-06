
# FullMedical Alchemist

## Organisation

### Présentation de l'équipe

Notre équipe est composé de trois personnes:  

- Allan PONCHAUT
- Maxence DUBOIS
- Lucie CAUDRON

### Présentation de l'application

Notre application s'appelle FullMedical Alchemist. Ce site permet à des clients (patients) de demander à des prestataires (docteurs) des rendez-vous médicaux. Les utilisateurs peuvent s'inscrire et sélectionner leur rôle (patient ou docteur). 

Les patients peuvent accéder à un calendrier avec leur rendez-vous, ou bien demander un rendez-vous avec la date et leur docteur de leur choix (tant que la date est libre et qu'il n'est pas occupé).

Les docteurs, quand à eux, peuvent accéder aux rendez-vous qu'ils ont (soit dans le calendrier, soit dans leur profil), et ne peuvent pas créer de rendez-vous.

Les deux types d'utilisateurs peuvent accéder à un profil qui donnent des informations sur leur compte, et les rendez-vous qu'ils sont si l'utilisateur est un docteur. 

### Présentation des outils utilisés

#### Outils utilisés

- Trello (outil de suivi/tickets)
- Github (pour notre git)
- Discord (outil de communication)
- Webstorm (outil de développement, IDE Javascript)
- Postman (tester les appels API)

#### NPM

- SQLite3 (base de données)
- Express 
	- Nodemon (aide développement)
	- Passport (sécurité)
	-  Mocha & Chai (tests)
- React
	- FullCalendar (calendrier)
	- Jest (tests)
	- Cypress (tests)
	- Axios (requête API)
	- Bootstrap (design)

## Gestion de projet

Pour ce projet, nous avons décidé de travailler en méthode Agile car nous pensons que c'est la méthode la plus efficace pour avancer le mieux dans un projet. Nous avions des rôles assez défini:

- Allan PONCHAUT (plus niveau back-end, base de données, gestion des réunions etc.)
- Maxence DUBOIS (un peu plus niveau front-end, mais aussi du back-end, gestion du calendrier, assez polyvalent)
- Lucie CAUDRON (plus niveau front-end, avec la gestion du Github pour les merges et les pull requests)

Ceci étaient nos rôle principaux, mais cela ne veut pas dire que nous n'avons pas touché à tout (nous avons tous fais du front-end, back-end et du Git). Nous faisions des réunions toutes les pauses (vers 10h, midi et vers 15h) pour voir l'avancement du projet et ce qu'il restait à faire pour toujours avoir des tâches à accomplir. Nous avons aussi utilisés ces réunions pour faire des merge dans notre branche "main", pour éviter de tout faire ça après une journée ou deux et d'avoir des problèmes à cause de cela. Cela nous à permis d'avoir une branche main propre et accessible.

Pour une journée type, nous arrivons à 9h. Ensuite, nous travaillons sur notre ticket. Après cela, on sé réuni pour voir si il y a des problèmes, ce que nous faisons, ou si on doit merger dans le main. On continue de travailler, et on fait une pause à midi pour manger. L'après-midi ce passe de la même façon que le matin, où nous travaillons sur notre ticket, fait une réunion, et continuons de travailler.

Pour notre outil de suivi, nous avons utilisés Trello. Nous avons une colonne pour mettre les questions que nous avons (pour les prochaines réunions), une colonne pour les tickets à faire, une colonne pour les tickets en cours, une colonne pour la vérification des tickets et une colonne pour les tickets finis. On a utilisé le système d'étiquette pour s'organiser pour les types des tickets

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
