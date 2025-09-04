# Node Blog

A simple **Node.js blog application** built with **Express.js** and core Node modules.  
This project serves as a practical introduction to Node.js concepts such as:

- HTTP servers
- File system operations
- Express routing
- Middleware
- Streams
- Modules and exports

It is designed both as a learning resource and a lightweight blog skeleton that can be expanded into a full-featured web app.

---

## 📂 Project Structure

node_blog/
│
├── app.js # Express app entry point
├── server.js # Node.js HTTP server with routing
├── files.js # File system operations (read, write, delete)
├── global.js # Demonstrates global objects, timers, and intervals
├── modules.js # Module imports/exports and OS module usage
├── people.js # Example module with exported data
├── streams.js # Demonstrates readable/writable streams
├── test.js # Small script with a greeting function
│
├── docs/ # Example text files for FS and streams
│ ├── blog1.txt
│ ├── blog2.txt
│ ├── blog3.txt
│ └── blog4.txt
│
├── views/ # HTML templates served by Express/HTTP
│ ├── index.html
│ ├── about.html
│ └── 404.html
│
├── package.json # Project metadata and dependencies
└── package-lock.json # Lockfile for reproducible builds

markdown
Copy code

---

## 🚀 Features

- **Express.js Routing**
  - `/` → Serves `index.html`
  - `/about` → Serves `about.html`
  - `/about-us` → Redirects to `/about`
  - 404 handler for unknown routes

- **Custom Node.js HTTP Server**
  - Serves static HTML files (`index`, `about`, `404`)
  - Handles redirects (`/about-me` → `/about`)
  - Uses `lodash` for utilities (`_.random`, `_.once`)

- **File System (fs) Operations**
  - Read and write text files
  - Create and remove directories
  - Delete files dynamically

- **Streams**
  - Readable and writable streams
  - Piping data between files

- **Modules**
  - Custom modules (`people.js`)
  - Built-in modules (`fs`, `os`)

- **Utility Scripts**
  - Demonstrates use of global objects, intervals, and exports

---

## 🛠️ Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/mahianyuallan/node_blog.git
   cd node_blog
Install dependencies:

bash
Copy code
npm install
Run the Express app:

bash
Copy code
node app.js
The app will start on http://localhost:3000.

Run the raw Node.js HTTP server:

bash
Copy code
node server.js
This will also run on http://localhost:3000.

For development with hot-reloading:

bash
Copy code
npx nodemon app.js
📚 Scripts
You can add these scripts to your package.json:

json
Copy code
"scripts": {
  "start": "node app.js",
  "server": "node server.js",
  "dev": "nodemon app.js"
}
Then run:

bash
Copy code
npm start   # Run Express app
npm run server  # Run HTTP server
npm run dev     # Run with nodemon
📦 Dependencies
Main dependencies include:

express – Fast web framework for Node.js

lodash – Utility library

nodemon – Auto-reload during development

📡 API Endpoints (Express)
Method	Endpoint	Description
GET	/	Returns the homepage (index.html)
GET	/about	Returns the about page (about.html)
GET	/about-us	Redirects to /about
ANY	*	Returns the 404 page (404.html)

🧪 Testing
Basic functionality can be verified by:

Starting the app:

bash
Copy code
npm start
Visiting in your browser:

http://localhost:3000/ → Home page

http://localhost:3000/about → About page

http://localhost:3000/about-us → Redirect to About

Any other route (e.g., /random) → 404 page

🤝 Contributing
Contributions are welcome!

To contribute:

Fork the repo

Create a feature branch (git checkout -b feature/my-feature)

Commit changes (git commit -m "Add new feature")

Push to your branch (git push origin feature/my-feature)

Open a Pull Request

📄 License
This project is licensed under the MIT License – see the LICENSE file for details.

👤 Author
Allan Mahianyu
GitHub: @mahianyuallan

📌 Notes
This project is educational in nature.
It demonstrates core Node.js concepts and can serve as a starting point for building more advanced applications like full-fledged blogs with databases, authentication, and APIs.

yaml
Copy code
