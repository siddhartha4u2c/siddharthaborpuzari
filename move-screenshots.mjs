import { existsSync, mkdirSync, renameSync, copyFileSync, unlinkSync } from 'node:fs'
import { join } from 'node:path'

if (!existsSync('public/projects')) mkdirSync('public/projects', { recursive: true })

// Map of files that may sit in the project root (or elsewhere) → their target path.
const moves = [
  { from: 'medassist.png',          to: 'public/projects/medassist.png' },
  { from: 'asksiddhartha.png',      to: 'public/projects/asksiddhartha.png' },
  { from: 'sid-fitness.png',        to: 'public/projects/sid-fitness.png' },
  { from: 'rag-patient.png',        to: 'public/projects/rag-patient.png' },
  { from: 'azure-etl.png',          to: 'public/projects/azure-etl.png' },

  // Profile photo — accept any of these source names / extensions.
  { from: 'siddhartha.png',                 to: 'public/siddhartha.jpg' },
  { from: 'siddhartha.jpg',                 to: 'public/siddhartha.jpg' },
  { from: 'siddhartha.jpeg',                to: 'public/siddhartha.jpg' },
  { from: 'siddhartha_borpuzari.jpg',       to: 'public/siddhartha.jpg' },
  { from: 'siddhartha_borpuzari.jpeg',      to: 'public/siddhartha.jpg' },
  { from: 'siddhartha_borpuzari..jpg',      to: 'public/siddhartha.jpg' },
  { from: 'siddhartha_borpuzari..jpeg',     to: 'public/siddhartha.jpg' },
  { from: 'siddhartha_borpuzari.png',       to: 'public/siddhartha.jpg' },
]

for (const m of moves) {
  if (existsSync(m.from)) {
    // copy then delete so it works across drives / locked files
    copyFileSync(m.from, m.to)
    try { unlinkSync(m.from) } catch {}
    console.log(`moved ${m.from}  ->  ${m.to}`)
  }
}

console.log('Done.')
