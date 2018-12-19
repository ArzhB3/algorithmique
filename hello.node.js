/*************************************************************************************************************************************************
* @name hello.node
* @desc Juste pour les algorithmes
* @author Aélion - Déc. 2018
* @version 1.0.0
*************************************************************************************************************************************************/

// Déclaration de fonctions

/**
 * Retourne la valeur maximum entre deux valeurs
 * private int maxF(int currentMax, int value)
 * @param {*} currentMax Valeur maximum courante
 * @param {*} value Valeur lue dans le tableau
 * @returns number La valeur la plus élevée entre currentValue et value
 */
function maxF(currentMax, value) {
    console.log('Compare : ' + currentMax + ' à ' + value);
    if (value > currentMax) {
        return value;
    } else {
        return currentMax;
    }
}

/**
 * Retourne la valeur minimum entre deux valeurs
 * private int minF(int currentMin, int value)
 * @param {*} currentMin Valeur minimum courante
 * @param {*} value Valeur lue dans le tableau
 * @return number Valeur minimum
 */
function minF(currentMin, value) {
    console.log('Compare : ' + currentMin + ' à ' + value);
    if (value < currentMin) {
        return value;
    } else {
        return currentMin;
    }
}

/**
 * Wrapper pour les fonctions min et max
 * public int minOrMax(int current, int value, boolean wantMax = false)
 * @param {*} current Valeur min ou max courante
 * @param {*} value Valeur du tableau lue
 * @param {*} wantMax booléen qui permet de choisir entre min et max
 */
function minOrMax(current, value, wantMax = true) {
    if (wantMax) {
        return maxF(current, value);
    }
    else {
        return minF(current, value);
    }
}

console.log('Hello World from NodeJS');

//Déclaration de variables
// Création d'une variable de type tableau

/**
* @var array
* Tableau de nombres entiers
*/
const tablo = [25, -50, 256, 312, 3, -22, 8];

/**
* @var array
* Tableau vide (ordre croissant)
*/
let nvTabloC = [];

/**
* @var array
* Tableau vide (ordre décroissant)
*/
let nvTabloD = [];

/**
* @var number
* Indice du tableau
*/
let indice = 0;

/**
* @var number
* Total des valeurs du tableau
*/
let total = 0;

/**
* @var number
* Valeur max du tableau
*/
let max = tablo[0];

/**
* @var number
* Valeur min du tableau
*/
let min = tablo[0];

// Boucle de parcours du tableau
for (let i = 0; i < tablo.length; i++) {

    if (tablo[i] % 2 == 0) {
        console.log('Indice ' + i + ' est pair ' + tablo[i]);
    } else {
        console.log(tablo[i] + ' est impair');
    }
    console.log('Indice ' + i + ' => ' + tablo[i]);

    // Appel original de la valeur max sans fonction
    /**
    *   if (tablo[i] > max)  {
    *   max = tablo[i];        
    *   }
    */

    // Appel de la valeur max et min avec des fonctions

    // Appel avec les fonctions maxF et minF
    //max = maxF(max, tablo[i]);
    //min = minF(min, tablo[i]);

    // Appel avec la fonction minOrMax
    max = minOrMax(max, tablo[i]);
    min = minOrMax(min, tablo[i], false);

    // Appel de la somme des valeurs du tableau
    total = total + tablo[i];

}

// Affichage des différentes valeurs
console.log('Le maximum est ' + max);
console.log('Le minimum est ' + min);
console.log('La somme du tableau est ' + total);

// Réinitialisation de la valeur min
min = tablo[0];

// Boucle de tri croissant
/*while (tablo.length > 0) {
    
    for (let i = 0; i < tablo.length; i++) {
        
        if (tablo[i] < min) {
            min = tablo[i];
            indice = i;            
        }
    
    }
    
    nvTabloC.push(min);
    tablo.splice(indice,1);
    min = 9999;
}*/

// Boucle de tri coissant 2
for (let i = 0; i < (tablo.length-1); i++)  {
    
    for (let j = i + 1 ; j < tablo.length; j++) {
        
        if (tablo[j] < tablo[i]) {
            let tempValue = tablo[j];
            tablo[j] = tablo[i];
            tablo[i] = tempValue;
            
        }    
    }
}

console.log('Les valeurs du tableau dans l\'ordre sont les suivantes : \n');

// Boucle pour lire les données du nouveau tableau
for (let i = 0; i < tablo.length; i++) {
    console.log(tablo[i]);    
}


