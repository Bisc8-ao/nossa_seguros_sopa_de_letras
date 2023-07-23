import "./styles.scss";
// import "../../styles/body.scss";
// import "../../styles/container.scss";
// import "../../styles/header.scss";
// import "../../styles/section.scss";

import { ControlPanel, GameBoard } from "../../components";

import { useNavigate } from "react-router-dom";
import { React, useContext, useEffect, useState } from "react";
import { LEVEL_SETTINGS_MAP } from "../../constants";

import { TimerContext } from "../../context/timerContext";

import {
  fillBoard,
  checkSelection,
  updateScore,
  updateTopScore,
  enableBoard,
  disableBoard,
  enableTable,
  markWordFound,
  addNewWord,
} from "../../helpers";

import { assets } from "../../assets";

let timerId = undefined;
let levelSettings = LEVEL_SETTINGS_MAP[1];
let boardInfo = fillBoard(levelSettings);
let finalArray = boardInfo[0],
  usedWords = boardInfo[1];
let startKey = 0,
  endKey = 0;
let lastSelection = [];
let foundLetters = [];
let pontos = 0;
let topPontos = 0;

function Game() {
  const [refresh, setRefresh] = useState(false);
  const [selecting, setSelecting] = useState(false); // -> Usado para saber se estamos em seleção ou não
  const [selection, setSelection] = useState([]); // -> Usado para passar a seleção
  const [timer, setTimer] = useState(levelSettings["tempo_jogo"]);

  const { gameStarted, setGameStarted, selectedLevel, setSelectedLevel } =
    useContext(TimerContext);

  const { nossa_seguros } = assets();

  const navigate = useNavigate();

  useEffect(() => {
    switch (selectedLevel) {
      case "1":
        levelSettings = LEVEL_SETTINGS_MAP[1];
        break;
      case "2":
        levelSettings = LEVEL_SETTINGS_MAP[2];
        break;
      case "3":
        levelSettings = LEVEL_SETTINGS_MAP[3];
        break;
      default:
        levelSettings = LEVEL_SETTINGS_MAP[0];
        break;
    }
    boardInfo = fillBoard(levelSettings);
    finalArray = boardInfo[0];
    usedWords = boardInfo[1];
    setTimer(levelSettings["tempo_jogo"]);

    console.log("A mudar dificuldade para " + levelSettings["texto_botao"]);
  }, []);

  // Se o tempo se esgotar, parar o jogo e fazer clearInterval do timerId
  useEffect(() => {
    if (timer <= 0) {
      console.log("CLEAR INTERVAL");
      clearInterval(timerId);
      setGameStarted(false);
      navigate("/lose");
    }
  }, [timer]);

  // Gerir inicio e fim de jogo
  useEffect(() => {
    if (gameStarted) {
      if (pontos > topPontos) {
        topPontos = pontos;
        updateTopScore(topPontos);
      }
      disableBoard();
      setGameStarted(false);
      setRefresh(!refresh);
    } else {
      console.log("Inicia Jogo");
      foundLetters = [];
      pontos = 0;
      updateScore(pontos);
      boardInfo = fillBoard(levelSettings);
      finalArray = boardInfo[0];
      usedWords = boardInfo[1];
      enableTable();
      enableBoard();
      setTimer(levelSettings["tempo_jogo"]);
      setGameStarted(true);
      // Reveal board
    }
  }, []);

  // useEffect para lidar com a selection
  useEffect(() => {
    let endGame = true;

    console.log("==========> teste <============");

    if (selecting) {
      startKey = selection[0];
    } else if (!selecting) {
      console.log("End game inicio do callback: " + endGame);

      lastSelection.pop();
      lastSelection.pop();
      endKey = selection[0];
      lastSelection.push(startKey);
      lastSelection.push(endKey);
      console.log("Foi selecionado -> " + lastSelection);

      // verificar se foi selecionada uma palavra do jogo
      if (checkSelection(lastSelection, usedWords)) {
        markWordFound(lastSelection, usedWords);

        pontos = pontos + levelSettings["pontos_palavra"];
        updateScore(pontos);

        let startKey2D = [
          startKey % levelSettings["tam_board"],
          Math.floor(startKey / levelSettings["tam_board"]),
        ];
        let endKey2D = [
          endKey % levelSettings["tam_board"],
          Math.floor(endKey / levelSettings["tam_board"]),
        ];
        let direction = [
          endKey2D[0] - startKey2D[0],
          endKey2D[1] - startKey2D[1],
        ]; // Um bocadinho de calculo vectorial nunca fez mal a ninguém
        let incremento = 0;

        // DIAGONAL
        if (direction[0] < 0 && direction[1] < 0) {
          incremento = levelSettings["tam_board"] + 1;
        }
        if (direction[0] > 0 && direction[1] < 0) {
          incremento = levelSettings["tam_board"] - 1;
        }
        if (direction[0] < 0 && direction[1] > 0) {
          incremento = levelSettings["tam_board"] - 1;
        }
        if (direction[0] > 0 && direction[1] > 0) {
          incremento = levelSettings["tam_board"] + 1;
        }
        // VERTICAL
        if (direction[0] === 0) {
          incremento = levelSettings["tam_board"];
        }
        // HORIZONTAL
        if (direction[1] === 0) {
          incremento = 1;
        }

        for (
          let index = Math.min(...lastSelection);
          index <= Math.max(...lastSelection);
          index = index + incremento
        ) {
          foundLetters.push(index);
        }

        for (let uW = 0; uW < usedWords.length; uW++) {
          if (!usedWords[uW][3]) {
            endGame = false;
          }
        }

        if (endGame) {
          setGameStarted(false);
          navigate("/win");
        } else {
          setRefresh(!refresh);
        }
      }
    }
  }, [selecting]);

  // Temporizador
  useEffect(() => {
    if (gameStarted) {
      let nextTimer;
      timerId = setInterval(() => {
        setTimer((previousState) => {
          nextTimer = previousState - 1;
          return nextTimer;
        });
      }, 1000);
    } else if (timer !== levelSettings["tempo_jogo"]) {
      let addTime = true;
      for (let uW = 0; uW < usedWords.length; uW++)
        if (!usedWords[uW][3]) addTime = false;

      if (addTime) {
        console.log(timer);
        pontos = pontos + parseInt(timer, 10);
        updateScore(pontos);
      }

      if (pontos > topPontos) {
        topPontos = pontos;
        updateTopScore(topPontos);
      }

      setTimer(levelSettings["tempo_jogo"]);
    }
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [gameStarted]);

  // Components
  return (
    <div className="flip_wrapper_so">
      <ControlPanel
        gameStarted={gameStarted}
        selectedLevel={selectedLevel}
        timer={timer}
      />

      <div className="game_container_so">
        <header className={`header_container_so`}>
          <div className="header_logo_so">
            <img src={nossa_seguros} alt="Nossa Seguros Logo" />
          </div>
        </header>

        <div className="highligt_so">
          <span>SOPA DE LETRAS</span>
        </div>

        <main className="grid_wrapper_so">
          <GameBoard
            selectedLevel={selectedLevel}
            usedWords={usedWords}
            letters={finalArray}
            levelSettings={levelSettings}
            selecting={selecting}
            setSelecting={setSelecting}
            setSelection={setSelection}
            foundLetters={foundLetters}
          />
        </main>

        <div className="footer_info_so">TOQUE PARA JOGAR</div>

        <button className="btn_accept_ab" onClick={() => navigate("/")}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

export { Game };
