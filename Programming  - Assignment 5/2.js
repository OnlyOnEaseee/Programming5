
const time = () => {
    const date = new Date();
    return `
        Time: ${date.getHours()}:${date.getMinutes()}
        Date: ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}
    `;
};

const loginFunction = (correctUsername, correctPassword, correctOutput, falseOutput) => {
    
    const usernameInput = prompt('What is your username');
    const passwordInput = prompt('What is your password?');

    if(usernameInput !== correctUsername || passwordInput !== correctPassword) {
        falseOutput();
    } else {
        correctOutput();
    };
};

loginFunction(
    'Axel', 
    '1234', 
    () => alert(`
        Welcome! 
        ${time()}`
    ),
    () => alert('Incorrect Username or Password!'),
);