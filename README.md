darNote 🚀
The "Second Brain" for Students who hate losing papers.

Built by a 2026 DSE Retaker because I was tired of scattering my notes across 5 different apps.

🧐 What is this?
darNote is a web-based workspace designed to handle the specific chaos of student life. It combines note-taking, error logging, and file storage into one dashboard.

Unlike standard note apps, this is built for "Survival":

Error Logs: Specifically designed to track mistakes, upload marking schemes, and toggle "Mastered" status.

Unlimited Storage: Integrates directly with your Google Drive, so you never hit a storage cap on the app itself.

Lazy AI: Uses Gemini to auto-title screenshots (OCR) and fix grammar, because typing titles manually is a waste of time.

✨ Features
📝 Rich Text Editor: Powered by TinyMCE with export to PDF/PNG.

❌ Error Logging System: dedicated UI for tracking DSE past paper mistakes.

🧠 Mind Maps: Visual node-based learning tool.

🤖 AI Integration:

Auto-titling for uploaded images (OCR).

AI Chat Assistant for quick questions.

Grammar & Summary tools.

📱 Mobile Optimized: A dedicated mobile.html view for reviewing notes on the go.

☁️ Cloud Sync: Firebase for database (text/metadata) + Google Drive API for heavy media.

🌙 Dark Mode: Because we study at 2 AM.

🛠 Tech Stack
I kept it raw and simple to avoid "Dependency Hell":

Frontend: HTML5 + React 18 (via CDN) + Babel Standalone.

Styling: Tailwind CSS (via CDN).

Backend: Google Firebase (Authentication & Firestore).

Storage: Google Drive API v3 (Client-side Auth).

AI: Google Gemini Pro (via Proxy).

🚀 How to Run Locally
Since this uses CDN links, you don't need npm or node_modules.

Clone the repo:

Bash

git clone https://github.com/darren6251/darnote.git
Configuration:

You will need your own Firebase Config and Google Drive API Client ID.

Look for the firebaseConfig and GDRIVE_CLIENT_ID variables in the HTML files and replace them with your own if you are forking this.

Run:

You cannot just double-click the HTML file (CORS issues).

Use a simple local server.

VS Code: Right-click index.html -> "Open with Live Server".

Python: python -m http.server 8000

📂 File Structure
index.html: Landing page & Login logic.

home.html: Main Dashboard (Calendar, Quick Tasks, Stats).

note.html: The core workspace (Editor, Mind Map, AI Chat).

el.html: Error Log specific dashboard.

mobile.html: Optimized UI for phone screens.

🤖 The "Confession"
I didn't write every line of code alone. I used Gemini AI to help me debug React components, handle the logic for the Google Drive API, and fix CSS when things broke.

I’m a student, not a senior software engineer. Think of this code as "AI-assisted engineering." It works, it's secure, but don't expect enterprise-level architecture.

📄 License
Feel free to fork it, break it, or use it to study.

📧 Contact
Found a bug? (There are probably a few). Email: darrenng@3-shot.com
