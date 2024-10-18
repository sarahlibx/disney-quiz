const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'When did Walt Disney World open?',
        choice1: 'July 17, 1955',
        choice2: 'October 1, 1971',
        choice3: 'October 3, 1982',
        choice4: 'December 5, 1901',
        answer: 2,
    },
    {
        question: 'When did Walt Disney World open?',
        choice1: 'July 17, 1955',
        choice2: 'October 1, 1971',
        choice3: 'October 3, 1982',
        choice4: 'December 5, 1901',
        answer: 2,
    },
    {
        question: 'When did Walt Disney World open?',
        choice1: 'July 17, 1955',
        choice2: 'October 1, 1971',
        choice3: 'October 3, 1982',
        choice4: 'December 5, 1901',
        answer: 2,
    },
    {
        question: 'When did Walt Disney World open?',
        choice1: 'July 17, 1955',
        choice2: 'October 1, 1971',
        choice3: 'October 3, 1982',
        choice4: 'December 5, 1901',
        answer: 2,
    },
      {
        question: 'When did Walt Disney World open?',
        choice1: 'July 17, 1955',
        choice2: 'October 1, 1971',
        choice3: 'October 3, 1982',
        choice4: 'December 5, 1901',
        answer: 2,
    }
]