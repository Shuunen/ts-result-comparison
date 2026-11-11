import { sleep } from './utils.ts'

function divide(a: number, b: number) {
  if (b === 0) return { error: 'Division by zero', ok: false } as const
  return { ok: true, value: a / b } as const
}

const resultA = divide(10, 2)
if (resultA.ok) console.assert(resultA.value === 5, 'Result should be 5')
else console.assert(false, 'Case 1 should not exist', resultA)

const resultB = divide(10, 0)
if (resultB.ok) console.assert(false, 'Case 2 should not exist', resultB)
else console.assert(typeof resultB.error === 'string', 'Error should be a string')

async function fetchUser(id: number) {
  await sleep(10)
  return { id, name: 'Alice' }
}

// no async utils available
const resultC = await fetchUser(42)
if (resultC) console.assert(resultC.id === 42, 'Result should have id 42')
else console.assert(false, 'Case 3 should not exist', resultC)

console.log('All tests passed successfully.')
