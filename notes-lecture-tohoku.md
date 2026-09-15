# Tôhoku — notes de lecture

Source : Alexandre Grothendieck, *Sur quelques points d’algèbre homologique*, édition française jointe, [PDF conservé avec ces notes](fr-p119-213.pdf). Les numéros « p. source » inscrits dans la marge renvoient à la pagination historique ; les numéros « PDF » ci-dessous désignent les pages du fichier, en comptant la première page comme 1.

**Pour lire avec les formules affichées :** ouvrir ce fichier dans Visual Studio Code, puis utiliser **⇧⌘V** (aperçu Markdown) ou **⌘K V** (aperçu à côté du texte). L’aperçu intégré rend les formules `$...$` et `$$...$$` ; cliquer sur le titre d’un passage repliable pour l’ouvrir. Garder ce fichier et le PDF source dans le même dossier maintient leur lien.

La lecture principale suit **l’ordre du texte** ; les [annexes](#annexes) rassemblent par thème nos développements et les exercices. Dans chaque passage, **Papier** résume ce que Grothendieck définit ou affirme ; **Intuition** reformule l’idée ; **Exemple**, **Aluffi/Hatcher** et **Digression discutée** ajoutent ce qui a été travaillé ensemble. Une digression peut annoncer une notion bien postérieure à §1.1 : elle ne doit pas être prise pour une affirmation du paragraphe. Les exemples longs sont repliables.

## 1.1 — Catégories (PDF p. 4–6 ; « p. source » 122–124)

### 1. Définition d’une catégorie (PDF p. 4, début de §1.1)

**Papier.** Une catégorie $\mathcal C$ possède des objets, des ensembles de morphismes $\operatorname{Hom}_{\mathcal C}(A,B)$, une composition $(u:A\to B,v:B\to C)\mapsto vu=v\circ u$, associative, et une identité $1_A$ pour chaque objet. Le texte demande aussi de garder déterminés le départ et l’arrivée d’un morphisme. Son hypothèse de « classe non vide » est une convention du papier, pas une nécessité de toutes les définitions modernes.

**Intuition.** Les objets sont ce qu’on étudie ; les flèches disent quelles comparaisons sont autorisées. Une même application d’ensembles peut être ou ne pas être un morphisme suivant la catégorie choisie.

**Exemples.** Dans $\mathbf{Set}$, les flèches sont les applications ; dans $\mathbf{Ab}$, les homomorphismes de groupes abéliens ; dans $R\text{-}\mathbf{Mod}$, les applications $R$-linéaires. La composition ordinaire et les identités satisfont les axiomes. Les [modules et la torsion](#annexe-modules) sont repris en annexe.

**Aluffi/Hatcher.** Aluffi donne le réflexe de définir une construction par ses flèches, plutôt que par une recette sur les éléments. Chez Hatcher, les groupes de chaînes et les applications de bord vivent dans $\mathbf{Ab}$ ; la même langue catégorique pourra donc organiser les complexes et les suites exactes.

### 2. Catégorie duale et renversement des flèches (PDF p. 4–5, fin du premier bloc de §1.1)

**Papier.** La catégorie duale $\mathcal C^{\mathrm{op}}$ a les mêmes objets et

$$
\operatorname{Hom}_{\mathcal C^{\mathrm{op}}}(A,B)
=\operatorname{Hom}_{\mathcal C}(B,A).
$$

La composition y est inversée : la flèche qui se lit $A\to B$ dans $\mathcal C^{\mathrm{op}}$ correspond à une flèche $B\to A$ dans $\mathcal C$. Tout énoncé formulé uniquement avec objets, flèches, composition et identités a un énoncé dual.

**Intuition.** On retourne *toutes* les flèches d’un diagramme, pas les éléments d’un ensemble. Ainsi « une flèche qui arrive dans $A$ » devient « une flèche qui part de $A$ ».

**Exemples.** Mono ↔ épi ; sous-objet $B\hookrightarrow A$ ↔ quotient $A\twoheadrightarrow Q$ ; produit ↔ coproduit. La catégorie duale est une construction formelle : un morphisme de $\mathcal C^{\mathrm{op}}$ n’est pas forcément la fonction inverse d’un morphisme de $\mathcal C$.

**Digression discutée.** Pour un faisceau $\mathcal F$, l’inclusion $V\hookrightarrow U$ d’ouverts donne une restriction $\mathcal F(U)\to\mathcal F(V)$. C’est un exemple concret de flèches qui changent de sens ; la définition des foncteurs contravariants viendra en §1.2. L’[annexe sur les faisceaux et les sections](#annexe-faisceaux) détaille cet exemple.

### 3. Monomorphismes, épimorphismes, inverses et isomorphismes (PDF p. 5 ; « p. source » 123)

**Papier.** Pour $u:A\to B$, Grothendieck considère, pour tout objet $T$, les applications

$$
\operatorname{Hom}(T,A)\xrightarrow{u\circ -}\operatorname{Hom}(T,B),
\qquad
\operatorname{Hom}(B,T)\xrightarrow{-\circ u}\operatorname{Hom}(A,T).
$$

La première est injective pour tout $T$ si $u$ est un **monomorphisme** ; la seconde l’est si $u$ est un **épimorphisme**. Autrement dit,

$$
u f=u g\Rightarrow f=g
\quad\text{(mono)},\qquad
f u=g u\Rightarrow f=g
\quad\text{(épi)}.
$$

Un inverse à gauche $v u=1_A$ entraîne mono ; un inverse à droite $u v=1_B$ entraîne épi. Un isomorphisme a un inverse des deux côtés. Le papier appelle « bijectif » un morphisme à la fois mono et épi ; **cela n’implique pas en général qu’il soit isomorphe**. Les composés de monos, d’épis et d’isomorphismes gardent respectivement ces propriétés.

**Intuition.** Mono signifie qu’on peut annuler $u$ lorsqu’il est *après* deux flèches ; épi qu’on peut l’annuler lorsqu’il est *avant* deux flèches. Dans les catégories de modules, cela coïncide avec injectif et surjectif. Le critère catégorique, lui, reste valable quand « élément » ou « surjection d’ensembles » n’a pas de sens pertinent.

**Exemples.** $t\mapsto(t,2t):\mathbb R\to\mathbb R^2$ est un mono dans $\mathbf{Vect}_{\mathbb R}$, sans être l’inclusion littérale d’un sous-ensemble. La projection $(x,y)\mapsto x:\mathbb R^2\to\mathbb R$ est un épi : si deux applications linéaires définies sur $\mathbb R$ coïncident après cette projection, elles coïncident partout.

<details>
<summary>Exemples moins familiers : épi non surjectif et mono + épi non isomorphisme</summary>

Dans la catégorie des anneaux commutatifs unitaires, $\mathbb Z\hookrightarrow\mathbb Q$ est un épimorphisme **catégorique**, bien qu’il ne soit pas surjectif comme application. Si $f,g:\mathbb Q\to S$ coïncident sur $\mathbb Z$, ils coïncident sur toute fraction : l’image de $a/b$ est forcée par celles de $a$ et de l’inverse de $b$. C’est une raison de ne pas traduire automatiquement « épi » par « surjection » hors des modules.

Dans $\mathbf{Top}$, l’identité ensembliste $\mathbb R_{\mathrm{discret}}\to\mathbb R_{\mathrm{usuel}}$ est continue et bijective ; donc elle est mono et épi, mais son inverse n’est pas continu. Elle n’est pas un isomorphisme de $\mathbf{Top}$. Cela illustre la réserve explicite du texte sur « bijectif ».

</details>

**Aluffi/Hatcher.** Les diagrammes d’annulation sont la version abstraite de l’injectivité/surjectivité étudiée chez Aluffi. Plus tard, l’exactitude chez Hatcher fera intervenir $\ker$ et $\operatorname{im}$ ; ici, §1.1 prépare les flèches sans encore définir ces objets.

### 4. Sous-trucs : factorisation, équivalence, représentant (PDF p. 5 ; « p. source » 123)

**Papier.** Pour deux monos vers le **même** objet $A$, $u:B\hookrightarrow A$ et $u':B'\hookrightarrow A$, le texte écrit $u\leq u'$ si

$$
\exists v:B\to B'\quad u=u'v.
$$

Le $v$ est unique puisque $u'$ est mono. Cette relation est un préordre. Si $u\leq u'$ et $u'\leq u$, les deux flèches intermédiaires sont inverses : $B\cong B'$ **au-dessus de $A$**. Grothendieck choisit ensuite un mono dans chaque classe d’équivalence et l’appelle un « sous-truc » de $A$, avec son *injection canonique*. Le choix d’un représentant, évoqué par son symbole $\tau$ de Hilbert, sert à fixer une notation ; il n’est pas intrinsèquement canonique. Un sous-truc est donc le couple $(B,u:B\hookrightarrow A)$, pas l’objet $B$ isolé.

**Intuition.** $u\leq u'$ signifie que ce qui arrive dans $A$ par $u$ passe déjà par $u'$. Deux monos équivalents décrivent le même sous-objet avec deux paramétrages différents. Le choix du représentant permet d’écrire commodément « $B\subseteq A$ » ; les résultats doivent rester indépendants du paramétrage choisi.

<details>
<summary>La droite de $\mathbb R^2$ : trois représentants et un vrai ordre</summary>

Soit $L=\{(x,2x):x\in\mathbb R\}$. Les trois monos

$$
u(t)=(t,2t),\qquad u'(t)=(3t,6t),\qquad i:L\hookrightarrow\mathbb R^2
$$

représentent le même sous-truc. En effet, $u=u'\circ(t\mapsto t/3)$ et $u'=u\circ(t\mapsto3t)$. L’isomorphisme $\phi(t)=(t,2t):\mathbb R\to L$ donne $u=i\phi$ et $i=u\phi^{-1}$. On peut choisir $i$ comme représentant concret, mais le papier autorise un choix arbitraire.

À l’inverse, $t\mapsto(t,0)$ et $t\mapsto(0,t)$ ont tous deux pour domaine $\mathbb R$, mais définissent deux sous-trucs différents de $\mathbb R^2$ : le morphisme vers $A$ compte. Pour un ordre non trivial dans $\mathbf{Ab}$, $6\mathbb Z\hookrightarrow\mathbb Z$ se factorise par $2\mathbb Z\hookrightarrow\mathbb Z$, car $6\mathbb Z\subseteq2\mathbb Z$. La factorisation inverse n’existe pas.

</details>

**Aluffi.** Un triangle commutatif $B\to B'\to A$ est le même type de raisonnement par factorisation qu’on rencontre pour noyaux et quotients. Ici, la propriété $u\leq u'$ ne dit pas encore que $u$ est initial ou final dans une catégorie auxiliaire ; elle dit que **cette** factorisation existe, et que le mono la rend unique. Le lien avec Yoneda est une digression : $u$ détermine, pour chaque $T$, les flèches $T\to A$ qui passent par $B$.

### 5. Trucs quotients : le passage dual (PDF p. 5, juste après les sous-trucs)

**Papier.** Grothendieck définit les « trucs quotient » de $A$ par dualité, à partir des épimorphismes **issus** de $A$. Un quotient est donc représenté par une flèche $p:A\twoheadrightarrow Q$, et non par le seul objet $Q$.

**Intuition.** Le sous-objet sélectionne par $B\hookrightarrow A$ ; le quotient identifie par $A\twoheadrightarrow Q$. Dans les groupes abéliens et les modules, deux projections ayant le même codomaine peuvent écraser des sous-groupes différents : $p_x(x,y)=x$ et $p_y(x,y)=y$ sont deux quotients distincts de $\mathbb R^2$, tous deux représentés par l’objet $\mathbb R$.

**Exemple de factorisation.** La projection $\mathbb Z\to\mathbb Z/2\mathbb Z$ passe par $\mathbb Z\to\mathbb Z/6\mathbb Z$, grâce à $[n]_6\mapsto[n]_2$. Le quotient modulo 2 est plus grossier : il identifie davantage d’entiers. Les flèches de la relation entre sous-trucs sont ici retournées.

**Aluffi.** Pour $N\triangleleft G$, la propriété universelle de $G/N$ est

$$
N\subseteq\ker f
\iff
\exists!\,\bar f:G/N\to H\quad f=\bar f\circ\pi.
$$

Dans les groupes ou modules, $G/\ker f\cong\operatorname{im}f$. C’est un bon modèle concret, mais **§1.1 ne construit pas encore les noyaux et les conoyaux d’une catégorie abélienne**. Les quotients formels du passage sont définis par épis et dualité.

### 6. Produit direct : la propriété universelle (PDF p. 5–6 ; « p. source » 123–124)

**Papier.** Étant donnés des objets $(A_i)_{i\in I}$ pour un ensemble d’indices non vide, un objet $P$ et des projections $\pi_i:P\to A_i$ forment leur produit si, pour tout $B$, l’application

$$
\operatorname{Hom}(B,P)
\xrightarrow{\ f\mapsto(\pi_i f)_i\ }
\prod_{i\in I}\operatorname{Hom}(B,A_i)
$$

est bijective. Cela signifie : pour toute famille $f_i:B\to A_i$, il existe **une unique** $f:B\to P$ telle que $\pi_i f=f_i$ pour chaque $i$. Deux tels produits sont canoniquement isomorphes. Le produit comprend l’objet **et** ses projections. Grothendieck définit aussi le produit d’une famille de morphismes $v_i:A_i\to B_i$ ; si tous les $v_i$ sont monos, leur produit l’est. Le résultat dual pour les épis peut échouer, notamment pour les faisceaux. Le papier distingue l’existence de produits binaires, finis non vides et arbitraires non vides : la définition ne garantit jamais leur existence dans une catégorie quelconque.

**Intuition.** Un morphisme vers le produit condense une famille de morphismes vers ses facteurs. Les $A_i$ ne sont **pas** une partition de $P$. Dans $\mathbf{Set}$, $P$ est le produit cartésien des ensembles ; dans $R\text{-}\mathbf{Mod}$, le produit des modules. La propriété universelle continue à parler du produit même quand ses « éléments » ne sont pas disponibles.

**Exemple concret.** Pour $A_1=\mathbb R$, $A_2=\mathbb R^2$ et $P=\mathbb R^3$, les projections sont $\pi_1(x,y,z)=x$, $\pi_2(x,y,z)=(y,z)$. Deux applications $f_1:B\to\mathbb R$, $f_2:B\to\mathbb R^2$ imposent l’unique $f(b)=(f_1(b),f_2(b))$. Si $B=\mathbb R$ dans $\mathbf{Vect}$, on choisit des $f_i$ linéaires ; $t\mapsto t^2$ serait permis dans $\mathbf{Set}$, pas dans $\mathbf{Vect}$.

**Aluffi.** Le produit est un objet **final dans la catégorie des cônes** $(B\to A_i)_i$ : chaque cône a une unique flèche vers le cône produit. Il n’est pas un objet final de $\mathcal C$ tout entière. C’est la présentation par diagrammes de la même bijection de $\operatorname{Hom}$ que dans Tôhoku.

<details>
<summary>Produits infinis et ce qu’ils deviennent dans un complexe de Čech</summary>

Dans $R\text{-}\mathbf{Mod}$, $\prod_{i\in I}M_i$ contient toutes les familles $(m_i)$ ; la somme directe $\bigoplus_{i\in I}M_i$ n’autorise qu’un nombre fini de composantes non nulles. Pour $I$ fini, produit et somme directe sont isomorphes dans $R\text{-}\mathbf{Mod}$. Pour $I$ infini, ils diffèrent généralement. C’est le produit arbitraire évoqué dans l’exercice d’Aluffi dont nous parlions.

Pour un recouvrement $\mathcal U=(U_i)$ et un faisceau abélien $\mathcal F$, les cochaînes de Čech commencent par

$$
\check C^0(\mathcal U,\mathcal F)=\prod_i\mathcal F(U_i),
\qquad
\check C^1(\mathcal U,\mathcal F)=\prod_{i<j}\mathcal F(U_i\cap U_j).
$$

Une cochaîne est une **famille de sections** : sur chaque ouvert, puis sur chaque intersection double. Ce sont précisément des produits dans $\mathbf{Ab}$. La notation $\prod$ ne signifie ni multiplication des fonctions ni somme directe : on garde une coordonnée pour chaque indice, même si le recouvrement est infini. Le [complexe de Čech](#annexe-cech) et ses [exercices](#exercices-cech) poursuivent ce calcul.

</details>

### 7. Somme directe / coproduit : la construction duale (PDF p. 6, fin de §1.1, immédiatement avant §1.2)

**Papier.** En renversant les flèches, des injections $\iota_i:A_i\to S$ présentent $S=\coprod_i A_i$ — appelé ici « somme directe » — si, pour tout $B$,

$$
\operatorname{Hom}(S,B)
\xrightarrow{\ g\mapsto(g\iota_i)_i\ }
\prod_i\operatorname{Hom}(A_i,B)
$$

est bijective. Une famille $g_i:A_i\to B$ donne donc un unique $g:S\to B$. Le papier précise que les « injections canoniques » $A_i\to S$ **ne sont pas nécessairement des monomorphismes** dans une catégorie arbitraire. Il définit aussi la somme d’une famille de morphismes et note que la somme d’épis est un épi.

**Intuition.** Le produit rassemble des flèches $B\to A_i$ en une flèche $B\to\prod A_i$. Le coproduit rassemble des flèches $A_i\to B$ en une flèche $\coprod A_i\to B$. Dans $\mathbf{Set}$, c’est l’union disjointe ; dans $\mathbf{Ab}$ et $R\text{-}\mathbf{Mod}$, la somme directe. Le nom « injection » suggère la réalisation dans les modules, mais la propriété universelle seule ne promet pas une inclusion.

**Aluffi.** Le coproduit est **initial dans la catégorie des cocônes** $(A_i\to B)_i$, miroir du produit final dans la catégorie des cônes. Ces qualificatifs dépendent de la catégorie auxiliaire choisie ; ils ne décrivent pas $\coprod A_i$ ou $\prod A_i$ comme objets initial/final de $\mathcal C$.

---

## Pour continuer la lecture

La prochaine entrée sera **§1.2, Foncteurs** (PDF p. 6 et suivantes). Pour chaque nouveau paragraphe, garder le même ordre : référence PDF et « p. source » ; **Papier** ; **Intuition** ; **Exemple** ; **Aluffi/Hatcher** ; puis **Digression discutée** si utile. Ajouter un calcul ou un contre-exemple dans un `<details>` lorsque son développement coupe le fil du texte. Les anticipations des annexes pourront être reliées à leurs sections lorsqu’elles seront réellement étudiées, sans réécrire §1.1 comme si Grothendieck y avait déjà fait la cohomologie de Čech.

## Annexes

Ces développements sont regroupés par thème jusqu’à la cohomologie de Čech, avec les exercices à la fin. La lecture des **modules**, des **produits** et de la phrase d’introduction de Tôhoku les a suscités, mais ils ne font pas partie de §1.1. Les sections du papier qui développent réellement les foncteurs, catégories abéliennes et faisceaux viennent plus tard (notamment §1.2, §1.4, chapitre III). Dans l’introduction (PDF p. 2 ; « p. source » 119), Grothendieck annonce l’idée d’un cadre commun pour la cohomologie des faisceaux et les foncteurs dérivés de foncteurs de modules ; ce n’est pas une définition de §1.1.

<a id="annexe-modules"></a>
### Modules et torsion

<details>
<summary>Modules, torsion et motivation topologique</summary>

Un $R$-module est un groupe abélien $(M,+)$ muni d’une multiplication par les scalaires de l’anneau $R$, satisfaisant les axiomes distributifs et associatifs. Si $R$ est un corps $K$, c’est un espace vectoriel. Tout groupe abélien est un $\mathbb Z$-module par $n\cdot m=m+\cdots+m$ ; ainsi $\mathbf{Ab}\simeq\mathbb Z\text{-}\mathbf{Mod}$.

Dans $\mathbb Z/6\mathbb Z$, $2[3]=0$ bien que $2\ne0$ et $[3]\ne0$. Pour un groupe abélien, un élément est de torsion si $nm=0$ pour un entier $n\ne0$. Pour un groupe abélien **finiment engendré**, les facteurs cycliques finis de la décomposition $\mathbb Z^r\oplus\bigoplus_j\mathbb Z/n_j\mathbb Z$ forment sa partie de torsion. La définition n’exige pas une telle décomposition. La notion de torsion d’un module sur un anneau quelconque demande davantage de précautions ; l’exemple présent est celui des $\mathbb Z$-modules.

La motivation topologique est tangible chez Hatcher : $H_1(\mathbb{RP}^2;\mathbb Z)\cong\mathbb Z/2\mathbb Z$. Le générateur est non nul, mais deux fois ce générateur vaut zéro. Des coefficients réels font disparaître cette torsion. Les modules et groupes abéliens gardent donc une information que les seuls espaces vectoriels réels ne voient pas.

Dans notre digression sur les rotations, l’angle $\mathbb R/2\pi\mathbb Z$ est périodique, mais toutes ses rotations ne sont pas d’ordre fini : seules celles dont l’angle est une fraction rationnelle de $2\pi$ sont des éléments de torsion. L’espace des orientations en dimension 3 est $SO(3)$, et $\pi_1(SO(3))\cong\mathbb Z/2$ : une boucle de rotation de $2\pi$ n’est pas contractile, deux tours le sont. Ce $\mathbb Z/2$ est une torsion dans un invariant topologique ; $SO(3)$ lui-même n’est pas un module.

</details>

<a id="annexe-faisceaux"></a>
### Faisceaux et sections

<details>
<summary>Faisceaux, sections et l’exemple des fonctions lisses</summary>

Un faisceau $\mathcal F$ associe à chaque ouvert $U\subseteq X$ un groupe de sections $\mathcal F(U)$, et à $V\subseteq U$ une restriction $\mathcal F(U)\to\mathcal F(V)$. Des sections locales $s_i\in\mathcal F(U_i)$ **égales au même point** sur chaque $U_i\cap U_j$ se recollent en une section unique sur $\bigcup_iU_i$. La compatibilité ne force pas une fonction générale à être constante : les restrictions de $x\mapsto x^2$ sur deux intervalles recouvrant $\mathbb R$ se recollent en la fonction $x^2$.

Pour $\mathcal C^\infty$, $\mathcal C^\infty(U)$ est un groupe abélien par $(f+g)(x)=f(x)+g(x)$, avec neutre $0$ et inverse additif $-f$. Ici « inverse » ne veut pas dire fonction réciproque $f^{-1}$. C’est aussi un anneau et un $\mathbb R$-espace vectoriel ; on peut ne garder que sa structure additive lorsque les faisceaux de groupes abéliens sont en jeu.

Pour le faisceau $\underline{\mathbb Z}$, une section est une fonction localement constante $U\to\mathbb Z$. Comme $\mathbb Z$ est discret, sur un **ouvert connexe** toute telle fonction est constante, d’où $\underline{\mathbb Z}(U)\cong\mathbb Z$. Sur deux composantes connexes, elle peut prendre deux entiers indépendants : c’est le point qui distingue les deux groupes de cochaînes dans [l’exercice 3](#exercice-cech-3).

</details>

<a id="annexe-cech"></a>
### Cohomologie des faisceaux et de Čech

<details>
<summary>Cohomologie des faisceaux et logarithme : localement possible, globalement obstrué</summary>

Le faisceau garantit le recollement **des sections compatibles**. La difficulté cohomologique est différente : un objet global peut avoir des *relèvements ou primitives locaux* qui ne peuvent pas être choisis compatibles. Le foncteur des sections globales $\Gamma(X,\mathcal F)=\mathcal F(X)$ est exact à gauche, mais pas toujours à droite ; ses foncteurs dérivés sont, dans le cadre usuel des faisceaux abéliens, $H^n(X,\mathcal F)=R^n\Gamma(X,\mathcal F)$. Ainsi $H^0=\Gamma$. Ceci anticipe largement la suite du papier.

Sur $X=\mathbb C^\times$, la fonction $z\mapsto z$ possède des logarithmes holomorphes locaux $L_i$ sur de petits ouverts $U_i$, avec $e^{L_i}=z$, mais aucun logarithme global. Sur $U_i\cap U_j$, posons, avec une convention de signes cohérente,

$$
n_{ij}=\frac{L_j-L_i}{2\pi i}\in\underline{\mathbb Z}(U_i\cap U_j).
$$

Ces entiers sont localement constants. Sur une triple intersection, $n_{jk}-n_{ik}+n_{ij}=0$ : c’est un **1-cocycle de Čech**. Si $n_{ij}=m_j-m_i$ pour des entiers locaux $m_i$, les branches modifiées $L'_i=L_i-2\pi i m_i$ coïncident et se recollent. La classe $[n]\in H^1(X,\underline{\mathbb Z})$ est l’obstruction ; pour $z$ sur $\mathbb C^\times$, elle est non nulle et correspond à un tour autour de 0.

La formulation par faisceaux est la suite exacte exponentielle

$$
0\longrightarrow2\pi i\,\underline{\mathbb Z}
\longrightarrow\mathcal O\xrightarrow{\exp}\mathcal O^\times
\longrightarrow1.
$$

Sa flèche de connexion $\mathcal O^\times(X)\to H^1(X,2\pi i\,\underline{\mathbb Z})$ associe à une fonction globale non nulle l’obstruction à un logarithme global. Le mot « section » rejoint ici l’idée de choisir un élément au-dessus de chaque point : une branche du logarithme est localement une section de $\exp:\mathbb C\to\mathbb C^\times$. En de Rham, la même difficulté apparaît avec $dz/z=dL_i$ localement, mais $\oint_{|z|=1}dz/z=2\pi i$, empêchant une primitive globale.

</details>

<details>
<summary>Complexe de Čech, cobord $\delta$, et pourquoi $\delta^2=0$</summary>

Pour un recouvrement $\mathcal U=(U_i)$ et un faisceau **abélien** $\mathcal F$,

$$
\check C^n(\mathcal U,\mathcal F)
=\prod_{i_0<\cdots<i_n}
\mathcal F(U_{i_0}\cap\cdots\cap U_{i_n}).
$$

Une $0$-cochaîne donne des sections sur les ouverts, une $1$-cochaîne sur les intersections doubles, une $2$-cochaîne sur les triples. Le degré est donc le nombre d’ouverts de l’intersection moins un. Le cobord compare les restrictions par signes alternés ; pour trois ouverts $U_0,U_1,U_2$,

$$
(\delta^0 s)_{ij}=s_j|_{U_{ij}}-s_i|_{U_{ij}},
\qquad
(\delta^1 a)_{012}=a_{12}-a_{02}+a_{01},
$$

les trois termes de la seconde formule étant restreints à $U_{012}$. Par substitution,

$$
(\delta^1\delta^0s)_{012}
=(s_2-s_1)-(s_2-s_0)+(s_1-s_0)=0.
$$

En tout degré, chaque restriction apparaît deux fois avec signes opposés, donc $\delta^{n+1}\delta^n=0$. Le quotient est

$$
\check H^n(\mathcal U,\mathcal F)
=\frac{\ker(\delta^n:\check C^n\to\check C^{n+1})}
{\operatorname{im}(\delta^{n-1}:\check C^{n-1}\to\check C^n)}.
$$

« Différence entre noyau et image » était notre intuition : formellement, c’est un **quotient de groupes**, pas une soustraction ni seulement un comptage de leurs tailles. $\ker\delta^0$ rassemble précisément les sections locales compatibles et vaut $\mathcal F(X)$. En degré supérieur, des cocycles peuvent ne pas venir du cobord d’un degré inférieur.

**Hatcher.** Sur le triangle orienté, $\partial[012]=[12]-[02]+[01]$, puis $\partial^2=0$ parce que les sommets apparaissent deux fois avec signes opposés. La formule de Čech est la même combinatoire du côté « co- ». Le *nerf du recouvrement* a un sommet par ouvert, une arête par intersection double non vide, un triangle par intersection triple non vide, etc. Avec un faisceau général, les coefficients vivent sur les intersections et les restrictions comptent : le complexe de Čech n’est pas simplement le complexe simplicial du nerf à coefficients constants.

**Précaution.** $\check H^n(\mathcal U,\mathcal F)$ est la cohomologie d’un **recouvrement fixé**. Son identification à $H^n(X,\mathcal F)$ demande un passage aux recouvrements ou des hypothèses adaptées, par exemple un recouvrement acyclique pour le faisceau considéré. La comparaison apparaît plus loin dans Tôhoku, au §3.8 (table des matières, PDF p. 3–4), pas en §1.1.

Les calculs de base sont numérotés dans les [exercices de Čech](#exercices-cech) : deux recouvrements sans classe de degré 1, puis le cercle.

</details>

<details>
<summary>Après le cercle : le tore et de Rham</summary>

**Cercle.** Le calcul complet est dans [l’exercice 3](#exercice-cech-3). Il montre pourquoi deux groupes de cochaînes $\mathbb Z^2$ donnent $H^0\cong\mathbb Z$ et $H^1\cong\mathbb Z$ pour le faisceau constant, avec deux significations différentes.

**Tore.** $T^2=S^1\times S^1$ a deux directions de boucles indépendantes. Pour le faisceau constant,

$$
H^0(T^2,\underline{\mathbb Z})\cong\mathbb Z,
\qquad H^1(T^2,\underline{\mathbb Z})\cong\mathbb Z^2,
\qquad H^2(T^2,\underline{\mathbb Z})\cong\mathbb Z.
$$

Les deux générateurs de $H^1$ évaluent les tours horizontal et vertical ; $H^2$ porte la classe de surface orientée. Pour calculer rigoureusement ces groupes, on peut prendre un bon recouvrement et son complexe de Čech, ou utiliser le complexe cellulaire de Hatcher : un sommet, deux arêtes, une 2-cellule, avec différentielles cellulaires nulles. Sur un espace aussi raisonnable que le tore, la cohomologie cellulaire à coefficients $\mathbb Z$ s’identifie à celle du faisceau constant. Le recouvrement par produits $U_i\times U_j$ de deux arcs du cercle donne bien des **patchs ouverts 2D**, pas les deux boucles fondamentales ; ses intersections peuvent être déconnectées. On ne déduit donc pas les trois groupes du tore en recopiant sans calcul la petite matrice $\mathbb Z^2\to\mathbb Z^2$ du cercle.

En de Rham, les classes réelles correspondantes sont $[d\theta]$, $[d\varphi]$ en degré 1 et $[d\theta\wedge d\varphi]$ en degré 2. Les intégrales de $d\theta$ et $d\varphi$ le long des deux boucles distinguent leurs directions. Cela rapproche Čech du couple « cohomologie × homologie → période » et de Stokes discuté à propos de Hatcher.

</details>

<a id="exercices-cech"></a>
### Exercices de Čech — de l’intervalle au cercle

**Statut de cette section.** Ce sont tes calculs préparatoires de cohomologie de Čech avec $\underline{\mathbb Z}$, et non des exercices ni des résultats énoncés par Grothendieck en §1.1. Je garde séparées **ta démarche** et les **précisions apportées ensuite**. Les deux premiers calculs n’ont pas de classe de degré 1 ; le troisième montre ce qui change pour le cercle, lorsque l’intersection de deux ouverts a deux composantes.

**Parcours.** [1. Intervalle, deux ouverts](#exercice-cech-1) · [2. Droite réelle, trois ouverts](#exercice-cech-2) · [3. Cercle, deux ouverts](#exercice-cech-3). Les trois calculs partent des définitions ; les précisions ajoutées après coup sont signalées dans chacun.

**Ce que la comparaison fait voir.** Les trois espaces sont connexes, d’où $H^0\cong\mathbb Z$ dans chacun. Les deux premiers donnent $H^1=0$, tandis que [le cercle](#exercice-cech-3) laisse un $H^1\cong\mathbb Z$ : le quotient y garde une différence entre les deux composantes de l’intersection que les cobords diagonaux ne peuvent pas effacer.

**Règle de travail pour les prochains exercices.** Tu souhaites volontairement partir des définitions et justifier chaque identification. Pour chaque degré $n$, écrire d’abord les sous-groupes **concrets** $\ker\delta^n$ et $\operatorname{im}\delta^{n-1}$, justifier l’image quand elle est annoncée égale à tout un groupe, puis former

$$
H^n=\ker\delta^n/\operatorname{im}\delta^{n-1}.
$$

Ce n’est qu’après le quotient qu’on identifie son type d’isomorphisme, par exemple $\mathbb Z^r$. En degré 0, on pose $\operatorname{im}\delta^{-1}=0$. Cette discipline conservera la différence entre un noyau situé dans un groupe précis et le groupe abstrait qui lui est isomorphe.

<a id="exercice-cech-1"></a>
<details>
<summary>Exercice 1 — $(-2,2)$ recouvert par deux ouverts</summary>

**Données.**

$$
X=(-2,2),\qquad U_0=(-2,1),\qquad U_1=(-1,2),
\qquad\mathcal F=\underline{\mathbb Z}.
$$

**Ta démarche.** Les deux ouverts $U_0,U_1$ sont connexes. Une section localement constante $U_i\to\mathbb Z$ est donc constante et s’identifie à un entier. Tu construis

$$
\check C^0(\mathcal U,\underline{\mathbb Z})
=\underline{\mathbb Z}(U_0)\times\underline{\mathbb Z}(U_1)
\cong\mathbb Z^2.
$$

Leur intersection $U_0\cap U_1=(-1,1)$ est également connexe : $\check C^1=\underline{\mathbb Z}((-1,1))\cong\mathbb Z$. Il n’y a que deux ouverts, donc aucune intersection triple et $\check C^2=0$. Tu obtiens le complexe

$$
0\longrightarrow\mathbb Z^2
\xrightarrow{\delta^0}\mathbb Z\longrightarrow0,
\qquad
\delta^0(a_0,a_1)=a_1-a_0.
$$

Tu calcules son noyau :

$$
\ker\delta^0
=\{(a_0,a_1)\in\mathbb Z^2:a_1-a_0=0\}
=\{(a,a):a\in\mathbb Z\}\cong\mathbb Z.
$$

Comme $\operatorname{im}\delta^{-1}=0$ par convention en degré 0, tu en déduis $\check H^0=\ker\delta^0\cong\mathbb Z$. Tu remarques ensuite que $\delta^0$ est surjective, donc $\operatorname{im}\delta^0=\mathbb Z$. Puisque $\delta^1:\mathbb Z\to0$, son noyau est tout $\mathbb Z$ et

$$
\check H^1
=\frac{\ker\delta^1}{\operatorname{im}\delta^0}
=\frac{\mathbb Z}{\mathbb Z}=0.
$$

**Ce qui était bien compris.** La construction des cochaînes, le cobord et le noyau diagonal étaient corrects dès ton premier calcul.

**Précisions apportées ensuite.** Le sous-groupe *effectivement calculé* est $\{(a,a):a\in\mathbb Z\}\subseteq\mathbb Z^2$ ; dire qu’il est « $\mathbb Z$ » signifie qu’il lui est **isomorphe**, par $a\mapsto(a,a)$. Pour démontrer plutôt qu’affirmer la surjectivité, prenons un $n\in\mathbb Z$ quelconque : $\delta^0(0,n)=n$. Ainsi chaque élément de $\mathbb Z$ appartient à l’image. Le quotient final est le groupe trivial, noté usuellement $0$ ou $\{0\}$. N’importe quel singleton, même $\{\varnothing\}$, peut représenter un groupe trivial si on lui donne son unique loi de groupe ; la notation $0$ est ici la plus claire.

**Lecture géométrique.** Les deux constantes locales coïncident sur l’intersection et se recollent : $H^0\cong\mathbb Z$. Aucune classe de degré 1 ne survit : $H^1=0$, comme attendu pour un intervalle sans boucle. Les ouverts et leur intersection étant contractiles, le calcul de Čech coïncide ici avec la cohomologie du faisceau constant sur $X$.

</details>

<a id="exercice-cech-2"></a>
<details>
<summary>Exercice 2 — $\mathbb R$ recouvert par trois ouverts ; nerf en chemin</summary>

**Données.**

$$
X=\mathbb R,\qquad
U_0=(-\infty,1),\quad U_1=(-1,3),\quad U_2=(2,\infty),
\qquad\mathcal F=\underline{\mathbb Z}.
$$

**Ta démarche.** Tu commences par dessiner le nerf : $U_0-U_1-U_2$, en **barrant l’arête $U_0-U_2$**, car

$$
U_0\cap U_1=(-1,1),\qquad
U_1\cap U_2=(2,3),\qquad
U_0\cap U_2=\varnothing.
$$

Les trois ouverts sont connexes. Tu repars de la définition et obtiens

$$
\check C^0
=\prod_{i=0}^2\underline{\mathbb Z}(U_i)
\cong\mathbb Z^3.
$$

Les deux seules intersections doubles non vides sont connexes, donc

$$
\check C^1
=\underline{\mathbb Z}(U_0\cap U_1)
\times\underline{\mathbb Z}(U_1\cap U_2)
\cong\mathbb Z^2.
$$

Il n’y a pas d’intersection triple non vide, d’où $\check C^2=0$. Avec l’ordre des coordonnées $(01,12)$, ton complexe et ton cobord sont

$$
0\longrightarrow\mathbb Z^3
\xrightarrow{\delta^0}\mathbb Z^2\longrightarrow0,
\qquad
\delta^0(a_0,a_1,a_2)
=(a_1-a_0,\;a_2-a_1).
$$

Un autre ordre des deux intersections permuterait simplement les coordonnées de $\mathbb Z^2$. Tu trouves

$$
\ker\delta^0
=\{(a_0,a_1,a_2):a_1=a_0,\ a_2=a_1\}
=\{(a,a,a):a\in\mathbb Z\}\cong\mathbb Z.
$$

Donc $\check H^0=\ker\delta^0/\operatorname{im}\delta^{-1}=\ker\delta^0\cong\mathbb Z$.

**Précision apportée ensuite : prouver la surjectivité.** Pour tout $(p,q)\in\mathbb Z^2$, choisis $(a_0,a_1,a_2)=(0,p,p+q)$. Alors

$$
\delta^0(0,p,p+q)=(p,q).
$$

Chaque couple est atteint, donc $\operatorname{im}\delta^0=\mathbb Z^2$. Comme $\delta^1:\mathbb Z^2\to0$, $\ker\delta^1=\mathbb Z^2$, et le calcul du quotient est explicite :

$$
\check H^1
=\frac{\ker\delta^1}{\operatorname{im}\delta^0}
=\frac{\mathbb Z^2}{\mathbb Z^2}=0.
$$

**Ce qui était bien compris.** Tu as dessiné le bon nerf, construit les cochaînes, écrit les deux différences et trouvé le noyau diagonal. Le choix $(0,p,p+q)$ justifie ensuite l’image annoncée.

**Lecture géométrique.** Les égalités sur $01$ et $12$ propagent une seule constante globale : $H^0\cong\mathbb Z$. Le chemin n’a pas de boucle et toutes les données sur ses arêtes sont des cobords : $H^1=0$. Les ouverts et intersections non vides sont contractiles, donc ce calcul coïncide avec la cohomologie du faisceau constant sur $\mathbb R$ ; pour un autre faisceau, le nerf seul ne suffirait pas.

</details>

<a id="exercice-cech-3"></a>
<details>
<summary>Exercice 3 — le cercle recouvert par deux ouverts</summary>

**Données.** Deux ouverts connexes couvrent le cercle, mais leur intersection est déconnectée :

$$
S^1=U_0\cup U_1,\qquad
U_0\cap U_1=V^+\sqcup V^-,\qquad
\mathcal F=\underline{\mathbb Z}.
$$

Le faisceau $\underline{\mathbb Z}$ associe à un ouvert les fonctions **localement** constantes vers $\mathbb Z$. C’est ce « localement » qui permet à une section de prendre deux valeurs différentes sur $V^+$ et $V^-$.

**Ta construction des cochaînes.** Par définition,

$$
\check C^0
=\underline{\mathbb Z}(U_0)\times\underline{\mathbb Z}(U_1)
\cong\mathbb Z^2.
$$

Formellement, une $0$-cochaîne est un couple **de sections** $(s_0,s_1)$, avec $s_i:U_i\to\mathbb Z$. Comme chaque $U_i$ est connexe, $s_i$ est constante ; on peut noter sa valeur $a_i$ et représenter la cochaîne par $(a_0,a_1)\in\mathbb Z^2$. La section $s_i$ et sa valeur $a_i$ restent deux objets conceptuellement distincts.

En degré 1, il n’y a qu’une intersection indexée par $01$ :

$$
\check C^1
=\underline{\mathbb Z}(U_0\cap U_1)
=\underline{\mathbb Z}(V^+\sqcup V^-)
\cong\mathbb Z^2.
$$

La dernière identification envoie une section $f$ vers ses deux valeurs, obtenues par les restrictions $(f|_{V^+},f|_{V^-})=(p,q)$. **Les deux $\mathbb Z^2$ ont donc des raisons différentes** : $\check C^0$ a une coordonnée pour chacun des deux ouverts ; $\check C^1$ a deux coordonnées parce que **l’unique** intersection $U_{01}$ a deux composantes. Ces coordonnées sont $V^+,V^-$, et non deux multi-indices $01,10$.

**De la formule abstraite au cobord concret.** Pour une $p$-cochaîne, la formule alternée est

$$
(\delta s)_{i_0\ldots i_{p+1}}
=\sum_{k=0}^{p+1}(-1)^k
s_{i_0\ldots\widehat{i_k}\ldots i_{p+1}}
\big|_{U_{i_0}\cap\cdots\cap U_{i_{p+1}}}.
$$

En posant $p=0$ et les indices $(0,1)$, tu obtiens **une seule section** sur $U_{01}$ :

$$
(\delta^0s)_{01}
=s_1|_{U_{01}}-s_0|_{U_{01}}.
$$

Elle a la valeur $a_1-a_0$ sur chacune des deux composantes, puisque les deux sections de départ sont constantes. Après identification de $\check C^1$ à $\mathbb Z^2$,

$$
\boxed{\delta^0(a_0,a_1)
=(a_1-a_0,\;a_1-a_0).}
$$

Il n’y a pas d’intersection triple : $\check C^2=0$. Le complexe calculé est

$$
0\longrightarrow\mathbb Z^2
\xrightarrow{\delta^0}\mathbb Z^2\longrightarrow0.
$$

**Ton calcul de $H^0$.** L’étage précédent est nul, donc $\check H^0=\ker\delta^0/\operatorname{im}\delta^{-1}=\ker\delta^0$. Tu trouves le sous-groupe concret

$$
\ker\delta^0
=\{(a,a):a\in\mathbb Z\}\subseteq\mathbb Z^2,
\qquad
\check H^0\cong\mathbb Z.
$$

Les sections des deux ouverts doivent coïncider sur l’intersection ; elles se recollent en une unique valeur constante sur tout le cercle. Ce $\mathbb Z$ traduit ici la connexité globale de $S^1$.

**Ton calcul de $H^1$.** Comme $\delta^1:\check C^1\to0$, son noyau est tout $\check C^1\cong\mathbb Z^2$. L’image de $\delta^0$ est exactement la diagonale : tout cobord vaut $(n,n)$, et tout $(n,n)$ est atteint, par exemple par $\delta^0(0,n)$. Ainsi

$$
\ker\delta^1=\mathbb Z^2,\qquad
\operatorname{im}\delta^0
=\{(n,n):n\in\mathbb Z\},
\qquad
\check H^1
=\frac{\mathbb Z^2}{\{(n,n):n\in\mathbb Z\}}
\cong\mathbb Z.
$$

L’application $(p,q)\mapsto q-p$ est surjective et son noyau est cette diagonale : elle décrit explicitement l’isomorphisme du quotient avec $\mathbb Z$. Une $1$-cochaîne quelconque $(p,q)$ peut avoir deux valeurs indépendantes ; seuls les couples diagonaux sont des cobords. Le quotient oublie la variation commune et conserve la différence entre $V^+$ et $V^-$.

**Acquis conceptuels.** Les deux résultats sont isomorphes à $\mathbb Z$, mais $H^0$ vient de la compatibilité des sections locales, tandis que $H^1$ conserve la différence entre $V^+$ et $V^-$ après quotient par les cobords. C’est ce second $\mathbb Z$ qui détecte le trou du cercle. L’exercice distingue aussi la section $s_i$ de sa valeur $a_i$, l’indice $01$ des composantes de $U_{01}$, et les cochaînes $(p,q)$ des seuls cobords $(n,n)$.

**Lien avec la cohomologie du faisceau.** Les ouverts et les deux composantes de leur intersection sont contractiles. Pour $\underline{\mathbb Z}$, ce recouvrement est acyclique ; les groupes de Čech obtenus représentent donc $H^0(S^1,\underline{\mathbb Z})$ et $H^1(S^1,\underline{\mathbb Z})$.

</details>
