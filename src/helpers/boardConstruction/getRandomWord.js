import {WORDS} from '../../constants';
import checkUsedWord from './checkUsedWord';
/**
 * getRandomWord
 * 
 * Retorna uma palavra aleatória de um array de palavras indicado
 * 
 * @param {*} lnumb número de letras do tabuleiro
 * @param {*} usedWords array de palavras já utilizadas
 * @returns palavra aleatória
 */
  



 function getRandomWord(lnumb, usedWords){
    //let array = [...WORDS].push(ficheiro)
    let randomWordIndex
    let passLineCheck = false; /**passLineCHeck - variável de controlo para saber se a palavra cabe numa linha/coluna*/
    
    
    let finalWords=[...WORDS];
    let userWords = JSON.parse(localStorage.getItem("USERWORDS"));

    if(userWords!==null)
        finalWords=finalWords.concat(userWords);

    //console.log(finalWords);    



    while(!passLineCheck) { 
        
        randomWordIndex = Math.floor(Math.random()*finalWords.length) //randomWordIndex = Math.floor(Math.random()*WORDS.length)
        
        if(checkUsedWord(finalWords[randomWordIndex], usedWords)) //if(checkUsedWord(WORDS[randomWordIndex], usedWords))
            continue; 
        
        if(finalWords[randomWordIndex].length<=Math.sqrt(lnumb)) //if(WORDS[randomWordIndex].length<=Math.sqrt(lnumb))
            passLineCheck=true; 
    }

    return finalWords[randomWordIndex]; //return WORDS[randomWordIndex];
}

export default getRandomWord;
