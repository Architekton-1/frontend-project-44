#!/usr/bin/env node
import runEngine from '../src/index.js';
import getGcdGame from '../src/games/gcd.js';

runEngine(getGcdGame, 'Find the greatest common divisor of given numbers.');