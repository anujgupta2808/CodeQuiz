# 🎯 Programming Quiz Application

A comprehensive web-based quiz platform to test and improve your programming knowledge across 8 popular languages with 700+ carefully curated questions.

## 📝 Description

This is an interactive quiz application designed for developers and programming enthusiasts to assess their skills in multiple programming languages. The app features a clean, responsive interface with real-time scoring, progress tracking, and user authentication. Perfect for students, job seekers preparing for technical interviews, or anyone looking to sharpen their coding knowledge.

## ✨ Features

- **700+ Questions**: Extensive question bank covering HTML, CSS, JavaScript, PHP, C, C++, Java, and Python
- **Multiple Difficulty Levels**: Easy, Medium, and Hard questions to match your skill level
- **User Authentication**: Secure login/register system with profile management
- **Real-time Scoring**: Instant feedback with score tracking and accuracy percentage
- **Progress Tracking**: Visual progress bar and question counter
- **Timer Mode**: Optional timer to challenge yourself
- **Bookmark System**: Save questions for later review
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Local Storage**: Saves your progress and preferences in the browser
- **Category Filtering**: Focus on specific programming languages
- **Quiz Summary**: Detailed performance report after completion

## 🚀 Quick Start

1. **Clone or Download** the repository
2. **Open** `index.html` in your web browser
3. **Register** a new account or login
4. **Start Quiz** and select your preferred language/difficulty
5. **Track Progress** through your profile page

## 📂 Project Structure

```
PROJECT STRUCTURE (FINAL)/
├── index.html              # Landing page
├── quiz-game.html          # Main quiz interface
├── login.html              # User login page
├── register.html           # User registration page
├── profile.html            # User profile & stats
├── learning.html           # Learning resources
├── about.html              # About page
├── contact.html            # Contact page
├── quiz-questions.js       # Question database (700+ questions)
├── quiz-script.js          # Quiz logic & functionality
├── auth.js                 # Authentication system
├── script.js               # General utilities
├── quiz-styles.css         # Styling
├── styles.css              # Additional styles
└── favicon.svg             # App icon
```

## 🎮 How to Use

### Starting a Quiz
1. Navigate to the quiz page
2. Select difficulty level (All/Easy/Medium/Hard)
3. Choose a programming language or select "All"
4. Enable timer if desired
5. Answer questions and click "Submit Answer"

### Scoring System
- **Correct Answer**: +10 points
- **Wrong Answer**: 0 points
- **Accuracy**: Calculated as (Correct/Total) × 100%

### Features Guide
- **Bookmark**: Save difficult questions for review
- **Reset Quiz**: Start fresh with new questions
- **Progress Bar**: Visual indicator of quiz completion
- **Quiz Summary**: View detailed results at the end

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox/grid
- **JavaScript (ES6+)**: Core functionality
- **LocalStorage API**: Data persistence
- **No external dependencies**: Pure vanilla JavaScript

## 📊 Question Categories

| Language   | Questions | Difficulty Levels |
|------------|-----------|-------------------|
| HTML       | 100       | Easy/Medium/Hard  |
| CSS        | 100       | Easy/Medium/Hard  |
| JavaScript | 100       | Easy/Medium/Hard  |
| PHP        | 100       | Easy/Medium/Hard  |
| C          | 80        | Easy/Medium/Hard  |
| C++        | 80        | Easy/Medium/Hard  |
| Java       | 80        | Easy/Medium/Hard  |
| Python     | 80        | Easy/Medium/Hard  |

## 🎨 Customization

### Adding New Questions
Edit `quiz-questions.js`:

```javascript
const htmlQuestions = [
    {
        category: "html",
        difficulty: "easy",
        type: "mcq",
        question: "Your question here?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: 0  // Index of correct answer
    }
];
```

### Modifying Styles
Edit `quiz-styles.css` to customize colors, fonts, and layout.

## 🌐 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select main branch
4. Access at `https://username.github.io/repo-name`

### Local Server
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## 💡 Tips for Users

- Start with "Easy" difficulty to build confidence
- Use bookmarks to mark challenging questions
- Enable timer mode to simulate exam conditions
- Review your profile regularly to track improvement
- Practice consistently across all languages

## 🔒 Privacy

All user data is stored locally in your browser using LocalStorage. No data is sent to external servers.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add more questions
- Improve UI/UX
- Fix bugs
- Add new features

## 📄 License

This project is open source and available for educational purposes.

## 📧 Contact

For questions or feedback, use the contact page in the application.

---

**Happy Learning! 💻✨**

Start your programming mastery journey today!
