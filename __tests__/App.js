import 'react-native'
import React from 'react'
import fs from 'fs'
import { toMatchImageSnapshot } from 'jest-image-snapshot'

import App from '../App'

expect.extend({ toMatchImageSnapshot })

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<App />)
})

it('should match capture screen', async () => {
  fs.readFile('test.png', (err, data) => {
    expect(data).toMatchImageSnapshot()
  })
})
