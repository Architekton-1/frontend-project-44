const getElement = (start, step, index) => {
    return start + index * step;
}

const getProgressionGame = () => {
    const start = Math.floor(Math.random() * 10);
    const step = Math.floor(Math.random() * 10) + 1;
    const length = 10;

    const missingIndex = Math.floor(Math.random() * length);
    const progression = [];

    for (let i = 0; i < length; i += 1) {
        progression.push(getElement(start, step, i));
    }

    const correctAnswer = String(progression[missingIndex]);
    progression[missingIndex] = '..';

    const question = progression.join(' ');

    return [question, correctAnswer];
};
export default getProgressionGame;