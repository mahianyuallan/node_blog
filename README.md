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
├── app.js           # Express app entry point
├── server.js        # Node.js HTTP server with routing
├── files.js         # File system operations (read, write, delete)
├── global.js        # Demonstrates global objects, timers, and intervals
├── modules.js       # Module imports/exports and OS module usage
├── people.js        # Example module with exported data
├── streams.js       # Demonstrates readable/writable streams
├── test.js          # Small script with a greeting function
│
├── docs/            # Example text files for FS and streams
│   ├── blog1.txt
│   ├── blog2.txt
│   ├── blog3.txt
│   └── blog4.txt
│
├── views/           # HTML templates served by Express/HTTP
│   ├── index.html
│   ├── about.html
│   └── 404.html
│
├── package.json     # Project metadata and dependencies
└── package-lock.json # Lockfile for reproducible builds



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
2. Install dependencies:

   ``` bash
    Copy code
    npm install
    Run the Express app:

  ```bash
    Copy code
    node app.js
    The app will start on http://localhost:3000.



