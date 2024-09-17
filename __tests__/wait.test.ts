/**
 * Unit tests for src/version.ts
 */

import { version } from '../src/version'
import { expect } from '@jest/globals'

describe('version.ts', () => {

  it('waits with a valid number', async () => {
    await version()
  })
})
