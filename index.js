// 1-Chaine inversée
function chaineString(str) {
    return str.split('').reverse().join('');
}

const chaine = 'GOMYCODE';
const chaineInversing = chaineString(chaine);

console.log('Chaine inversée:', chaineInversing);



// 2-une fonction qui compte le nombre de caractères dans une chaîne
 function caractere(stp){
    return stp.length;
 }

 console.log(caractere('bonjour'));


 // 3-Implémenter une fonction qui capitalise la première lettre de chaque mot dans une phrase.
function majuscule(terme){
    return terme
    .split(' ')
    .map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}
const phrase='bonjour tout le monde';

console.log(majuscule(phrase));

// 4-fonctions pour trouver les valeurs maximales et minimales dans un tableau de nombres.
function valMax(valeur){
    return Math.max(...valeur);
}
function valMin(valeur){
    return Math.min(...valeur);
}
const numbers =[2,4,6,1,8,9];

console.log('Maximale:',valMax(numbers));
console.log('Minimale:',valMin(numbers));



// 5-la somme de tous les éléments dans un tableau.
function somElm(element){
    return element.reduce((acc,current) => acc +current,0);
}
const nombres=[8,7,4,2,0];
console.log("La somme est",somElm(nombres));


// 6-fonction  qui filtre les éléments d'un tableau selon une condition donnée 
function filter(array,condition){
    return array.filter(condition);
}
const numobers =[3,5,3,9,2,0];

const evenNumbers=filter(numobers,num => num %2 === 0);
console.log("Nombre pair",evenNumbers);

const five= filter(numobers,num => num >5);
console.log("Superieur à 5",five);


// 7-fonction pour calculer la factorielle d'un nombre donné
function calculerFactorielle(n) {
    if (n < 0) {
        return "La factorielle n'est pas définie pour les nombres négatifs.";
    }
    let factorielle = 1;
    for (let i = 1; i <= n; i++) {
        factorielle *= i;
    }
    return factorielle;
}

const nombrees = 5; 
console.log(`La factorielle de ${nombrees} est ${calculerFactorielle(nombrees)}`);

//une fonction pour vérifier si un nombre est premier ou non
function estNombrePremierSimple(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true; 
}

const nombre = 17; 
console.log(`${nombre} est-il un nombre premier ? ${estNombrePremierSimple(nombre)}`);


// fonction pour générer la séquence de Fibonacci jusqu'à un nombre donné de termes
function genererFibonacciRecursif(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const sequence = genererFibonacciRecursif(n - 1);
    const nouveauTerme = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nouveauTerme);
    return sequence;
}


const nombreDeTermes = 10;
console.log(genererFibonacciRecursif(nombreDeTermes));













