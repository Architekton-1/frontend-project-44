const getRandomNum = () => Math.floor(Math.random() * 100) +1;

const isPrime = (n) => {
    if (n < 2)
        return false;
    for (let i = 2; i <= Math.sqrt(n); i += 1) {
        if (n % i === 0) 
            return false;
    }
    return true;
};

const getPrimeGame = () => {
    const number = getRandomNum();

    const question = String(number);
    const answer = isPrime(number) ? 'yes' : 'no';

    return [question, answer];
};

export default getPrimeGame;