
/**
 * checkUsedWord
 * 
 * Verifica se uma palavra se encontra num array
 * 
 * @param {*} word palavra a verificar
 * @param {*} usedWords array de palavras utilizadas no tabuleiro
 * @returns true se word já foi utilizada e false caso contrário
 */
function checkSelection(wordIndexes, usedWords) {
    for(let i=0; i < usedWords.length; i++){ 
        if(((wordIndexes[0] === usedWords[i][1][0]) && (wordIndexes[1] === usedWords[i][1][1])) 
        || ((wordIndexes[1] === usedWords[i][1][0]) && (wordIndexes[0] === usedWords[i][1][1]))) {
            return true;
        }
    }
    return false;
}

export default checkSelection;