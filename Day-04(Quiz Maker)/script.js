const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
        correctAnswer: 'Mars'
    },
    // Add more questions as needed
];

let currentQuestion = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    questionElement.textContent = quizData[currentQuestion].question;

    optionsElement.innerHTML = '';

    quizData[currentQuestion].options.forEach((option) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestion].correctAnswer;

    if (selectedOption === correctAnswer) {
        alert('Correct!');
    } else {
        alert('Incorrect. The correct answer is: ' + correctAnswer);
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        alert('Quiz completed!');
        resetQuiz();
    }
}

function nextQuestion() {
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        alert('Quiz completed!');
        resetQuiz();
    }
}

function resetQuiz() {
    currentQuestion = 0;
    loadQuestion();
}