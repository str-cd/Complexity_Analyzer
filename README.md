# 🚀 Code Complexity Analyzer – *Unleash AI on Your Code!*

> ⚡ *Analyze Java code instantly. Understand complexity. Optimize like a pro.*

---

## 🧠 What is Code Complexity Analyzer?

**Code Complexity Analyzer** is a full-stack AI-powered web app that analyzes the **time and space complexity** of Java code.

Paste your code, select the language, and get instant insights on:
- ✅ **Current** Time & Space Complexity  
- 🚀 **Optimal** Time & Space Complexity  
- 🧩 Is your code already optimal, or can it be improved?

Whether you're a student, developer, or curious coder—this tool helps you write better, more efficient code.

---

## ✨ Features That Make It Stand Out

| Feature | Description |
|--------|-------------|
| 📥 **Code Input** | Paste your Java code in the UI |
| ⚙️ **AI-Powered Analysis** | Uses Gemini AI to detect complexity |
| 📈 **Optimal Suggestions** | Suggests optimal time and space complexity |
| ⏱ **Fetch Timeout** | 10-second API timeout for handling long executions |
| ❗ **Error Handling** | Graceful, user-friendly messages |
| 🖼 **Minimal UI** | Built with a clean, distraction-free interface |

---

## 🧰 Tech Stack Overview

### 💻 Frontend
- React.js ⚛️  
- Tailwind CSS 🎨  

### 🔙 Backend
- Java Spring Boot ☕  
- REST API: `/api/complexity/getComplexityReport`

### 🤖 AI Integration
- **Gemini API** – Powers the complexity analysis using natural language processing

---

## 📂 Project Structure

```bash
code-complexity-analyzer/
├── frontend/
│   ├── components/
│   │   └── LoadingScreen.jsx
│   ├── App.jsx
│   └── InputSection.jsx
├── backend/
│   ├── controller/
│   ├── service/
│   └── CodeComplexityAnalyzerApplication.java
```

---

## ⚙️ Getting Started

Follow these simple steps to run the app locally:

### 🔁 Clone the Repository

```bash
git clone https://github.com/vikas-sahu/code-complexity-analyzer.git
cd code-complexity-analyzer
```

### 🌐 Start the Frontend

```bash
cd frontend
npm install
npm start
```

### 🔧 Start the Backend

```bash
cd backend
./mvnw spring-boot:run
```

✅ Make sure the backend is running at: `http://localhost:8080`

---

## 📡 API Endpoint Details

### 🔸 Endpoint:  
`POST /api/complexity/getComplexityReport`

### 📤 Sample Request:

```json
{
  "code": "public class A { public static void main(String[] args) { System.out.println(\"Hello\"); } }",
  "language": "java"
}
```

### 📥 Sample Response:

```json
{
  "Current_Time_Complexity": "O(n log n)",
  "Current_Space_Complexity": "O(n)",
  "Optimal_Time_Complexity": "O(n)",
  "Optimal_Space_Complexity": "O(1)"
}
```

---

## 🧪 Try These for Testing

- QuickSort  
- MergeSort  
- Recursive Fibonacci  
- DFS/BFS implementations  

💡 You can also save test files under:  
`test-code/QuickSort.java` or similar.

---

## 👨‍💻 Author

**Vikas Sahu**  
Java Developer | Backend Enthusiast | AI Explorer  
📬 [GitHub Profile](https://github.com/vikas-sahu)

---

## 🙌 Support & Contributions

If you find this project helpful, consider giving it a ⭐!  
Contributions, suggestions, and feedback are welcome via issues and pull requests.
---

## ⚠️ Disclaimer

> 🔄 Note: Since this app uses a **free-tier AI model**, there may occasionally be **invalid or incomplete responses** due to API limitations or rate limits.

---

This tool uses AI (Gemini API) to estimate the time and space complexity of code.  
While it performs well on many examples, the results may not always be 100% accurate.  
Please **review the suggestions manually** before relying on them in critical scenarios.

---