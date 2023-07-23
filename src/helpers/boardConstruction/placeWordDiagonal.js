/**
 * placeWordDiagonal
 * 
 * Coloca palavras em verticalmente no tabuleiro
 * 
 * @param {*} chosenWord palavra em formato Array
 * @param {*} levelSettings["area_board"] numero de letras do tabuleiro
 * @param {*} finalArray array final a apresentar no tabuleiro
 * @param {*} usedWords array de palavras já utilizadas no tabuleiro (para ser atualizado)
 * @param {*} positionsOccupied posições já ocupadas por outras palavras
 * 
 */
function placeWordDiagonal(chosenWord, levelSettings, finalArray, usedWords) {

    let wordToPlace = "";
    let cantcontinue = false;  /** cantcontinue - variável de controlo para saber se a posição aleatória gerada já está ocupada (ou não) */
    let randPos;  /**randPos - posição aleatória gerada para colocação da palavra no array final*/
    let linha = Math.sqrt(levelSettings["area_board"]);  /**linha - calcula o número de linhas/colunas (como o tabuleiro é quadrado então se levelSettings["area_board"]=25, sabemos que linha será 5 [5 linhas * 5 colunas]) */
    let attempts = 0; /**attempts - tentativas realizadas de gerar uma posição aleatória. Caso as tentativas sejam maiores que o número de letras no tabuleiro, a função retorna vazio, evitando deadlocks.  **/

    while (true) {
        attempts++;
        if (attempts > levelSettings["area_board"] * 500) {
            return;
        }

        cantcontinue = false;
        randPos = Math.floor(Math.random() * levelSettings["area_board"]);
        if (Math.floor(Math.random() * 100) < 50)
            wordToPlace = [...chosenWord].reverse();
        else
            wordToPlace = [...chosenWord];

        let randOrientation = Math.floor(Math.random() * 100);

        if (randOrientation < 50) {
            // Verifica se cada letra do array não será colocada numa posição ocupada (coluna em específico)
            let k = 0;
            for (let pos = randPos; pos <= randPos + linha * (wordToPlace.length - 1) + wordToPlace.length - 1; pos = pos + linha + 1) {
                if (finalArray[pos] !== "" && finalArray[pos] !== wordToPlace[k]) {
                    cantcontinue = true;
                    break;
                }
                k++;
            }

            if (!cantcontinue && (Math.floor(randPos / levelSettings["tam_board"]) + wordToPlace.length <= linha) && (randPos % levelSettings["tam_board"] + wordToPlace.length <= linha)) {
                let j = 0;
                for (let i = randPos; i < randPos + linha * (wordToPlace.length - 1) + wordToPlace.length; i = i + linha + 1) {/*i começa na posição encontrada até ao tamanho da palavra*num de linhas (lembrando que estamos a colocar uma palavra numa coluna) */
                    finalArray[i] = wordToPlace[j];  /*coloca a letra atual da palavra a colocar na posição i do array */
                    j++; /*Avança para a letra seguinte do array da palavra a colocar*/
                }
                usedWords.push([chosenWord.join(''), [randPos, randPos + linha * (wordToPlace.length - 1) + wordToPlace.length - 1, false]]); /*Coloca a palavra colocada como string no tabuleiro nas palavras usadas*/
                return
            }
        }
        else {

            // Verifica se cada letra do array não será colocada numa posição ocupada (coluna em específico)
            let k = 0;
            for (let pos = randPos; pos <= randPos + linha * (wordToPlace.length - 1) - (wordToPlace.length - 1); pos = pos + linha - 1) {
                if (finalArray[pos] !== "" && finalArray[pos] !== wordToPlace[k]) {
                    cantcontinue = true;
                    break;
                }
                k++;
            }

            if (!cantcontinue && (Math.floor(randPos / levelSettings["tam_board"]) + wordToPlace.length <= linha) && (randPos % levelSettings["tam_board"] - wordToPlace.length > 0)) {
                let j = 0;
                for (let i = randPos; i <= randPos + linha * (wordToPlace.length - 1) - (wordToPlace.length - 1); i = i + linha - 1) {/*i começa na posição encontrada até ao tamanho da palavra*num de linhas (lembrando que estamos a colocar uma palavra numa coluna) */
                    finalArray[i] = wordToPlace[j];  /*coloca a letra atual da palavra a colocar na posição i do array */
                    j++; /*Avança para a letra seguinte do array da palavra a colocar*/
                }
                usedWords.push([chosenWord.join(''), [randPos, randPos + linha * (wordToPlace.length - 1) - (wordToPlace.length - 1), false]]); /*Coloca a palavra colocada como string no tabuleiro nas palavras usadas*/
                return
            }
        }

    }
}
export default placeWordDiagonal;