
/**
 * checkUsedWord
 * 
 * Verifica se uma palavra se encontra num array
 * 
 * @param {*} word palavra a verificar
 * @param {*} usedWords array de palavras utilizadas no tabuleiro
 * @returns true se word já foi utilizada e false caso contrário
 */
function checkUsedWord(word, usedWords) {
    for(let i = 0; i < usedWords.length; i++){ 
        if(word === usedWords[i][0]) {
            return true;
        }
    }
    return false;
}

export default checkUsedWord;