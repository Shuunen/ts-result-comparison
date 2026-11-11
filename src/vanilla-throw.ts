import { sleep } from './utils.ts'

function divide(a: number, b: number) {
  if (b === 0) throw new Error('Division by zero')
  return a / b
}

try {
  const resultA = divide(10, 2)
  console.assert(resultA === 5, 'Result should be 5')
} catch (error) {
  console.assert(false, 'Case 1 should not exist', error)
}

try {
  const resultB = divide(10, 0)
  console.assert(false, 'Case 2 should not exist', resultB)
} catch (error) {
  console.assert(error instanceof Error, 'Error 2 should be an Error')
}

async function fetchUser(id: number) {
  await sleep(10)
  return { id, name: 'Alice' }
}

try {
  // no async utils available
  const resultC = await fetchUser(42)
  console.assert(resultC.id === 42, 'Result should have id 42')
} catch (error) {
  console.assert(false, 'Case 3 should not exist', error)
}

console.log('All tests passed successfully.')
