#!/usr/bin/env node
import runEngine from '../src/index.js';
import getCalcQuestion from '../src/games/calc.js';

const gameRule = 'What is the result of the expression?';

runEngine(getCalcQuestion, gameRule);
