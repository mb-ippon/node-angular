# node-angular

Projet d'intégration d'une stack basé sur node, bower, grunt et angular
Intégration de librairies annexes jshint, jasmine

## Install

### Global dependencies

Installation de node depuis leur site web


### Project dependencies

Bower pour la gestion des dépendances du projet

> npm install -g bower --save-dev

Grunt pour l'exécution de tâches JS

> npm install grunt --save-dev

Express pour le server http

> npm install express --save

Angular pour réaliser le front

> bower install angular#1.3.15 --save

Grunt-shell pour lancer node en dev

> npm install grunt-shell --save-dev

Node csv pour gérer une pseudo bdd au format csv

> npm install csv --save

Intégration jasmine/node pour tester le back

> npm install jasmine-node -g --save-dev


## Launch project

Lancement en dev d'un serveur express js, sur le port 3000. Exécute les specs jasmine avant de lancer le serveur.

> grunt build_dev

