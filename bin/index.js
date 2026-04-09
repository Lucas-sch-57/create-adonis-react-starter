#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import process from 'process'

// Nom du projet
const projectName = process.argv[2]

if (!projectName) {
  console.error('❌ Merci de spécifier un nom de projet')
  console.log('👉 npx create-adonis-react-starter mon-projet')
  process.exit(1)
}

const targetDir = path.resolve(process.cwd(), projectName)
const templateDir = new URL('../template', import.meta.url).pathname

// Vérifie si dossier existe
if (fs.existsSync(targetDir)) {
  console.error('❌ Le dossier existe déjà')
  process.exit(1)
}

// Copie du template
fs.cpSync(templateDir, targetDir, { recursive: true })

console.log(`📦 Projet créé : ${projectName}`)

// Installation des dépendances
console.log('📥 Installation des dépendances...')
const agent = process.env.npm_config_user_agent || ''

let installCmd = 'npm install'

if (agent.includes('pnpm')) installCmd = 'pnpm install'
if (agent.includes('yarn')) installCmd = 'yarn'

execSync(installCmd, { cwd: targetDir, stdio: 'inherit' })

const pkgPath = path.join(targetDir, 'package.json')
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))

pkg.name = projectName

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))

fs.rmSync(path.join(targetDir, '.git'), { recursive: true, force: true })

console.log(`
✅ Setup terminé !

👉 cd ${projectName}
👉 docker compose up --build
`)