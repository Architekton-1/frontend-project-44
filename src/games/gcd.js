const getRandomNum = () => Math.floor(Math.random() * 100) + 1;

const getGcd = (x, y) => {
    const min = Math.min(x, y);

    for (let i = min; i > 0; i -= 1) {
        if (x % i === 0 && y % i === 0) {
            return i;
        }
    }
    return 1;
};

const getGcdGame = () => {
    const firstNum = getRandomNum();
    const secondNum = getRandomNum();

    const question = `${firstNum} ${secondNum}`;
    const answer = String(getGcd(firstNum, secondNum));

    return [question, answer];
};

export default getGcdGame;