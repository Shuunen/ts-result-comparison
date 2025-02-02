import { sleep } from './utils'
import { Result } from "typescript-result"

function divide (a: number, b: number) {
  if (b === 0) return Result.error('Division by zero')
  return Result.ok(a / b)
}

const resultA = divide(10, 2)
if (resultA.isOk()) console.assert(resultA.value === 5, 'Result should be 5')
else console.assert(false, 'Case 1 should not exist', resultA)

const resultB = divide(10, 0)
if (resultB.isError()) console.assert(typeof resultB.error === 'string', 'Error should be a string')
else console.assert(false, 'Case 2 should not exist', resultB)

async function fetchUser (id: number) {
  await sleep(10)
  return { id, name: 'Alice' }
}

const resultC = await Result.fromAsync(fetchUser(42))
if (resultC.isOk()) console.assert(resultC.value.id === 42, 'Result should have id 42')
else console.assert(false, 'Case 3 should not exist', resultC)

console.log('All tests passed successfully.')