const messages = [
    "Andres",
    "Ana",
    "Jessica",
    "Diego",
    "Laura",
    "Fernanda",
    "Bruno",
    "Marcelo",
    "Paulina",
    "Javier"
];


const  randomMsg = () => {
    const message = messages [Math.floor(Math.random()*messages.length)];
    console.log(message);
};


module.exports = { randomMsg };