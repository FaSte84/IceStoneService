import sharp from 'sharp'
import { mkdir, stat } from 'node:fs/promises'
import path from 'node:path'

const jobs = [
  {
    input: 'public/images/ScogliRossi_2.webp',
    outputs: [{ width: 450, file: 'public/images/ScogliRossi_2-450.webp' }],
  },
]

async function fileExists(filePath) {
  try {
    await stat(filePath)
    return true
  } catch {
    return false
  }
}

for (const job of jobs) {
  const inputStat = await stat(job.input)

  for (const output of job.outputs) {
    const outputDir = path.dirname(output.file)
    await mkdir(outputDir, { recursive: true })

    if (await fileExists(output.file)) {
      const outStat = await stat(output.file)
      if (outStat.mtimeMs >= inputStat.mtimeMs) continue
    }

    await sharp(job.input)
      .resize({ width: output.width, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(output.file)
  }
}
