import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
const currentDir = dirname(fileURLToPath.join(import.meta.url))
const root = join(currentDir, '../')
const audioDirectory = join(root, 'audio')
const publicDirectory = join(root, 'public')

export default {
  port: process.env.PORT || 3000,
  dir: {
    root,
    audioDirectory,
    publicDirectory,
    songsDirectory: join(audioDirectory, 'songs'),
    fxDirectory: join(audioDirectory, 'fx'),
    },
  }
