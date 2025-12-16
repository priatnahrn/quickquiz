// scripts/result.js - Logic untuk result page

// ==================== DOM ELEMENTS ====================
const resultIcon = document.querySelector('.result-icon i');
const resultTitle = document.querySelector('.result-title');
const scoreHighlight = document.querySelector('.score-highlight');
const resultSubtitle = document.querySelector('.result-subtitle');
const statValues = document.querySelectorAll('.stat-value');
const restartBtn = document.querySelector('.btn-primary');
const reviewBtn = document.querySelector('.btn-secondary');
const backLink = document.querySelector('.result-footer a');

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function () {
    loadResults();
    setupEventListeners();
});

// ==================== LOAD RESULTS FROM LOCALSTORAGE ====================
function loadResults() {
    // Get results from localStorage
    const resultsData = localStorage.getItem('quizResults');

    if (!resultsData) {
        // No results found - redirect to home
        console.error('No quiz results found!');
        showNoResultsMessage();
        return;
    }

    try {
        const results = JSON.parse(resultsData);
        displayResults(results);
    } catch (error) {
        console.error('Error parsing quiz results:', error);
        showNoResultsMessage();
    }
}

// ==================== DISPLAY RESULTS ====================
function displayResults(results) {
    const {
        quiz,
        totalQuestions,
        correctAnswers,
        incorrectAnswers,
        percentage
    } = results;

    // Update score highlight
    if (scoreHighlight) {
        scoreHighlight.textContent = `${percentage}%`;
    }

    // Update title based on performance
    if (resultTitle) {
        const titleText = getPerformanceTitle(percentage);
        resultTitle.innerHTML = `${titleText} You scored <span class="score-highlight">${percentage}%</span>`;
    }

    // Update subtitle
    if (resultSubtitle) {
        const subtitleText = getPerformanceSubtitle(percentage, correctAnswers, totalQuestions);
        resultSubtitle.textContent = subtitleText;
    }

    // Update icon based on performance
    updateIcon(percentage);

    // Update stats
    if (statValues.length >= 3) {
        statValues[0].textContent = correctAnswers; // Correct
        statValues[1].textContent = incorrectAnswers; // Incorrect
        statValues[2].textContent = calculateTime(); // Time (if tracked)
    }

    // Update page title
    document.title = `${percentage}% - ${quiz} Result | QuickQuiz`;
}

// ==================== PERFORMANCE MESSAGES ====================
function getPerformanceTitle(percentage) {
    if (percentage >= 90) return "🎉 Excellent!";
    if (percentage >= 80) return "👏 Great Job!";
    if (percentage >= 70) return "👍 Good Work!";
    if (percentage >= 60) return "😊 Not Bad!";
    return "💪 Keep Trying!";
}

function getPerformanceSubtitle(percentage, correct, total) {
    const messages = {
        excellent: `You answered ${correct} out of ${total} questions correctly. You're a master of this topic! Outstanding performance! 🌟`,
        great: `You answered ${correct} out of ${total} questions correctly. You're mastering this topic! Keep up the good work.`,
        good: `You answered ${correct} out of ${total} questions correctly. You're doing well! Keep practicing to improve.`,
        fair: `You answered ${correct} out of ${total} questions correctly. You're on the right track! A bit more practice will help.`,
        needsWork: `You answered ${correct} out of ${total} questions correctly. Don't give up! Review the material and try again.`
    };

    if (percentage >= 90) return messages.excellent;
    if (percentage >= 80) return messages.great;
    if (percentage >= 70) return messages.good;
    if (percentage >= 60) return messages.fair;
    return messages.needsWork;
}

// ==================== UPDATE ICON ====================
function updateIcon(percentage) {
    if (!resultIcon) return;

    // Change icon based on performance
    if (percentage >= 90) {
        resultIcon.textContent = 'emoji_events'; // Trophy
        resultIcon.parentElement.style.borderColor = 'var(--color-green-500)';
    } else if (percentage >= 80) {
        resultIcon.textContent = 'emoji_events'; // Trophy
    } else if (percentage >= 70) {
        resultIcon.textContent = 'sentiment_satisfied'; // Happy face
    } else if (percentage >= 60) {
        resultIcon.textContent = 'sentiment_neutral'; // Neutral face
    } else {
        resultIcon.textContent = 'sentiment_dissatisfied'; // Sad face
        resultIcon.parentElement.style.borderColor = 'var(--color-red-500)';
    }
}

