# 🚀 create-adonis-react-starter

A modern fullstack starter powered by **AdonisJS + React + Vite + TailwindCSS + Docker**.

Create a production-ready fullstack app in seconds.

---

## ✨ Features

* ⚡ **AdonisJS API** (Node.js backend)
* ⚛️ **React + Vite frontend**
* 🎨 **TailwindCSS** preconfigured
* 🔐 Authentication ready
* 🐳 Docker & Docker Compose setup
* 📦 Monorepo structure (`apps/api` + `apps/client`)
* 🔥 Clean architecture & scalable structure

---

## 📦 Installation

Use `npx` to create a new project:

```bash
npx create-adonis-react-starter my-app
```

Then:

```bash
cd my-app
```

---

## 🚀 Getting Started

### With Docker (recommended)

```bash
docker compose up
```

* Frontend → http://localhost:5173
* API → http://localhost:3333

---

### Without Docker

Install dependencies:

```bash
pnpm install
```

Run backend:

```bash
cd apps/api
pnpm dev
```

Run frontend:

```bash
cd apps/client
pnpm dev
```

---

## 📁 Project Structure

```
my-app/
├── apps/
│   ├── api/        # AdonisJS backend
│   └── client/     # React frontend
├── docker-compose.yml
├── package.json
```

---

## 🛠️ Tech Stack

* **Backend:** AdonisJS
* **Frontend:** React + Vite
* **Styling:** TailwindCSS
* **State:** Zustand / React Query
* **Database:** PostgreSQL
* **DevOps:** Docker

---

## 📌 Requirements

* Node.js >= 18
* pnpm (recommended)
* Docker (optional but recommended)

---

## 🧠 Philosophy

This starter aims to provide:

* 🧼 Clean and maintainable structure
* ⚡ Fast development experience
* 🏗️ Scalable architecture
* 🔥 Minimal setup, maximum productivity

---

## 📦 CLI Usage

```bash
npx create-adonis-react-starter <project-name>
```

---

## 🔄 Updates

To update your CLI:

```bash
npm update -g create-adonis-react-starter
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create your feature branch
3. Commit your changes
4. Open a Pull Request

---

## 📄 License

MIT License

---

## ⭐ Support

If you like this project:

* ⭐ Star the repo
* 🐛 Report issues
* 💡 Suggest features

---

## 👨‍💻 Author

Made by Lucas Schiltz
