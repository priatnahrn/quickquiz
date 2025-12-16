// scripts/quiz.js - Logic untuk quiz page

// ==================== STATE MANAGEMENT ====================
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let timeRemaining = 60; // 60 seconds per question
let timer = null;
let startTime = null; // Track when quiz started
let totalTimeSpent = 0; // Total time in seconds

// ==================== DOM ELEMENTS ====================
const quizImage = document.querySelector('.quiz-question img');
const quizLabel = document.querySelector('.quiz-question .label');
const quizQuestion = document.querySelector('.quiz-question .question');
const quizOptionsContainer = document.querySelector('.quiz-options');
const progressText = document.querySelector('.progress-text');
const progressBar = document.querySelector('.progress');
const progressTitle = document.querySelector('.progress-content h2');
const prevBtn = document.querySelector('.btn-secondary');
const nextBtn = document.querySelector('.btn-primary');
const skipLink = document.querySelector('.quiz-footer a');

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function () {
    initQuiz();
    setupEventListeners();
});

function initQuiz() {
    // Get quiz category from localStorage or URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category') || localStorage.getItem('quizCategory') || 'geography';

    // Load quiz data
    currentQuiz = getRandomQuestions(category, 10);

    // Save to localStorage
    localStorage.setItem('currentQuiz', JSON.stringify(currentQuiz));

    // Initialize user answers array
    userAnswers = new Array(currentQuiz.questions.length).fill(null);

    // Start timer
    startTime = Date.now();
    startQuizTimer();

    // Display first question
    displayQuestion();
    updateProgress();
}

// ==================== DISPLAY QUESTION ====================
function displayQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];

    // Update quiz title
    progressTitle.textContent = currentQuiz.title;

    // Update image
    quizImage.src = question.image;
    quizImage.alt = question.question;

    // Update label
    quizLabel.textContent = currentQuiz.title;

    // Update question text
    quizQuestion.textContent = question.question;

    // Clear and update options
    quizOptionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.className = 'quiz-option';

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'quiz-option';
        input.id = `quiz-option-${index}`;
        input.value = index;

        // Check if this option was previously selected
        if (userAnswers[currentQuestionIndex] === index) {
            input.checked = true;
        }

        const label = document.createElement('label');
        label.htmlFor = `quiz-option-${index}`;
        label.textContent = option;

        li.appendChild(input);
        li.appendChild(label);
        quizOptionsContainer.appendChild(li);

        // Add click event to entire option
        li.addEventListener('click', () => {
            input.checked = true;
            saveAnswer(index);
        });

        // Add change event to input
        input.addEventListener('change', () => {
            saveAnswer(index);
        });
    });

    // Update button states
    updateButtonStates();
}

// ==================== SAVE ANSWER ====================
function saveAnswer(answerIndex) {
    userAnswers[currentQuestionIndex] = answerIndex;
    console.log('Answer saved:', answerIndex);
}

// ==================== NAVIGATION ====================
function nextQuestion() {
    // Check if answer is selected
    if (userAnswers[currentQuestionIndex] === null) {
        alert('Please select an answer before proceeding!');
        return;
    }

    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        updateProgress();
    } else {
        // Quiz completed - go to results
        finishQuiz();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        updateProgress();
    }
}

function skipQuestion() {
    if (confirm('Are you sure you want to skip this question?')) {
        userAnswers[currentQuestionIndex] = null; // Mark as skipped
        if (currentQuestionIndex < currentQuiz.questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
            updateProgress();
        } else {
            finishQuiz();
        }
    }
}

// ==================== UPDATE UI ====================
function updateProgress() {
    // Update progress text
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuiz.questions.length}`;

    // Update progress bar
    const progressPercentage = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.style.backgroundColor = 'var(--color-green-500)';
}

function updateButtonStates() {
    // Disable previous button on first question
    if (currentQuestionIndex === 0) {
        prevBtn.disabled = true;
        prevBtn.style.opacity = '0.5';
        prevBtn.style.cursor = 'not-allowed';
    } else {
        prevBtn.disabled = false;
        prevBtn.style.opacity = '1';
        prevBtn.style.cursor = 'pointer';
    }

    // Change next button text on last question
    if (currentQuestionIndex === currentQuiz.questions.length - 1) {
        nextBtn.innerHTML = 'Finish <i class="material-icons">check</i>';
    } else {
        nextBtn.innerHTML = 'Next <i class="material-icons">arrow_forward</i>';
    }
}

// ==================== FINISH QUIZ ====================
function finishQuiz() {
    // Stop timer
    stopQuizTimer();

    // Calculate total time spent
    if (startTime) {
        totalTimeSpent = Math.floor((Date.now() - startTime) / 1000); // in seconds
    }

    // Calculate score
    score = 0;
    currentQuiz.questions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            score++;
        }
    });

    // Save results to localStorage
    const results = {
        quiz: currentQuiz.title,
        category: currentQuiz.category,
        totalQuestions: currentQuiz.questions.length,
        correctAnswers: score,
        incorrectAnswers: currentQuiz.questions.length - score,
        percentage: Math.round((score / currentQuiz.questions.length) * 100),
        userAnswers: userAnswers,
        questions: currentQuiz.questions,
        timeSpent: totalTimeSpent, // Add time spent
        timestamp: new Date().toISOString()
    };

    localStorage.setItem('quizResults', JSON.stringify(results));

    // Redirect to results page
    window.location.href = 'result.html';
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Next button
    if (nextBtn) {
        nextBtn.addEventListener('click', nextQuestion);
    }

    // Previous button
    if (prevBtn) {
        prevBtn.addEventListener('click', previousQuestion);
    }

    // Skip link
    if (skipLink) {
        skipLink.addEventListener('click', (e) => {
            e.preventDefault();
            skipQuestion();
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'Enter') {
            nextQuestion();
        } else if (e.key === 'ArrowLeft') {
            previousQuestion();
        } else if (e.key >= '1' && e.key <= '4') {
            const optionIndex = parseInt(e.key) - 1;
            const option = document.getElementById(`quiz-option-${optionIndex}`);
            if (option) {
                option.checked = true;
                saveAnswer(optionIndex);
            }
        }
    });
}

// ==================== TIMER FUNCTIONS ====================
function startQuizTimer() {
    // Update timer every second for display purposes (optional)
    timer = setInterval(() => {
        // You can add a timer display here if you want
        // For now, we just track total time
    }, 1000);
}

function stopQuizTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

// Stop timer when user leaves the page
window.addEventListener('beforeunload', () => {
    stopQuizTimer();
});

// ==================== HELPER: Check if on quiz page ====================
if (window.location.pathname.includes('quiz.html')) {
    console.log('Quiz page loaded');
}