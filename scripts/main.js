// scripts/main.js - Landing page logic with category selector

document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const startQuizBtn = document.getElementById('startQuizBtn');
    const signInBtn = document.getElementById('signInBtn');
    const highScoresBtn = document.getElementById('highScoresBtn');
    const aboutBtn = document.getElementById('aboutBtn');
    const categoryBtns = document.querySelectorAll('.category-btn');

    // Available categories
    const availableCategories = ['geography', 'science', 'history', 'technology'];
    let selectedCategory = null;

    // ==================== CATEGORY SELECTION ====================
    if (categoryBtns.length > 0) {
        // Category buttons exist - use selector
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                categoryBtns.forEach(b => b.classList.remove('active'));

                // Add active class to clicked
                btn.classList.add('active');

                // Update selected category
                selectedCategory = btn.dataset.category;

                console.log('Selected category:', selectedCategory);
            });
        });

        // Set first category as active by default
        categoryBtns[0].classList.add('active');
        selectedCategory = categoryBtns[0].dataset.category;
    }

    // ==================== START QUIZ BUTTON ====================
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', () => {
            startQuizBtn.disabled = true;
            startQuizBtn.innerHTML = '<span class="material-icons">hourglass_empty</span> Loading...';

            // Determine category
            let quizCategory;
            if (selectedCategory) {
                // Use selected category from buttons
                quizCategory = selectedCategory;
            } else {
                // Random category if no selector
                quizCategory = availableCategories[Math.floor(Math.random() * availableCategories.length)];
            }

            // Save category to localStorage
            localStorage.setItem('quizCategory', quizCategory);

            // Simulate loading
            setTimeout(() => {
                window.location.href = `quiz.html?category=${quizCategory}`;
            }, 500);
        });
    } else {
        console.error('Start Quiz button not found!');
    }

    // ==================== SIGN IN BUTTON ====================
    if (signInBtn) {
        signInBtn.addEventListener('click', () => {
            signInBtn.disabled = true;
            signInBtn.innerHTML = 'Loading...';
            setTimeout(() => {
                signInBtn.disabled = false;
                signInBtn.innerHTML = 'Sign In';
                alert('Sign In feature coming soon!');
            }, 500);
        });
    } else {
        console.error('Sign In button not found!');
    }

    // ==================== HIGH SCORES LINK ====================
    if (highScoresBtn) {
        highScoresBtn.addEventListener('click', (e) => {
            e.preventDefault();

            highScoresBtn.style.pointerEvents = 'none';
            highScoresBtn.style.opacity = '0.5';
            highScoresBtn.textContent = 'Loading...';

            setTimeout(() => {
                highScoresBtn.style.pointerEvents = '';
                highScoresBtn.style.opacity = '';
                highScoresBtn.textContent = 'High Scores';
                alert('High Scores feature coming soon!');
            }, 500);
        });
    } else {
        console.error('High Scores link not found!');
    }

    // ==================== ABOUT LINK ====================
    if (aboutBtn) {
        aboutBtn.addEventListener('click', (e) => {
            e.preventDefault();

            aboutBtn.style.pointerEvents = 'none';
            aboutBtn.style.opacity = '0.5';
            aboutBtn.textContent = 'Loading...';

            setTimeout(() => {
                aboutBtn.style.pointerEvents = '';
                aboutBtn.style.opacity = '';
                aboutBtn.textContent = 'About';
                alert('About feature coming soon!');
            }, 500);
        });
    } else {
        console.error('About link not found!');
    }

    // Dynamic player count (optional enhancement)
    updatePlayerCount();
});

// ==================== HELPER FUNCTIONS ====================

// Update player count dynamically
function updatePlayerCount() {
    const participantText = document.querySelector('.participant-text');
    if (participantText) {
        // Simulate random player count between 800-1500
        const randomCount = Math.floor(Math.random() * 700) + 800;
        const displayCount = randomCount >= 1000 ? '1k+' : randomCount;
        participantText.textContent = `${displayCount} players today`;
    }
}

// Category selection (programmatic - can be called from console or other scripts)
function selectCategory(category) {
    localStorage.setItem('quizCategory', category);
    window.location.href = `quiz.html?category=${category}`;
}

// Make it available globally if needed
window.selectCategory = selectCategory;