// ==================== CALCULATE TIME (PLACEHOLDER) ====================
function calculateTime() {
    // For now, return placeholder
    // You can implement actual time tracking in quiz.js
    const resultsData = localStorage.getItem('quizResults');
    if (resultsData) {
        const results = JSON.parse(resultsData);
        if (results.timeSpent) {
            return formatTime(results.timeSpent);
        }
    }
    return '--:--';
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// ==================== NO RESULTS MESSAGE ====================
function showNoResultsMessage() {
    if (resultTitle) {
        resultTitle.innerHTML = '🤔 No Results Found';
    }
    if (resultSubtitle) {
        resultSubtitle.textContent = "It looks like you haven't completed a quiz yet. Start a quiz to see your results here!";
    }
    if (statValues.length >= 3) {
        statValues[0].textContent = '0';
        statValues[1].textContent = '0';
        statValues[2].textContent = '--:--';
    }

    // Hide review button if no results
    if (reviewBtn) {
        reviewBtn.style.display = 'none';
    }
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Restart Quiz button
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            restartBtn.disabled = true;
            restartBtn.innerHTML = '<i class="material-icons">hourglass_empty</i> Loading...';

            setTimeout(() => {
                // Get the same category from results
                const resultsData = localStorage.getItem('quizResults');
                if (resultsData) {
                    const results = JSON.parse(resultsData);
                    const category = results.category || 'geography';
                    window.location.href = `quiz.html?category=${category}`;
                } else {
                    window.location.href = 'quiz.html';
                }
            }, 500);
        });
    }

    // Review Answers button
    if (reviewBtn) {
        reviewBtn.addEventListener('click', () => {
            alert('Review Answers feature coming soon! You will be able to see all questions with correct and incorrect answers.');
            // TODO: Implement review page
            // window.location.href = 'review.html';
        });
    }

    // Back to Categories link
    if (backLink) {
        backLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'index.html';
        });
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'r' || e.key === 'R') {
            restartBtn?.click();
        } else if (e.key === 'Escape') {
            window.location.href = 'index.html';
        }
    });
}

// ==================== SAVE TO HISTORY (OPTIONAL) ====================
function saveToHistory() {
    const resultsData = localStorage.getItem('quizResults');
    if (!resultsData) return;

    try {
        const results = JSON.parse(resultsData);

        // Get existing history
        let history = localStorage.getItem('quizHistory');
        history = history ? JSON.parse(history) : [];

        // Add current result to history
        history.unshift(results);

        // Keep only last 10 results
        if (history.length > 10) {
            history = history.slice(0, 10);
        }

        // Save back to localStorage
        localStorage.setItem('quizHistory', JSON.stringify(history));

        console.log('Result saved to history');
    } catch (error) {
        console.error('Error saving to history:', error);
    }
}

// Save to history on page load
saveToHistory();

// ==================== SHARE RESULTS (OPTIONAL) ====================
function shareResults() {
    const resultsData = localStorage.getItem('quizResults');
    if (!resultsData) return;

    try {
        const results = JSON.parse(resultsData);
        const shareText = `🎯 I scored ${results.percentage}% on ${results.quiz}! Can you beat my score?`;

        // Check if Web Share API is supported
        if (navigator.share) {
            navigator.share({
                title: 'QuickQuiz Results',
                text: shareText,
                url: window.location.origin
            }).then(() => {
                console.log('Results shared successfully');
            }).catch((error) => {
                console.log('Error sharing:', error);
            });
        } else {
            // Fallback: Copy to clipboard
            navigator.clipboard.writeText(shareText).then(() => {
                alert('Results copied to clipboard!');
            });
        }
    } catch (error) {
        console.error('Error sharing results:', error);
    }
}

// Make shareResults available globally if you want to add a share button
window.shareResults = shareResults;

// ==================== PRINT RESULTS (OPTIONAL) ====================
function printResults() {
    window.print();
}

window.printResults = printResults;

// ==================== DEBUG INFO ====================
console.log('Result page loaded');
const resultsData = localStorage.getItem('quizResults');
if (resultsData) {
    console.log('Quiz Results:', JSON.parse(resultsData));
}