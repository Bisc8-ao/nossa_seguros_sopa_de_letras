
function markWordFound(wordIndexes, usedWords) {
    for(let i=0; i < usedWords.length; i++){ 
        if(((wordIndexes[0] === usedWords[i][1][0]) && (wordIndexes[1] === usedWords[i][1][1])) 
        || ((wordIndexes[1] === usedWords[i][1][0]) && (wordIndexes[0] === usedWords[i][1][1]))) {
            usedWords[i][3] = true;   // marcar palavra como encontrada         
        }
    }
}

export default markWordFound;