// data/quizData.js - Database soal quiz dengan gambar dari internet

const quizDatabase = {
    geography: {
        title: "Geography Quiz",
        category: "geography",
        icon: "🗺️",
        questions: [
            {
                id: 1,
                question: "What is the capital of France?",
                image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
                options: ["Paris", "London", "Berlin", "Madrid"],
                correctAnswer: 0
            },
            {
                id: 2,
                question: "What is the capital city of Australia?",
                image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
                options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                correctAnswer: 2
            },
            {
                id: 3,
                question: "Which river is the longest in the world?",
                image: "https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?w=800&q=80",
                options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
                correctAnswer: 1
            },
            {
                id: 4,
                question: "Mount Everest is located in which mountain range?",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
                options: ["Alps", "Andes", "Himalayas", "Rockies"],
                correctAnswer: 2
            },
            {
                id: 5,
                question: "What is the largest desert in the world?",
                image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
                options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
                correctAnswer: 3
            },
            {
                id: 6,
                question: "Which country has the most natural lakes?",
                image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80",
                options: ["United States", "Canada", "Russia", "Finland"],
                correctAnswer: 1
            },
            {
                id: 7,
                question: "What is the smallest country in the world?",
                image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&q=80",
                options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                correctAnswer: 1
            },
            {
                id: 8,
                question: "Which ocean is the largest?",
                image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                correctAnswer: 3
            },
            {
                id: 9,
                question: "What is the capital of Japan?",
                image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
                options: ["Osaka", "Tokyo", "Kyoto", "Hiroshima"],
                correctAnswer: 1
            },
            {
                id: 10,
                question: "Which country is known as the Land of the Rising Sun?",
                image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80",
                options: ["China", "South Korea", "Japan", "Thailand"],
                correctAnswer: 2
            },
            {
                id: 11,
                question: "What is the largest continent by area?",
                image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80",
                options: ["Africa", "Asia", "North America", "Europe"],
                correctAnswer: 1
            },
            {
                id: 12,
                question: "Which country has the longest coastline?",
                image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80",
                options: ["Australia", "Indonesia", "Canada", "Russia"],
                correctAnswer: 2
            }
        ]
    },

    science: {
        title: "Science Quiz",
        category: "science",
        icon: "🔬",
        questions: [
            {
                id: 1,
                question: "What is the chemical symbol for gold?",
                image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80",
                options: ["Go", "Au", "Gd", "Ag"],
                correctAnswer: 1
            },
            {
                id: 2,
                question: "What planet is known as the Red Planet?",
                image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&q=80",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correctAnswer: 1
            },
            {
                id: 3,
                question: "What is the speed of light?",
                image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
                options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "200,000 km/s"],
                correctAnswer: 0
            },
            {
                id: 4,
                question: "How many bones are in the human body?",
                image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80",
                options: ["186", "206", "226", "246"],
                correctAnswer: 1
            },
            {
                id: 5,
                question: "What is the powerhouse of the cell?",
                image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
                options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
                correctAnswer: 2
            },
            {
                id: 6,
                question: "What is H2O commonly known as?",
                image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80",
                options: ["Oxygen", "Hydrogen", "Water", "Carbon Dioxide"],
                correctAnswer: 2
            },
            {
                id: 7,
                question: "What force keeps us on the ground?",
                image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80",
                options: ["Magnetism", "Friction", "Gravity", "Inertia"],
                correctAnswer: 2
            },
            {
                id: 8,
                question: "What is the largest organ in the human body?",
                image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
                options: ["Heart", "Liver", "Brain", "Skin"],
                correctAnswer: 3
            },
            {
                id: 9,
                question: "What gas do plants absorb from the atmosphere?",
                image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correctAnswer: 2
            },
            {
                id: 10,
                question: "What is the center of an atom called?",
                image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
                options: ["Electron", "Proton", "Neutron", "Nucleus"],
                correctAnswer: 3
            },
            {
                id: 11,
                question: "What is the largest planet in our solar system?",
                image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&q=80",
                options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
                correctAnswer: 1
            },
            {
                id: 12,
                question: "What type of animal is a whale?",
                image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
                options: ["Fish", "Mammal", "Reptile", "Amphibian"],
                correctAnswer: 1
            }
        ]
    },

    history: {
        title: "History Quiz",
        category: "history",
        icon: "📜",
        questions: [
            {
                id: 1,
                question: "In which year did World War II end?",
                image: "https://images.unsplash.com/photo-1598901049013-7aeca6e01583?w=800&q=80",
                options: ["1943", "1944", "1945", "1946"],
                correctAnswer: 2
            },
            {
                id: 2,
                question: "Who was the first President of the United States?",
                image: "https://images.unsplash.com/photo-1529911194209-8c39d6f2e1b5?w=800&q=80",
                options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
                correctAnswer: 1
            },
            {
                id: 3,
                question: "Which ancient wonder is still standing?",
                image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80",
                options: ["Colossus of Rhodes", "Great Pyramid of Giza", "Hanging Gardens", "Lighthouse of Alexandria"],
                correctAnswer: 1
            },
            {
                id: 4,
                question: "Who painted the Mona Lisa?",
                image: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&q=80",
                options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
                correctAnswer: 1
            },
            {
                id: 5,
                question: "What year did the Berlin Wall fall?",
                image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80",
                options: ["1987", "1988", "1989", "1990"],
                correctAnswer: 2
            },
            {
                id: 6,
                question: "Who discovered America in 1492?",
                image: "https://images.unsplash.com/photo-1604537466158-719b1972feb8?w=800&q=80",
                options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Marco Polo"],
                correctAnswer: 1
            },
            {
                id: 7,
                question: "Which empire built Machu Picchu?",
                image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80",
                options: ["Aztec", "Maya", "Inca", "Olmec"],
                correctAnswer: 2
            },
            {
                id: 8,
                question: "Who was the first man on the moon?",
                image: "https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=800&q=80",
                options: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Yuri Gagarin"],
                correctAnswer: 1
            },
            {
                id: 9,
                question: "What year did the Titanic sink?",
                image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80",
                options: ["1910", "1911", "1912", "1913"],
                correctAnswer: 2
            },
            {
                id: 10,
                question: "Who wrote 'Romeo and Juliet'?",
                image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                correctAnswer: 1
            },
            {
                id: 11,
                question: "Which city was the first to be hit by an atomic bomb?",
                image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80",
                options: ["Tokyo", "Nagasaki", "Hiroshima", "Osaka"],
                correctAnswer: 2
            },
            {
                id: 12,
                question: "Who was the first woman to win a Nobel Prize?",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
                options: ["Marie Curie", "Mother Teresa", "Jane Addams", "Malala Yousafzai"],
                correctAnswer: 0
            }
        ]
    },

    technology: {
        title: "Technology Quiz",
        category: "technology",
        icon: "💻",
        questions: [
            {
                id: 1,
                question: "Who is the founder of Microsoft?",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
                options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
                correctAnswer: 1
            },
            {
                id: 2,
                question: "What does 'HTTP' stand for?",
                image: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&q=80",
                options: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Translation Protocol", "Home Tool Transfer Protocol"],
                correctAnswer: 0
            },
            {
                id: 3,
                question: "What year was the first iPhone released?",
                image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&q=80",
                options: ["2005", "2006", "2007", "2008"],
                correctAnswer: 2
            },
            {
                id: 4,
                question: "What does 'AI' stand for?",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
                options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Interface", "Automatic Integration"],
                correctAnswer: 1
            },
            {
                id: 5,
                question: "Who founded Tesla?",
                image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
                options: ["Elon Musk", "Martin Eberhard", "Jeff Bezos", "Larry Page"],
                correctAnswer: 1
            },
            {
                id: 6,
                question: "What is the most popular programming language in 2024?",
                image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
                options: ["Java", "C++", "Python", "JavaScript"],
                correctAnswer: 2
            },
            {
                id: 7,
                question: "What does 'CPU' stand for?",
                image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&q=80",
                options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Computer Processing Unit"],
                correctAnswer: 0
            },
            {
                id: 8,
                question: "Which company owns Android?",
                image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&q=80",
                options: ["Apple", "Microsoft", "Google", "Samsung"],
                correctAnswer: 2
            },
            {
                id: 9,
                question: "What is the maximum characters in a Tweet?",
                image: "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=800&q=80",
                options: ["140", "200", "280", "300"],
                correctAnswer: 2
            },
            {
                id: 10,
                question: "What does 'USB' stand for?",
                image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800&q=80",
                options: ["Universal Serial Bus", "United Service Bus", "Universal System Bus", "United Serial Bus"],
                correctAnswer: 0
            }
        ]
    }
};

// Fungsi untuk mendapatkan quiz berdasarkan kategori
function getQuizByCategory(category) {
    return quizDatabase[category] || quizDatabase.geography;
}

// Fungsi untuk random 10 soal dari kategori
function getRandomQuestions(category, count = 10) {
    const quiz = getQuizByCategory(category);
    const shuffled = [...quiz.questions].sort(() => Math.random() - 0.5);
    return {
        ...quiz,
        questions: shuffled.slice(0, count)
    };
}

// Get all available categories
function getAllCategories() {
    return Object.keys(quizDatabase).map(key => ({
        name: quizDatabase[key].title,
        category: key,
        icon: quizDatabase[key].icon,
        totalQuestions: quizDatabase[key].questions.length
    }));
}

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { quizDatabase, getQuizByCategory, getRandomQuestions, getAllCategories };
}