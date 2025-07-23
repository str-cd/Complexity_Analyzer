📊 Code Complexity Analyzer
This is a full-stack web application that analyzes the time and space complexity of Java code using AI. Users can input Java code, select the language (currently only Java supported), and get an analyzed complexity report in real time.

🧠 Features
✅ Accepts code as input

⚙️ Detects Time and Space Complexity

🔎 Displays analysis in a clear format

🌀 Loading indicator while processing

⚠️ Handles API errors and timeouts gracefully

🖥️ Tech Stack
Frontend (React + TailwindCSS)
ReactJS

TailwindCSS

Fetch API with 10-second timeout

Conditional rendering & error messages

Backend (Spring Boot)
REST API endpoint: /api/complexity/getComplexityReport

Accepts code and returns complexity analysis in JSON format

📦 Folder Structure
Copy
Edit
📁 frontend/
  ├── components/
  ├── App.jsx
  ├── InputSection.jsx
  └── LoadingScreen.jsx

📁 backend/
  ├── controller/
  ├── service/
  └── CodeComplexityAnalyzerApplication.java
🚀 Setup Instructions
Clone the Repo
bash
Copy
Edit
git clone https://github.com/your-username/code-complexity-analyzer.git
cd code-complexity-analyzer
Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm start
Backend Setup
bash
Copy
Edit
cd backend
./mvnw spring-boot:run
Make sure your Spring Boot server runs at http://localhost:8080.

📤 Example API Request
Endpoint: POST /api/complexity/getComplexityReport
Body:

json
Copy
Edit
{
  "code": "public class A { public static void main(String[] args) { System.out.println(\"Hello\"); } }",
  "language": "java"
}
Sample Response:

json
Copy
Edit
{
  "Current_Time_Complexity": "O(n log n)",
  "Current_Space_Complexity": "O(n)",
  "Optimal_Time_Complexity": "O(n)",
  "Optimal_Space_Complexity": "O(1)"
}
🧪 Test Case Code
Paste a large Java function (like QuickSort or Fibonacci) to test loading, timeout, and performance handling.
See test-code/longExample.java (optional file you can include in repo).

🧑‍💻 Contributors
Your Name

📄 License
MIT License.
Feel free to fork and enhance this project!

