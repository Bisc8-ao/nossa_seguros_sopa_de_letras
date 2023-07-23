
import "./styles.scss";
import { Letter } from "../letter";
import { WordFind } from "../wordFind";

/**
 * GameBoard
 *
 * @param {*} params ({usedWords, letters, selectedLevel, levelSettings, selecting, setSelecting, setSelection, foundLetters})
 *
 * @returns Cria um tabuleiro de letras aleatórias e palavras, apresentando o mesmo em jsx.
 */

function GameBoard({
  OnUserAddWord,
  usedWords,
  letters,
  selectedLevel,
  levelSettings,
  selecting,
  setSelecting,
  setSelection,
  foundLetters,
}) {
  const gameClass =
    selectedLevel === "0" 
    ? "inicial" 
    : selectedLevel === "1" 
    ? "facil" 
    : selectedLevel === "2" 
    ? "intermedio" 
    : "avancado";

  return (
    <div id="table">
      {/*Div que contém os divs tabuleiro (board) e palavras Usadas (usedWords)*/}
      <div
        className="board noselect"
        id="board"
        style={{
          gridTemplateColumns:
            "repeat(" + Math.sqrt(levelSettings["area_board"]) + ",1fr)",
          gridTemplateRows:
            "repeat(" + Math.sqrt(levelSettings["area_board"]) + ",1fr)",
        }}
      >
        {letters.map((item, index) => (
          <Letter
            /*setletter={setletter}*/ lett={item}
            index={index}
            selecting={selecting}
            setSelecting={setSelecting}
            setSelection={setSelection}
            isFound={foundLetters.includes(index)}
            key={index}
          />
        ))}
      </div>
      <div className="boxUsedWords">
        <div className="usedWords">
          {usedWords.map((item, index) => (
            <WordFind item={item} key={index} />
          ))}
        </div>

        <div className="new-wordBox">
        </div>
      </div>
    </div>
  );
}

export { GameBoard };
