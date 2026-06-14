const getCalcQuestion = () => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    const operations = ['+', '-', '*'];
    const sign = operations[Math.floor(Math.random() * 3)];

    let result;
    switch(sign) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
    }
    return [`${x} ${sign} ${y}`, String(result)];
};
export default getCalcQuestion;