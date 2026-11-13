import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      thresholds: {
        '100': true,
      },
    },
    globals: true,
    passWithNoTests: true,
    pool: 'threads',
    reporters: ['dot'],
    silent: true,
  },
})
