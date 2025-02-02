import { Glob } from "bun"

const glob = new Glob("*.ts")
const ignore = ['utils.ts']
const outdir = './dist'
const nameRegex = /dist[\/\\](?<name>[\w-]+)/

function showFileSize (path: string) {
  const name = nameRegex.exec(path)?.groups?.name
  if (!name) throw new Error(`Failed to extract name from ${path}`)
  const stats = Bun.file(path)
  console.log(name.padStart(20), stats.size, 'bytes')
}

function build (file: string) {
  const entrypoints = [`./src/${file}`]
  Bun.build({ entrypoints, outdir, minify: true }).then((data) => {
    showFileSize(data.outputs[0].path)
  }).catch((err) => { console.error('Build failed:', err) })
}

for await (const file of glob.scan("./src")) {
  if (ignore.includes(file)) continue
  build(file)
}