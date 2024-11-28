let randomNumber = 0;
let attemptsLeft = 10;

const generateNumberButton = document.getElementById('generateNumber');
const submitGuessButton = document.getElementById('submitGuess');
const restartGameButton = document.getElementById('restartGame');
const userGuessInput = document.getElementById('userGuess');
const feedbackElement = document.getElementById('feedback');
const attemptsElement = document.getElementById('attempts');

// Función para generar un número aleatorio
generateNumberButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 10;
    feedbackElement.textContent = "¡Número generado! Empieza a adivinar.";
    attemptsElement.textContent = `Intentos restantes: ${attemptsLeft}`;
    userGuessInput.disabled = false;
    submitGuessButton.disabled = false;
    generateNumberButton.disabled = true;
});

// Función para comprobar el número del usuario
submitGuessButton.addEventListener('click', () => {
    const userGuess = parseInt(userGuessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedbackElement.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
        return;
    }

    attemptsLeft--;
    attemptsElement.textContent = `Intentos restantes: ${attemptsLeft}`;

    if (userGuess === randomNumber) {
        feedbackElement.textContent = "¡Felicidades! Adivinaste el número.";
        endGame();
    } else if (attemptsLeft === 0) {
        feedbackElement.textContent = `¡Se acabaron los intentos! El número era ${randomNumber}.`;
        endGame();
    } else if (userGuess < randomNumber) {
        feedbackElement.textContent = "El número es más alto.";
    } else {
        feedbackElement.textContent = "El número es más bajo.";
    }

    userGuessInput.value = "";
});

// Función para reiniciar el juego
restartGameButton.addEventListener('click', () => {
    randomNumber = 0;
    attemptsLeft = 10;
    feedbackElement.textContent = "";
    attemptsElement.textContent = "";
    userGuessInput.value = "";
    userGuessInput.disabled = true;
    submitGuessButton.disabled = true;
    generateNumberButton.disabled = false;
    restartGameButton.style.display = "none";
});

// Función para terminar el juego
function endGame() {
    userGuessInput.disabled = true;
    submitGuessButton.disabled = true;
    restartGameButton.style.display = "inline-block";
}
