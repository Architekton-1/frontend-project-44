#!/usr/bin/env node

import runEngine from "../src/index.js";
import getPrimeGame from "../src/games/prime.js";

runEngine(getPrimeGame, 'Answer "yes" if given number is prime. Otherwise answer "no".');