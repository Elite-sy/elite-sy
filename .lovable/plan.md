## Plan : Dupliquer la carte « Professionnels du bâtiment »

### Contexte
Sur la page `/proprete`, le tableau `features` contient actuellement 4 cartes :
1. Bureaux / tertiaire
2. Syndics de copropriétés
3. Professionnels de santé
4. Professionnels du bâtiment

### Changement demandé
Dupliquer la carte **« Professionnels du bâtiment »** afin qu’elle apparaisse une deuxième fois dans la liste des prestations de la page.

### Implémentation
- Dans `src/routes/proprete.tsx`, insérer une copie de l’objet `{ title: "Professionnels du bâtiment", description: "…" }` à la suite de l’existant dans le tableau `features` (passant de 4 à 5 éléments).
- Aucune modification de style, de logique métier ou d’autres pages requise.
