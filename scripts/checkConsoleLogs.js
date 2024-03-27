import fs from 'fs'
import process from 'process'

function loopInsideFolder(folder, arr = []) {
  const files = fs.readdirSync(folder)
  for (const file of files) {
    const path = `${folder}/${file}`
    if (fs.lstatSync(path).isDirectory()) {
      loopInsideFolder(path, arr)
    } else {
      arr.push(path)
    }
  }
}

function validateNoConsoleLogs() {
  const allFiles = []
  const failedFiles = []

  loopInsideFolder('src', allFiles)

  const tsAndTsxFiles = allFiles.filter((file) => file.endsWith('.ts') || file.endsWith('.tsx'))
  const filesWhitoutDotD = tsAndTsxFiles.filter((file) => !file.includes('.d.ts'))

  for (const file of filesWhitoutDotD) {
    const contents = fs.readFileSync(file, 'utf8')
    if (contents.includes('console.log')) {
      failedFiles.push(file)
    }
  }

  if (failedFiles.length > 0) {
    console.log('\n\n\n')
    console.log(`Console.log was found in the following files:\n⚠ ${failedFiles.join('\n⚠ ')}`)
    console.log('\n Remove them before committing.')
    console.log('\n')
    process.exit(1)
  }

  console.log('¡Clean potato code!')
}

validateNoConsoleLogs()
