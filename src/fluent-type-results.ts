import Result from 'fluent-type-results'
import { sleep } from './utils'

function divide (a: number, b: number) {
  if (b === 0) return Result.FailFromMsg('Division by zero')
  return Result.Ok(a / b)
}

const resultA = divide(10, 2)
if (resultA.isSuccess) console.assert(resultA.value === 5, 'Result should be 5')
else console.assert(false, 'Case 1 should not exist', resultA)

const resultB = divide(10, 0)
if (resultB.isFailed) console.assert(Array.isArray(resultB.errors), 'Error 1 should be an array')
else console.assert(false, 'Case 2 should not exist', resultB)

async function fetchUser (id: number) {
  await sleep(10)
  return Result.Ok({ id, name: 'Alice' })
}

// no async utils available
const resultC = await fetchUser(42)
if (resultC.isSuccess) console.assert(resultC.value?.id === 42, 'Result should have id 42')
else console.assert(false, 'Case 3 should not exist', resultC)

console.log('All tests passed successfully.')