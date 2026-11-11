import { build, file, Glob } from 'bun'

const glob = new Glob('*.ts')
const ignore = new Set(['utils.ts'])
const outdir = './dist'
const nameColumnWidth = 20
const nameRegex = /dist[/\\](?<name>[\w-]+)/u

function showFileSize(path: string) {
  const name = nameRegex.exec(path)?.groups?.name
  if (!name) throw new Error(`Failed to extract name from ${path}`)
  const stats = file(path)
  console.log(name.padStart(nameColumnWidth), stats.size, 'bytes')
}

async function buildFile(name: string) {
  const entrypoints = [`./src/${name}`]
  try {
    const data = await build({ entrypoints, minify: true, outdir })
    showFileSize(data.outputs[0].path)
  } catch (error: unknown) {
    console.error('Build failed:', error)
  }
}

for await (const name of glob.scan('./src')) {
  if (ignore.has(name)) continue
  await buildFile(name)
}
