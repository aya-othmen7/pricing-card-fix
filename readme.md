# 💳 Pricing Card Debug & Refactor

This project demonstrates fixing, refactoring, and enhancing a broken pricing card web component using React and AI-assisted debugging.

---

## 🎯 Project Goals

- Fix layout and styling bugs in a broken pricing card.
- Make buttons visually responsive and interactive.
- Refactor the pricing card into a reusable React component using props.
- Enhance the styling for a modern, clean design.
- Test and document the full process with before/after code and AI prompts.

---

## 🛠️ Tech Stack

- HTML / CSS / JavaScript
- React (ES Modules, no build tools)
- AI Debugging with [Cursor AI](https://www.cursor.sh/)

---

## 📄 Commit History & AI Prompts

| Commit     | Description                                         | AI Prompt                                                                                                  | Screenshot|
|------------|-----------------------------------------------------|------------------------------------------------------------------------------------------------------------|---------|
| Commit 1   | Initial commit: Add broken pricing card with issues | `Here is a broken pricing card HTML/CSS/JS snippet. It has layout issues and unresponsive button styles.`    |[version0](./first.png)|

| Commit 2   | Fix CSS syntax errors and layout                     | `Fix all CSS errors, correct layout problems, and ensure consistent spacing and alignment.`                |[version1](./second.png)|
| Commit 3   | Improve button responsiveness and hover effect      | `Add hover effects and accessible button styling for better UX.`                                          |[version2](./third.png)|
| Commit 4  & 5 | Refactor into reusable React component               | `Refactor it into a reusable component (Card with props: title, price, features, buttonLabel).`             |[version3](./final.png)|

---
## 🚀 How to Run

1. **Clone the repo:**
   ```bash
   git clone https://github.com/your-username/pricing-card-fix.git
   cd pricing-card-fix

2. **Run a local development server:**
    Recommended: Use the Live Server extension in VS Code:
        Open the project folder in VS Code.
        Right-click on index.html and select "Open with Live Server".
    Alternative: Use Python's built-in server:
    ```bash
    python -m http.server
    
    Then open your browser and go to http://localhost:8000/index.html.