import { type ReactNode } from "react";
import { Text } from "@chakra-ui/react";

export type Evidence = 'dots' | 'fingerprints' | 'ghost-orb' | 'freezing-temperatures' | 'ghost-writing' | 'spirit-box' | 'emf-5';

export type Ghost = 'banshee' | 'demon' | 'deogen' | 'goryo' | 'hantu' | 'jinn' | 'mare' | 'moroi' | 'myling' | 'obake' | 'oni'
    | 'onryo' | 'phantom' | 'poltergeist' | 'raiju' | 'revenant' | 'shade' | 'spirit' | 'thaye' | 'mimic' | 'twins'
    | 'wraith' | 'yokai' | 'yurei';

export interface GhostProfile {
  name: string,
  evidences: Evidence[],
  strongEvidence?: Evidence,
  strenght: string,
  weakness: string,
  description: string,
  ability: ReactNode,
  behaviour: ReactNode,
  hunt: ReactNode,
  speed: ReactNode,
  sanity: number
}

export const Ghosts = (ghostSpeed = '100', difficultyMultiplier = 1.0): Record<Ghost, GhostProfile> => {
  return {
    'banshee': {
      name: 'Banshee',
      evidences: [
        'dots',
        'fingerprints',
        'ghost-orb'
      ],
      strenght: "Ne s'attaque qu'à une victime à la fois.",
      weakness: "Ses cris s'entendent au microphone parabolique.",
      description: "La sirène qui chante, connue pour attirer ses victimes à travers ses chants. Elle est connue pour isoler sa proie avant de mettre le coup fatal.",
      ability: <Text>{"Elle choisie une cible au début du jeu et ne changera de cible que si cette dernière meurt (ou quitte la partie)."}</Text>,
      behaviour: (
        <>
         <Text>
            {"Elle a 33% de chance de faire un son paranormal unique lorsque le microphone parabolique est utilisé."}
         </Text>
         <audio controls>
            <source src={'/audio/sound-evidences/banshee-scream.mp3'} type="audio/mpeg" />
         </audio>
         <Text>{"Lorsqu'elle décide d'èrer, si la cible est dans la zone d'investigation, il y a 66% de chance qu'elle ère dans la direction de sa cible, s'arrêtant sur sa cible si possible."}</Text>
         <Text>{"Elle préfère causer des événements où elle chante. Si elle fait un événement fantômatique où elle chante, que l'événement soit dirigé vers sa cible et que sa cible la fait disparaître prématurément en la touchant, alors il perdra 15% de santé mentale au lieu de 10%."}</Text>
        </>
      ),
      hunt: `
          <p>La chasse est basée sur la santé mentale de la cible de la Banshee, ainsi une chasse sera démarrée si sa cible est en dessous de 50% de santé mentale. Ça signifie qu'une chasse peut débuter entre 87,5% et 12,5% de santé mentale moyenne.</p>
          <p>Tous les joueurs, autres que sa cible, seront ignorés durant une chasse. Si une chasse démarre sans sa cible présente dans la zone d'investigation, elle chassera comme les autres fantômes.</p>
          <p>L'objectif <strong class="italic">"repousser le fantôme lorsqu'il chasse quelqu'un"</strong> n'est pas possible avec de <strong class="italic">l'encent</strong> (à moins qu'elle ne chasse sa cible lorsque ça se produit).</p>
      `,
      speed: `
          <p><strong>Vitesse de base :</strong> ${difficultyMultiplier * 1.7} m/s</p>
          <audio controls class="sound-display">
              <source src="./assets/audio/footsteps/${ghostSpeed}/1.70.mp3" type="audio/mpeg" />
          </audio>
          <p><strong>Victime en ligne de vue :</strong> ${difficultyMultiplier * 2.5} m/s</p>
          <audio controls class="sound-display">
              <source src="./assets/audio/footsteps/${ghostSpeed}/2.50.mp3" type="audio/mpeg" />
          </audio>
      `,
      sanity: 50
    },
    'demon': {
      name: 'Démon',
      evidences: [
        'fingerprints',
        'freezing-temperatures',
        'ghost-writing'
      ],
      strenght: "Ils chassent plus souvent que les autres entités.",
      weakness: "L'effet du crucifix est accrus contre eux jusqu'à 5 mètres.",
      description: "Un démon est l'une des pires entités que l'on puisse rencontrer. Il est connu pour attaquer sans raison.",
      ability: "<p>Il peut décider de démarrer une chasse quand il le désire.</p>",
      behaviour: "<p>La portée du <strong class=\"italic\">crucifix</strong> est de 5 mètres pour lui (au lieu de 3 mètres pour les autres).</p>",
      hunt: `
          <p>Il peut démarrer des chasses dès que la santé moyenne de l'équipe est en dessous de 70%.</p>
          <p>Le Démon peut démarrer une chasse toutes les 20 secondes (contrairement aux autres entités peuvent démarrer une chasse toutes les 25 secondes).</p>
          <p>Si l'encent est employé sur le démon, son temps avant de pouvoir relancer une chasse est de 60 secondes au lieu de 90 secondes.</p>
      `,
      speed: `
          <p><strong>Vitesse de base :</strong> ${difficultyMultiplier * 1.7} m/s</p>
          <audio controls class="sound-display">
              <source src="./assets/audio/footsteps/${ghostSpeed}/1.70.mp3" type="audio/mpeg" />
          </audio>
          <p><strong>Victime en ligne de vue :</strong> ${difficultyMultiplier * 2.5} m/s</p>
          <audio controls class="sound-display">
              <source src="./assets/audio/footsteps/${ghostSpeed}/2.50.mp3" type="audio/mpeg" />
          </audio>
      `,
      sanity: 100
    },
    'deogen': {
        name: 'Deogen',
        evidences: [
            'dots',
            'ghost-writing',
            'spirit-box'
        ],
        strongEvidence: 'spirit-box',
        strenght: "Ils sentent constamment les vivants durant une chasse et avancent rapidement vers leurs positions.",
        weakness: "Ils avancent lentement quand ils voient leurs victimes.",
        description: "Parfois entourés d'un brouillard sans fin, les Deogen ont échappé aux chasseurs de fantômes pendant des années. Les rapports indiquent que ces entités trouvent même leurs proies les mieux cachés, avant de les harcelées jusqu'à l'épuisement.",
        ability: "<p>Il connaît la position de tous les joueurs.</p>",
        behaviour: `
            <p>Il a 33% de chance par question de produire une réponse unique à la <strong class="italic">Spirit Box </strong> lorsque le joueur est situé à 1 mètre de ce dernier: une respiration lourde et constante durant 3 à 4 secondes.</p>
            <audio controls id="deogen-breath" class="sound-display">
                <source src="./assets/audio/sound-evidences/deogen-breath.mp3" type="audio/mpeg" />
            </audio>
        `,
        hunt: `
            <p>Il ne peut démarrer une chasse que lorsque la santé mentale est en dessous de 40%.</p>
            <p>Lors du début d'une chasse, il ira vers le joueur le plus proche de lui. Il peut occasionnellement choisir un joueur au hasard.</p>
            <p>Durant une chasse, sa vitesse est déterminée par la distance qui le sépare du joueur (2.5 à 6 mètres de distance). Au plus le joueur est loin, au plus il sera rapide.</p>
            <p>Si il est à plus de 6 mètres, il avancera à 3 m/s et si il est à moins de 2.5 mètres, alors il avancera à 0.4 m/s. Sa vitesse entre les deux distances ralentie au plus il s'approche du joueur.</p>
            <p>Il clignotte plus rapidement durant une chasse ; il est visible durant de plus long intervales et/ou il est invisible durant de plus court intervales.</p>
            <p>Si on utilise l'encent contre lui ou qu'il ne chasse pas d'autres joueurs, sa vitesse restera constante, où sera de 1.6 m/s si sa vitesse actuelle est supérieur à 3 m/s.</p>
        `,
        speed: `
            <p><strong>Vitesse proche d'une victime :</strong> ${difficultyMultiplier * 0.4} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/0.40.mp3" type="audio/mpeg" />
            </audio>
            <p><strong>Vitesse loin d'une victime :</strong> ${difficultyMultiplier * 3} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/3.00.mp3" type="audio/mpeg" />
            </audio>
        `,
        sanity: 40
    },
    'goryo': {
        name: 'Goryo',
        evidences: [
            'dots',
            'emf-5',
            'fingerprints'
        ],
        strongEvidence: 'dots',
        strenght: "Ses interactions avec le projecteur D.O.T.S. ne sont visible qu'au travers une caméra.",
        weakness: "Tends à rester dans sa pièce.",
        description: "Lorsqu'un Goryo passe à travers un projecteur D.O.T.S., employer une caméra est le seul moyen pour le voir.",
        ability: `<p>Rien à signaler.</p>`,
        behaviour: `
            <p>Il ne peut erré que jusqu'à 5 mètres de distance, au lieu des 10 mètres maximum pour les autres fantômes.</p>
            <p>Il ne peut pas changer sa pièce favorite.</p>
            <p>Il ne réagit aux <strong class="italic">D.O.T.S.</strong> que si aucun joueur n'est dans sa pièce.</p>
            <p>Aussi, sa silhouette au <strong class="italic">Projecteur D.O.T.S.</strong> n'est visible qu'au travers la caméra et n'est donc pas visible à l'oeil nu.</p>
            <p>Dans quelques rares cas, il est possible de le voir avec les yeux en étant dans la même pièce: si il ère dans une pièce adjacente, il peut interagir avec le <strong class="italic">Projecteur D.O.T.S.</strong>.</p>
        `,
        hunt: `<p>Rien à signaler.</p>`,
        speed: `
            <p><strong>Vitesse de base :</strong> ${difficultyMultiplier * 1.7} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/1.70.mp3" type="audio/mpeg" />
            </audio>
            <p><strong>Victime en ligne de vue :</strong> ${difficultyMultiplier * 2.5} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/2.50.mp3" type="audio/mpeg" />
            </audio>
        `,
        sanity: 50
    },
    'hantu': {
        name: 'Hantu',
        evidences: [
            'fingerprints',
            'freezing-temperatures',
            'ghost-orb'
        ],
        strongEvidence: 'freezing-temperatures',
        strenght: "Il avance plus rapidement dans les températures les plus basses.",
        weakness: "Les températures les plus élevées le font ralentir.",
        description: "Le Hantu est une entitée rare qui apprécie les climats les plus froids. Le froid tends à les rendres plus aggressif et puissant.",
        ability: `
            <p>Rien à signaler.</p>
        `,
        behaviour: `
            <p>Il ne peut pas allumer le fusible.</p>
            <p>Il peut éteindre le fusible deux fois plus souvent.</p>
        `,
        hunt: `
            <p>Sa vitesse dépends de la température autour de lui. Lorsque le fusible est branché, il sera en conséquent plus lent parce que la maison sera chauffée.</p>
            <p>Il n'accélère pas si on le garde en ligne de vue.</p>
            <p>Lorsque le Hantu est visible lors d'une chasse, il émet une respiration glacée au niveau de sa tête et ce dans toutes les pièces tant que le disjoncteur est éteint (Les joueurs décédés ne peuvent pas voir ce souffle).</p>
            <p>Il est conseillé de ne pas le faire tourner trop longtemps autour de fourniture lorsque la pièce est chaude puisque la simple présence du Hantu suffit à faire baisser la température et donc lui augmente sa vitesse au fur et à mesure.</p>
        `,
        speed: `
            <p><strong>Vitesse dépendante de la <strong class="italic">température</strong> :</strong></p>
            <p>• <strong>inférieur à 3°C :</strong> ${difficultyMultiplier * 2.7} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/2.70.mp3" type="audio/mpeg" />
            </audio>
            <p>• <strong>entre 3 - 6°C :</strong> ${difficultyMultiplier * 2.5} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/2.50.mp3" type="audio/mpeg" />
            </audio>
            <p>• <strong>entre 6 - 9°C :</strong> ${difficultyMultiplier * 2.3} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/2.30.mp3" type="audio/mpeg" />
            </audio>
            <p>• <strong>entre 9 - 12°C :</strong> ${difficultyMultiplier * 2.1} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/2.10.mp3" type="audio/mpeg" />
            </audio>
            <p>• <strong>entre 12 - 15°C :</strong> ${difficultyMultiplier * 1.75} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/1.75.mp3" type="audio/mpeg" />
            </audio>
            <p>• <strong>supérieur à 15°C :</strong> ${difficultyMultiplier * 1.4} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/1.40.mp3" type="audio/mpeg" />
            </audio>
        `,
        sanity: 50
    },
    'jinn': {
        name: 'Djinn',
        evidences: [
            'emf-5',
            'fingerprints',
            'freezing-temperatures'
        ],
        strenght: "Il avance à plus grande vitesse lorsque sa victime s'éloigne.",
        weakness: "Il ne peut pas utiliser son abilité si le courant est coupé.",
        description: "Un Djinn est une entitée territorial qui attaque quand il est menacé. Il est également connu pour se déplacer à une vitesse signifiante.",
        ability: `
            <p>Si le fusible est branché, il peut utiliser son abilité qui réduit de 25% la santé mentale de tous les joueurs présent dans la même pièce ou aux environs de 3 mètres de lui et génère au fusible un <strong class="italic">EMF 2</strong> ou <strong class="italic">EMF 5</strong> si la santé mentale d'un joueur a été drainée.</p>
            <p>En laissant un <strong class="italic">EMF</strong> au niveau du fusible, si il capte quelque chose mais que le fusible ne s'est jamais allumé ou éteint, alors il est fort probable que ce soit le Jinn.</p>
        `,
        behaviour: `
            <p>Il ne peut pas éteindre le fusible, seulement le faire sauter en allumant une lampe de trop.</p>
        `,
        hunt: `
            <p>Si il voit un joueur, il avance jusqu'au joueur à une vitesse de 2,5 m/s instantanément jusqu'à ce qu'il soit à environs 2 mètres du joueur avant d'avancer à sa vitesse de base.</p>
        `,
        speed: `
            <p><strong>Vitesse de base :</strong> ${difficultyMultiplier * 1.7} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/1.70.mp3" type="audio/mpeg" />
            </audio>
            <p><strong>Victime en ligne de vue :</strong> ${difficultyMultiplier * 2.5} m/s (instantané)</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/2.50.mp3" type="audio/mpeg" />
            </audio>
        `,
        sanity: 50
    },
    'mare': {
        name: 'Cauchemar',
        evidences: [
            'ghost-orb',
            'ghost-writing',
            'spirit-box'
        ],
        strenght: "Attaque plus souvent dans le noir.",
        weakness: "Allumer la lumière réduit les chances qu'il attaque.",
        description: "Le Cauchemar est la source de tous les cauchemars, le rendant plus puissant dans la pénombre.",
        ability: "<p>Rien à signaler.</p>",
        behaviour: `
            <p>Si on allume une lampe près de lui, il a une chance de l'éteindre presque immédiatement. Ça s'applique également aux télévisions et ordinateurs.</p>
            <p>Il n'allume jamais de lampe. Si il décide d'erré, il choisira plus souvent des pièces qui ne sont pas éclairées.</p>
            <p>Il fait plus souvent des événements où il explose des ampoules.</p>
        `,
        hunt: `
            <p>Si les lampes sont éteintes, il peut déclancher une chasse à partir de 60% de santé mentale. Dans le cas contraire, ce sera à partir de 40%.</p>
        `,
        speed: `
            <p><strong>Vitesse de base :</strong> ${difficultyMultiplier * 1.7} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/1.70.mp3" type="audio/mpeg" />
            </audio>
            <p><strong>Victime en ligne de vue :</strong> ${difficultyMultiplier * 2.5} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/2.50.mp3" type="audio/mpeg" />
            </audio>
        `,
        sanity: 60
    },
    'moroi': {
        name: 'Moroï',
        evidences: [
            'freezing-temperatures',
            'ghost-writing',
            'spirit-box'
        ],
        strongEvidence: 'spirit-box',
        strenght: "Il avance relativement plus vite lorsque les enquêteurs ont peu de santé mentale. Ils peuvent également faire perdre la santé mentale des enquêteurs plus rapidement qu'usuellement durant une enquête.",
        weakness: "L'encent les aveugles plus longtemps durant les chasses.",
        description: "Le Moroï est sorti de sa tombe pour absorber l'énergie des vivants. Ils sont connu pour placer des malédictions sur leurs victimes, curable uniquement par antidotes ou en partant au loin.",
        ability: `
            <p>Si un joueur obtient une réponse à la <strong class="italic">Spirit Box</strong> où entends un bruit au <strong class="italic">microphone parabolique</strong>, il maudira ce joueur tant qu'il restera dans la zone d'investigation (la lumière n'a aucune importance). Il est possible d'être maudit plusieurs fois mais pas d'accumuler la malédiction.</p>
            <p>On peut briser la malédiction en prenant des <strong class="italic">pillules</strong>.</p>
        `,
        behaviour: `
            <p>Rien à signaler.</p>
        `,
        hunt: `
            <p>Il devient plus rapide au plus la santé mentale est basse. Entre 1,5 m/s avec une santé mentale moyenne de 50% et 2,25 m/s à 0%. Il y a une augmentation de sa vitesse de 0.075 m/s pour chaque 5% de santé mentale perdue.</p>
            <p>Si on utilise <strong class="italic">l'encent</strong>, la durée durant laquelle il ne peut pas voir est de 12 secondes (au lieu des 6 usuelles).</p>
            <p>Il accélère lorsqu'il est vu par le joueur. A sa vitesse maximum, il est plus rapide qu'un Revenant.</p>
        `,
        speed: `
            <p><strong>Vitesse de base :</strong> entre ${difficultyMultiplier * 1.5} et ${difficultyMultiplier * 2.25} m/s</p>
            <p><strong>${difficultyMultiplier * 1.5} :</strong></p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/1.50.mp3" type="audio/mpeg" />
            </audio>
            <p><strong>${difficultyMultiplier * 2.25} :</strong></p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/2.25.mp3" type="audio/mpeg" />
            </audio>
            <p><strong>Victime en ligne de vue :</strong> ${difficultyMultiplier * 2.25} et ${difficultyMultiplier * 3.71} m/s</p>
            <p><strong>${difficultyMultiplier * 3.71} :</strong></p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/3.71.mp3" type="audio/mpeg" />
            </audio>
        `,
        sanity: 50
    },
    'myling': {
        name: 'Myling',
        evidences: [
            'emf-5',
            'fingerprints',
            'ghost-writing'
        ],
        strenght: "Ses pas sont plus silencieux lorsqu'il chasse.",
        weakness: "Produit des sons paranormaux plus fréquement.",
        description: "Le Myling est une entitée très vocale et active. Il y a des rumeurs comme quoi ils sont silencieux lorsqu'ils chassent leurs proies.",
        ability: `
            <p>Rien à signaler.</p>
        `,
        behaviour: `
            <p>Il émet beaucoup plus de son paranormal que les autres entités au <strong class="italic">microphone parabolique</strong>.</p>
        `,
        hunt: `
            <p>Le son de ses pas ne s'entends que s'il se situe à une distance d'environs 12 mètres.</p>
            <p>La distance audible des pas d'un Myling lors d'une chasse est perceptible plus ou moins lorsqu'il commence à interférer avec l'électronique.</p>
        `,
        speed: `
            <p><strong>Vitesse de base :</strong> ${difficultyMultiplier * 1.7} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/1.70.mp3" type="audio/mpeg" />
            </audio>
            <p><strong>Victime en ligne de vue :</strong> ${difficultyMultiplier * 2.5} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/2.50.mp3" type="audio/mpeg" />
            </audio>
        `,
        sanity: 50
    },
    'obake': {
        name: 'Obake',
        evidences: [
            'emf-5',
            'fingerprints',
            'ghost-orb'
        ],
        strongEvidence: 'fingerprints',
        strenght: "Ils peuvent laisser des empruntes qui disparaissent rapidement.",
        weakness: "Il laisse parfois une emprunte à six doigts.",
        description: "Les Obakes sont terrifiant au changement de corps, capable de prendre bien des formes. Ils ont été vu prendre une forme humanoïde pour attirer leurs proies.",
        ability: `
            <p>Il peut occasionnellement utiliser son abiliter qui réduit le temps d'existence des <strong class="italic">empruntes</strong> sur la map de moitié (il peut aussi l'utiliser plusieurs fois de suite, réduisant drastiquement le temps de vie des <strong class="italic">empruntes</strong>).</p>
        `,
        behaviour: `
            <p>Lorsqu'il interagit avec une surface, il a 75% de chance de laisser une <strong class="italic">emprunte</strong> (au lieu des 100% usuel).</p>
            <p>Il y a 16,7% de chance qu'il crée une <strong class="italic">emprunte</strong> unique:</p>
            <p>• Une trace de main à six doigts.</p>
            <p>• Deux empruntes de doigts sur un interrupteur au lieu d'une seule.</p>
            <p>• Cinq traces de doigts sur le clavier ou les portes de prison au lieu de quatre.</p>
        `,
        hunt: `
            <p>Il a 6.66% de chance à chaque fois qu'il clignotte de changer sa forme en une autre entité puis de reprendre sa forme originel. C'est garanti d'avoir lieu au moins une fois par chasse (les joueurs décédés ne peuvent pas le voir).</p>
        `,
        speed: `
            <p><strong>Vitesse de base :</strong> ${difficultyMultiplier * 1.7} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/1.70.mp3" type="audio/mpeg" />
            </audio>
            <p><strong>Victime en ligne de vue :</strong> ${difficultyMultiplier * 2.5} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/2.50.mp3" type="audio/mpeg" />
            </audio>
        `,
        sanity: 50
    },
    'oni': {
        name: 'Oni',
        evidences: [
            'dots',
            'emf-5',
            'freezing-temperatures'
        ],
        strenght: "Augmentation des activités et des événements fantômatiques.",
        weakness: "L'augmentation des activités des Onis les rends plus aisés à trouver.",
        description: "Les Onis aiment effrayer leurs victimes autant que possible avant d'attaquer. Ils sont souvent vu dans une forme physique, gardant le lieu de leur décès.",
        ability: `
            <p>Il draine le double de la santé mentale (20%) par rapport aux autres fantômes (10%) lorsqu'on le touche lors d'un événement fantômatique.</p>
        `,
        behaviour: `
            <p>Il est très actif et interagit plus souvent avec les objets, surtout si il y a des joueurs dans sa pièce.</p>
            <p>Il peut se manifester entièrement durant un événement.</p>
            <p>Il est incapable de produire l'événement de type "ballon d'air". Ainsi, on peut retirer l'Oni si l'on entends le son :</p>
            <audio controls id="sound-air-breath" class="sound-display">
                <source src="./assets/audio/sound-evidences/air-breath.mp3" type="audio/mpeg" />
            </audio>
        `,
        hunt: `
            <p>Il peut être vu plus longtemps lorsqu'il chasse (il est visible entre 0.08 et 0.3 secondes avant de devenir invisible).</p>
        `,
        speed: `
            <p><strong>Vitesse de base :</strong> ${difficultyMultiplier * 1.7} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/1.70.mp3" type="audio/mpeg" />
            </audio>
            <p><strong>Victime en ligne de vue :</strong> ${difficultyMultiplier * 2.5} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/2.50.mp3" type="audio/mpeg" />
            </audio>
        `,
        sanity: 50
    },
    'onryo': {
        name: 'Onryo',
        evidences: [
            'freezing-temperatures',
            'ghost-orb',
            'spirit-box'
        ],
        strenght: "Une flamme qui s'éteint peu provoquer l'attaque d'un Onryo.",
        weakness: "La présence des flammes réduit l'abilité de l'Onryo à attaquer.",
        description: "L'Onryo est souvent référer en tant qu' « Esprit vengeur ». Ils volent les âmes des de ses victimes mourrantes pour se venger. Cette entité est connue pour être effrayée du feu, et fera tout en son pouvoir pour s'en éloigner.",
        ability: `
            <p>Si une <strong class="italic">bougie</strong>, un <strong class="italic">briquet</strong> ou un feu de camp est éteint par ce dernier, on considère qu'il éteint une flamme.</p>
            <p>L'Onryo possède un compteur de flamme éteinte (qui ne vaut que pour celles qu'il éteint lui-même).</p>
            <p>Il peut éteindre deux flammes puis, lorsqu'il en éteindra une troisième, le compteur se réinitialisera et il aura une probabilité de 50% de démarrer une chasse.</p>
            <p>En multijoueur, la probabilité qu'il démarre une chasse lorsqu'il éteint la troisième flamme est accue de 25% par joueur décédé.</p>
        `,
        behaviour: `
            <p>Il a une plus haute chance que les autres fantômes d'éteindre une <strong class="italic">bougie</strong>.</p>
            <p>Si une flamme est proche de lui, elle agit tel un <strong class="italic">crucifix</strong>, l'empéchant de chasser à une distance de 4 mètres.</p>
            <p>Plusieurs situations particulières peuvent avoir lieu en conséquence de son comportement et son abilité :</p>
            <p>• Une <strong class="italic">bougie</strong> et un <strong class="italic">crucifix</strong> sont à portée de l'Oryo, et il éteint la <strong class="italic">bougie</strong>. Les 50% de chances réussissent mais suite à la présence du <strong class="italic">crucifix</strong>, la chasse n'a pas lieu.</p>
            <p>• Deux <strong class="italic">bougies</strong> sont à portée de l'Onryo et il en éteint l'une d'entre elles. Les 50% de chances réussissent mais comme il y a une autre <strong class="italic">bougie</strong>, la chasse n'a pas lieu.</p>
            <p>• Une <strong class="italic">bougie</strong> est à portée de l'Onryo et il tente de chasser naturellement. La <strong class="italic">bougie</strong> s'éteindra et la chasse n'aura pas lieu.</p>
            <p> <strong class="italic">Remarque:</strong> Il peut y avoir jusqu'à 6 secondes de délais avant le début de l'initialisation de la chasse.</p>
        `,
        hunt: `
            <p>Il peut démarrer une chasse dès que la santé mentale est en dessous de 60%.</p>
        `,
        speed: `
            <p><strong>Vitesse de base :</strong> ${difficultyMultiplier * 1.7} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/1.70.mp3" type="audio/mpeg" />
            </audio>
            <p><strong>Victime en ligne de vue :</strong> ${difficultyMultiplier * 2.5} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/2.50.mp3" type="audio/mpeg" />
            </audio>
        `,
        sanity: 60
    },
    'phantom': {
        name: 'Fantôme',
        evidences: [
            'dots',
            'fingerprints',
            'spirit-box'
        ],
        strenght: "Regarder un fantôme fait perdre considérablement la santé mentale.",
        weakness: "Prendre une photo d'un fantôme le fait disparaître brièvement.",
        description: "Un fantôme est une entitée qui peut posséder le vivant, instaurant la peur à quiconque auprès de lui. Ils sont communément invoqués depuis une Ouija.",
        ability: `
            <p>Rien à signaler.</p>
        `,
        behaviour: `
            <p>Si il est prit en photo durant un événement, il disparaît temporairement pour le reste de l'événement mais le son de son événement continue. Les interférences cessent et il ne sera pas visible sur la photo.</p>
            <p>Être aux environs de 10 mètres d'un fantôme en étant en ligne de vue de ce dernier réduit la santé mentale de ~0.5% par seconde.</p>
            <p>Il peut choisir un joueur au hasard et marcher vers ce dernier créant un <strong class="italic">EMF 2</strong> à la position où il a débuter son érrance.</p>
        `,
        hunt: `
            <p>Si il est prit en photo durant une chasse, il ne sera pas visible sur la photo.</p>
            <p>Le fantôme est invisible durant une période de 1 à 2 secondes comparé aux autres entités qui ont une période d'invisiblité de 0.3 à 1 seconde lors d'une chasse.</p>
        `,
        speed: `
            <p><strong>Vitesse de base :</strong> ${difficultyMultiplier * 1.7} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/1.70.mp3" type="audio/mpeg" />
            </audio>
            <p><strong>Victime en ligne de vue :</strong> ${difficultyMultiplier * 2.5} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/2.50.mp3" type="audio/mpeg" />
            </audio>
        `,
        sanity: 50
    },
    'poltergeist': {
        name: 'Poltergeist',
        evidences: [
            'fingerprints',
            'ghost-writing',
            'spirit-box'
        ],
        strenght: "Capable de lancer plusieurs objets en une fois.",
        weakness: "Il deviennent impuissant sans rien autour d'eux.",
        description: "L'une des entités les plus connues, le Poltergeist. Connu pour manipulater les objets autour de lui pour instaurer la peur en ses victimes.",
        ability: `
            <p>Rien à signaler.</p>
        `,
        behaviour: `
            <p>Il peut occasionnellement lancer de multiples objets d'un coup, créant un <strong class="italic">EMF 3</strong>. Les objets sont lancés avec plus de force que tous les autres fantômes (une force de 2 ~ 6 par opposition aux autres fantômes ayant une force de 1 ~ 3).</p>
            <p>La santé mentale est réduite de 2% pour chaque objet lancé.</p>
        `,
        hunt: `
            <p>Pendant une chasse, lance un objet toutes les 0,5 secondes si il y en a un à sa proximité contrairement aux autres entités qui n'ont que 50% de chance d'en lancer toutes les 0,5 secondes.</p>
        `,
        speed: `
            <p><strong>Vitesse de base :</strong> ${difficultyMultiplier * 1.7} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/1.70.mp3" type="audio/mpeg" />
            </audio>
            <p><strong>Victime en ligne de vue :</strong> ${difficultyMultiplier * 2.5} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/2.50.mp3" type="audio/mpeg" />
            </audio>
        `,
        sanity: 50
    },
    'raiju': {
        name: 'Raiju',
        evidences: [
            'dots',
            'emf-5',
            'ghost-orb'
        ],
        strenght: "Il avance rapidement près des objets électroniques.",
        weakness: "Il brouille l'équipement électronique de plus loin lorsqu'il chasse.",
        description: "Un Raiju est un démon qui se courrit du courant électrique. Généralement calme, ils peuvent commencer à s'agiter quand ils sont submergés de puissance.",
        ability: `
            <p>Rien à signaler.</p>
        `,
        behaviour: `
            <p>Lors d'un événement, il interagit avec l'électronique dans un rayon de 15 mètres (au lieu de 10 mètres pour les autres entités).</p>
        `,
        hunt: `
            <p>Lorsqu'un objet électronique est à porté, il peut démarré une chasse dès 65% de santé mentale, sinon il ne pourra que dès 50%.</p>
            <p>Suivant la taille de la map, si il est dans la portée d'une pièce d'équipement électronique, sa vitesse sera de 2,5 m/s:</p>
            <p>• 6 mètres sur une petite map.</p>
            <p>• 8 mètres sur une map moyenne.</p>
            <p>• 10 mètres sur une grande map.</p>
            <p>Ces effets s'appliquent sur l'équipement au sol et tenu dans les mains.</p>
            <p>Ne sont pas comptés à l'accélération de la vitesse :</p>
            <p>• La caméra frontale</p>
            <p>• Les caméras et appareils photos jetés au sol</p>
            <p>• Les <strong class="italic">capteurs de mouvements</strong>, les <strong class="italic">capteurs sonores</strong> et les projecteurs <strong class="italic">D.O.T.S.</strong> jetés au sol ou tenu en main.</p>
            <p>• Les objets dans l'inventaire (sauf la <strong class="italic">lampe de poche</strong> et <strong class="italic">lampe de poche puissante</strong> lorsqu'elles sont allumées)</p>
            <p>• Les équipements électroniques qui ne proviennent pas du camion</p>
        `,
        speed: `
            <p><strong>Vitesse de base :</strong> ${difficultyMultiplier * 1.7} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/1.70.mp3" type="audio/mpeg" />
            </audio>
            <p><strong>Près d'équipement électronique :</strong> ${difficultyMultiplier * 2.5} m/s</p>
            <p><strong>Victime en ligne de vue :</strong> ${difficultyMultiplier * 2.5} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/2.50.mp3" type="audio/mpeg" />
            </audio>
        `,
        sanity: 65
    },
    'revenant': {
        name: 'Revenant',
        evidences: [
            'freezing-temperatures',
            'ghost-orb',
            'ghost-writing'
        ],
        strenght: "Il avance beaucoup plus vite lorsqu'il perçoit ses cibles lorsqu'il chasse.",
        weakness: "Il est très lent lorsqu'il ne chasse pas une cible.",
        description: "Le Revenant est une entitée violente qui attaque sans discrimination. Leur vitesse peut être décevante, vu qu'ils sont lent pendant la dormance ; cependant, aussitôt qu'ils chassent ils peuvent avancer incroyablement vite.",
        ability: `
            <p>Rien à signaler.</p>
        `,
        behaviour: `
            <p>Rien à signaler.</p>
        `,
        hunt: `
            <p>Sa vitesse lors d'une chasse varie fortement des autres entités. Il est très lent si il n'a pas de cible en vue (1 m/s), sinon il est extrêmement rapide (3 m/s).</p>
            <p>Il accélère lorsqu'il voit un joueur et continuera d'accélérer jusqu'à atteindre la dernière position connue du joueur. Ce sera seulement après qu'il ralentira durant 2.7 secondes.</p>
        `,
        speed: `
            <p><strong>Vitesse de base :</strong> ${difficultyMultiplier * 1} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/1.00.mp3" type="audio/mpeg" />
            </audio>
            <p><strong>Victime en ligne de vue :</strong> ${difficultyMultiplier * 3} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/3.00.mp3" type="audio/mpeg" />
            </audio>
        `,
        sanity: 50
    },
    'shade': {
        name: 'Ombre',
        evidences: [
            'emf-5',
            'freezing-temperatures',
            'ghost-writing'
        ],
        strenght: "Sa timidité la rends difficile à localiser et à obtenir une évidence.",
        weakness: "Elle a moins de chance d'attaquer si plusieurs personnes sont dans les alentours.",
        description: "Une ombre est connue pour être très timide. Plusieurs évidences supposent que l'Ombre arrêtera toute activité paranormal si il y a plusieurs personnes dans les environs.",
        ability: `
            <p>Rien à signaler.</p>
        `,
        behaviour: `
            <p>Au plus la santé mentale est haute, au moins elle est active.</p>
            <p>Elle possède 0% de chance de réussir un événement lorsque la santé mentale est à 100%. La chance de succès d'un événement croît de 2% par pourcentage de santé mentale perdue.</p>
            <p>Ainsi, une ombre aura 100% de chance de pouvoir effectuer un événement lorsque la santé mentale sera de 50% et moins.</p>
            <p>L'ombre préfère se hisser dans les oreilles du joueur, mais peut se manifester en tant qu'ombre (rare).</p>
            <p>Il est incapable de donner une interaction <strong class="italic">EMF 3</strong> lorsqu'il y a un ou plusieurs joueurs dans la même pièce que lui, mais peut le faire dans une pièce adjacente.</p>
            <p>Si elle est invoqué, elle a une chance d'apparaître en tant qu'ombre noir transparente plutôt que dans sa forme complète tant qu'elle est piégée dans le cercle d'invocation.</p>
        `,
        hunt: `
            <p>Elle ne démarre pas de chasse tant que la santé mentale n'est pas en dessous de 35%.</p>
            <p>Elle est incapable de chasser lorsqu'il y a un ou plusieurs joueurs dans la même pièce que lui.</p>
        `,
        speed: `
            <p><strong>Vitesse de base :</strong> ${difficultyMultiplier * 1.7} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/1.70.mp3" type="audio/mpeg" />
            </audio>
            <p><strong>Victime en ligne de vue :</strong> ${difficultyMultiplier * 2.5} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/2.50.mp3" type="audio/mpeg" />
            </audio>
        `,
        sanity: 35
    },
    'spirit': {
        name: 'Esprit',
        evidences: [
            'emf-5',
            'ghost-writing',
            'spirit-box'
        ],
        strenght: "Aucune.",
        weakness: "L'encent est très efficace, empêchant une chasse durant plus longtemps.",
        description: "L'Esprit est une entitée très commune. Ils sont très puissants, mais passif, et n'attaque que quand ils doivent le faire. Ils défendent coûte que coûte le lieu de leur décès, tuant quiconque est surpris à dépasser son temps d'accueil.",
        ability: `
            <p>Rien à signaler.</p>
        `,
        behaviour: `
            <p>Si un encent est utilisé près de lui, il ne pourra pas démarrer une chasse pendant 180 secondes (au lieu de 90 secondes pour les autres entités).</p>
        `,
        hunt: `
            <p>Rien à signaler.</p>
        `,
        speed: `
            <p><strong>Vitesse de base :</strong> ${difficultyMultiplier * 1.7} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/1.70.mp3" type="audio/mpeg" />
            </audio>
            <p><strong>Victime en ligne de vue :</strong> ${difficultyMultiplier * 2.5} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/2.50.mp3" type="audio/mpeg" />
            </audio>
        `,
        sanity: 50
    },
    'thaye': {
        name: 'Thayé',
        evidences: [
            'dots',
            'ghost-orb',
            'ghost-writing'
        ],
        strenght: "Entrer dans leur champ d'action les rends plus actifs, défensif et agile.",
        weakness: "Ils deviennent plus lent et moins actif au fil du temps.",
        description: "Le Thayé est connu pour vieillir rapidement au fil du temps, même dans l'au-delà. De ce que nous avons appris, ils semblent se détériorer plus rapidement à la présence des vivants.",
        ability: `
            <p>Toutes les 1 à 2 minutes, le Thayé va tenter de vieillir. Si un joueur se trouve dans la même pièce que lui, alors il vieilli. Si aucun joueur n'est présent, alors il recommencera le processus 30 secondes plus tard.</p>
            <p>Il peut vieillir jusqu'à 10 fois</p>
            <p>Chaque fois qu'il prends de l'âge :</p>
            <p>• La santé mentale minimum pour qu'il démarre une chasse diminue de 6%.</p>
            <p>• Sa vitesse se réduit de 0.175 m/s lors de la chasse.</p>
            <p>• 15% de réduction sur les chances d'obtenir un événement / une interaction.</p>
        `,
        behaviour: `
            <p>Au début de la partie, le Thayé a 200% de faire une interaction ou un événement paranormal.</p>
            <p>Au fil du temps, l'âge donné par la planche Ouija augmentera.</p>
        `,
        hunt: `
            <p>Suite à son abilité, le Thayé n'accélère pas lors d'une chasse.</p>
        `,
        speed: `
            <p><strong>Vitesse quand il est jeune :</strong> ${difficultyMultiplier * 2.75} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/2.75.mp3" type="audio/mpeg" />
            </audio>
            <p><strong>Vitesse quand il est vieux :</strong> ${difficultyMultiplier} m/s</p>
            <audio controls class="sound-display">
                <source src="./assets/audio/footsteps/${ghostSpeed}/1.00.mp3" type="audio/mpeg" />
            </audio>
        `,
        sanity: 75
    },
    'mimic': {
        name: 'Le Mimic',
        evidences: [
            'fingerprints',
            'freezing-temperatures',
            'ghost-orb',
            'spirit-box'
        ],
        strongEvidence: 'ghost-orb',
        strenght: "Peut copier les abilités et les traîts des autres entitées.",
        weakness: "Présente les orbes fantômatique en évidence secondaire.",
        description: "Le Mimic est un fantôme insaisissable, mystérieux et imitateur qui reproduit les traits et les comportements d'autres personnes, y compris d'autres types de fantômes.",
        ability: `
            <p>Il peut imiter tous les types d'entités et ainsi hérité de toutes les capacités et abilités de l'entité qu'il décide de copier.</p>
            <p>Il peut copier des caractéristiques des évidences (exemple: les traces de pas invisible aux <strong class="italic">lampes UV</strong> du Spectre) mais pas les évidences elles-mêmes.</p>
            <p>Il peut imiter le joueur ou le Mimic, mais dans ce cas il agira alors comme un fantôme normal.</p>
            <p>Lorsqu'il choisit d'imiter le Thayé, il choisira un âge aléatoire et au lieu de vieillir comme le Thayé, il imitera une autre entité.</p>
        `,
        behaviour: `
            <p>Il donne pour évidence les orbes fantômatiques en plus de ses trois évidences de base et ce qu'importe la difficulté.</p>
        `,
        hunt: `
            <p>Varie suivant l'entité imitée.</p>
        `,
        speed: `
            <p><strong>Varie selon l'entité qu'il incarne.</strong></p>
        `,
        sanity: 100
    },
    'twins': {
      name: 'Les Jumeaux',
      evidences: [
        'emf-5',
        'freezing-temperatures',
        'spirit-box'
      ],
      strenght: "Les deux jumeaux peuvent lancer une chasse, mais pas en même temps.",
      weakness: "Interagit souvent avec l'environnement en même temps.",
      description: "Ces entités ont été signalés comme imitant les actions des autres. Ils alternent leurs attaques pour confondre leurs proies.",
      ability: `
        <p>Rien à signaler.</p>
      `,
      behaviour: `
        <p>Les Jumeaux ne sont qu'une seule entité composée d'un corps principal et d'un leurre.</p>
        <p>Le leurre ne fait pas marcher les <strong class="italic">détecteurs de mouvements</strong>, ne réduit pas la <strong class="italic">température</strong> et ne réponds pas à la <strong class="italic">Spirit Box</strong>. Le leure et l'entité principale ont 25% de chance de produire un <strong class="italic">EMF 5</strong> au lieu de 2 ou 3.</p>
      `,
      hunt: `
        <p>Si il démarre une chasse, il y a une chance sur deux que ce soit le leurre qui chasse.</p>
        <p>Le leurre est 10% plus rapide qu'un fantôme usuel tandis que le corps principal est 10% plus lent.</p>
        <p>Lorsqu'un <strong class="italic">crucifix</strong> est utilisé pour empêcher une chasse, qu'importe le jumeau qui chasse, le <strong class="italic">crucifix</strong> s'appliquera uniquement au corps principal.</p>
      `,
      speed: `
        <p><strong>Vitesse de base :</strong> ${difficultyMultiplier * 1.7} (± ${difficultyMultiplier * 0.2}) m/s</p>
        <p><strong>Jumeau lent :</strong></p>
        <audio controls class="sound-display">
            <source src="./assets/audio/footsteps/${ghostSpeed}/1.50.mp3" type="audio/mpeg" />
        </audio>
        <p><strong>Jumeau rapide :</strong></p>
        <audio controls class="sound-display">
            <source src="./assets/audio/footsteps/${ghostSpeed}/1.90.mp3" type="audio/mpeg" />
        </audio>
        <p><strong>Victime en ligne de vue :</strong> ${difficultyMultiplier * 2.5} (± ${difficultyMultiplier * 0.2}) m/s</p>
        <p><strong>Jumeau lent :</strong></p>
        <audio controls class="sound-display">
            <source src="./assets/audio/footsteps/${ghostSpeed}/2.30.mp3" type="audio/mpeg" />
        </audio>
        <p><strong>Jumeau rapide :</strong></p>
        <audio controls class="sound-display">
            <source src="./assets/audio/footsteps/${ghostSpeed}/2.70.mp3" type="audio/mpeg" />
        </audio>
      `,
      sanity: 50
    },
    'wraith': {
      name: 'Spectre',
      evidences: [
        'dots',
        'emf-5',
        'spirit-box'
      ],
      strenght: "Ils ne laissent pas de traces de pas visible à la lumière UV après avoir marché dans le sel.",
      weakness: "Il devient plus actif si il marche dans du sel.",
      description: "Le Spectre est l'une des entitées les plus dangereuse que vous pourrez trouver. C'est aussi la seule entitée connue qui a la capacité de voler et qui est parfois connu pour voyager à travers les murs.",
      ability: `
        <p>Il a une chance de se téléporter à environs 3 mètres d'un joueur avec 75% chance de générer un <strong class="italic">EMF 2</strong> et 25% chance de générer un <strong class="italic">EMF 5</strong>.</p>
      `,
      behaviour: `
        <p>Il est incapable de marcher dans le sel et donc il ne laisse aucune trace de pas visible aux <strong class="italic">lumières UV</strong>.</p>
      `,
      hunt: `
        <p>Rien à signaler.</p>
      `,
      speed: `
        <p><strong>Vitesse de base :</strong> ${difficultyMultiplier * 1.7} m/s</p>
        <audio controls class="sound-display">
            <source src="./assets/audio/footsteps/${ghostSpeed}/1.70.mp3" type="audio/mpeg" />
        </audio>
        <p><strong>Victime en ligne de vue :</strong> ${difficultyMultiplier * 2.5} m/s</p>
        <audio controls class="sound-display">
            <source src="./assets/audio/footsteps/${ghostSpeed}/2.50.mp3" type="audio/mpeg" />
        </audio>
      `,
      sanity: 50
    },
    'yokai': {
      name: 'Yokai',
      evidences: [
        'dots',
        'ghost-orb',
        'spirit-box'
      ],
      strenght: "Parler près d'un Yokai le mettra en colère, ce qui augmentera ses chances d'attaquer.",
      weakness: "Il ne peut entendre que des voix proches de lui pendant qu'il chasse.",
      description: "Les Yokai sont des entitées communes qui sont attirées par les voix humaines. On les trouve généralement dans les maisons familiales.",
      ability: "<p>Rien à signaler.</p>",
      behaviour: "<p>Si au moins un joueur parle ou émet du bruit, l'activité du Yokai augmente.</p>",
      hunt:  `
        <p>Si au moins un joueur parle ou émet du bruit, une chasse peut être démarrée en dessous de 80% de santé mentale, sinon il démarre une chasse à 50% comme les autres entités.</p>
        <p>Il ne peut qu'entendre les joueurs ou sentir les appareils électroniques dans une portée de 2.5 mètres (sa ligne de vue n'est pas affectée).</p>
        <p>Lorsque la boîte à musique est utilisée, le Yokai doit être plus proche du joueur tenant la boîte que tous les autres fantômes pour initier une chasse maudite.</p>
      `,
      speed: `
        <p><strong>Vitesse de base :</strong> ${difficultyMultiplier * 1.7} m/s</p>
        <audio controls class="sound-display">
            <source src="./assets/audio/footsteps/${ghostSpeed}/1.70.mp3" type="audio/mpeg" />
        </audio>
        <p><strong>Victime en ligne de vue :</strong> ${difficultyMultiplier * 2.5} m/s</p>
        <audio controls class="sound-display">
            <source src="./assets/audio/footsteps/${ghostSpeed}/2.50.mp3" type="audio/mpeg" />
        </audio>
      `,
      sanity: 80
    },
    'yurei': {
      name: 'Yurei',
      evidences: [
        'dots',
        'freezing-temperatures',
        'ghost-orb'
      ],
      strenght: "Il affecte plus fortement la santé mentale.",
      weakness: "Allumer de l'encent dans la pièce du Yurei réduira la fréquence de ses errances.",
      description: "Un Yurei est une entitée qui est revenue dans le monde physique, généralement dans un but de vengeance ou de haine.",
      ability: `
        <p>Il peut utiliser son abilité qui réduit de 15% la santé mentale de tous les joueurs situés dans une portée de 7.5 mètres.</p>
        <p>Il ne peut utiliser son abilité que lorsque la pièce dans laquelle il se situe possède au moins une porte.</p>
        <p>Lorsqu'il emploie son abilitée, une porte choisie aléatoirement dans la pièce du Yurei se fermera, produisant un <strong class="italic">EMF 2</strong>.</p>
        <p>Les casiers et plaquards ne sont pas affectés par l'abilité du Yurei.</p>
        <p>Lorsque la porte avant (la porte de sortie) se ferme entièrement sans qu'il n'y aie eu un événement fantômatique ou une chasse, alors c'est un Yurei.</p>
      `,
      behaviour: `
        <p>Si on emploie de <strong class="italic">l'encent</strong> sur lui, en plus des effets de base, il ne quittera pas sa pièce durant 90s.</p>
        <p>Il offre plus souvent des événements de type "ballon d'air".</p>
        <audio controls class="sound-display">
            <source src="./assets/audio/sound-evidences/air-breath.mp3" type="audio/mpeg" />
        </audio>
      `,
      hunt: `
        <p>Rien à signaler.</p>
      `,
      speed: `
        <p><strong>Vitesse de base :</strong> ${difficultyMultiplier * 1.7} m/s</p>
        <audio controls class="sound-display">
            <source src="./assets/audio/footsteps/${ghostSpeed}/1.70.mp3" type="audio/mpeg" />
        </audio>
        <p><strong>Victime en ligne de vue :</strong> ${difficultyMultiplier * 2.5} m/s</p>
        <audio controls class="sound-display">
            <source src="./assets/audio/footsteps/${ghostSpeed}/2.50.mp3" type="audio/mpeg" />
        </audio>
      `,
      sanity: 50
    }
  };
}