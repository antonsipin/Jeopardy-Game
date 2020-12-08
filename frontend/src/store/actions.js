import { START_GAME, INIT, ANSWER } from "./types";

const startGame = (obj) => ({ type: START_GAME, payload: obj });

export default startGame;

export const initStore = (data) => {  return { type: INIT, payload: data } };

export const handleAnswer = (data) => {  return { type: ANSWER, payload: data } };
