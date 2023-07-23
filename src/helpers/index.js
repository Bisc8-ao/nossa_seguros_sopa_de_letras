// PREENCHIMENTO DO BOARD
export { default as fillBoard } from "./boardConstruction/fillBoard";
export { default as getRandomWord } from "./boardConstruction/getRandomWord";
export { default as checkUsedWord } from "./boardConstruction/checkUsedWord";

// DIREÇÔES
export { default as placeWordVertical } from "./boardConstruction/placeWordVertical";
export { default as placeWordHorizontal } from "./boardConstruction/placeWordHorizontal";
export { default as placeWordDiagonal } from "./boardConstruction/placeWordDiagonal";

//NOVAS PALAVRAS
export{ default as addNewWord } from "./boardConstruction/addNewWord";

// SELECÇÂO
export { default as checkSelection } from "./inputValidation/checkSelection";
export { default as markWordFound } from "./inputValidation/markWordFound";
export { default as updateScore } from "./updaters/updateScore";
export { default as updateTopScore } from "./updaters/updateTopScore";
export { default as enableBoard } from "./updaters/enableBoard";
export { default as disableBoard } from "./updaters/disableBoard";
export { default as enableTable } from "./updaters/enableTable";
