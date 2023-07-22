import {getRandomWord, placeWordVertical, placeWordHorizontal, placeWordDiagonal} from '..'
import {ABCD} from '../../constants';

/**
 * Preenche array com  letras aleatórias do abcedário
 */
 function fillBoard(levelSettings){
    let finalArray=[];  // Array a apresentar no tabuleiro  
    let usedWords= [];  // Array com palavras já utilizadas no tabuleiro (definidas como strings)*/
    let chosenWord;  // Palavra em forma de array (para colocar nas posições do finalArray)*/
    let orientation;  // Variável de controlo para verificar se palavra será colocada inversamente ou não*/
    let placeholder = "";

    console.log('====>' + usedWords)


    // Preenche array com PLACEHOLDERS;
    for(let i = 0; i < levelSettings["area_board"] ; i++){; 
        finalArray.push(placeholder);
    }

    for(let c = 0; c < levelSettings["num_palavras"]; c++) {

        chosenWord = Array.from(getRandomWord(levelSettings["area_board"], usedWords)); // constroi array a partir de palavra random
        
        // Coloca a palavra no board, numa orientação aleatoria
        orientation = Math.floor(Math.random()*100); 
        if(orientation < 33){
            placeWordHorizontal(chosenWord, levelSettings, finalArray, usedWords);  // Horizontal
        }
        else if (orientation >= 33 && orientation <= 66) {
            placeWordVertical(chosenWord, levelSettings, finalArray, usedWords);  // Vertical
        }
        else {
            placeWordDiagonal(chosenWord, levelSettings, finalArray, usedWords);  // Diagonal
        }
    }

    // Preenche array com letra aleatórias;
    for(let i = 0; i < levelSettings["area_board"] ; i++){
        if(finalArray[i] === placeholder)    
            finalArray[i] = ABCD[Math.floor(Math.random()*(ABCD.length-1))];
    }
    
    return [finalArray, usedWords]
}


export default fillBoard;