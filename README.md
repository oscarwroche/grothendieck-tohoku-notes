# Lecture de Tôhoku

Dépôt personnel pour lire progressivement Grothendieck, *Sur quelques points d'algèbre homologique* (« Tôhoku »). Le [PDF fourni](fr-p119-213.pdf) est la source de référence ; il couvre les pages imprimées 119–213 et s'interrompt au début de §5.6. Les [notes de lecture](notes-lecture-tohoku.md) conservent l'état consolidé, avec les explications et exercices ajoutés clairement distingués du papier.

Une séance peut se faire ici ou dans ChatGPT : on explore, calcule et corrige librement, puis on intègre seulement les acquis utiles aux notes dans un commit cohérent. Les règles de tutorat et d'intégration sont dans [AGENTS.md](AGENTS.md).

La lecture peut reprendre à **§1.2 « Foncteurs »**, sur la page 6 du PDF, juste après les notes de §1.1.

La [version publiée des notes](https://oscarwroche.github.io/grothendieck-tohoku-notes/) est reconstruite et déployée par GitHub Actions à chaque push sur `main`. Pour vérifier le rendu localement : `npm ci && npm run build`, puis ouvrir `dist/index.html` ; le dossier `dist/` est généré et n'est pas versionné.
