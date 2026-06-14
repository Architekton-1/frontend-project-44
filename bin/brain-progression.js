#!/usr/bin/env node
import runEngine from '../src/index.js';
import getProgressionGame from '../src/games/progression.js';

runEngine(getProgressionGame, 'What number is missing in the progression?');