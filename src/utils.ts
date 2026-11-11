import { setTimeout as delay } from 'node:timers/promises'

/**
 * Sleep let you "pause" or delay processes
 * @param ms the time to wait in milliseconds, default 1000ms / 1 sec
 * @returns promise that resolve in the provided time
 */
export async function sleep(ms = 1000) {
  await delay(ms)
  return ms
}
