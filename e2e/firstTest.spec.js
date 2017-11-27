describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should have welcome screen', async () => {
    await expect(element(by.text('Welcome to React Native!'))).toBeVisible()
  })

  it('should have capture screen', async () => {
    // Try using command line instead
    // xcrun simctl io booted screenshot screen.png

    const filename = 'screenshots/test.png'
    const { spawnSync } = require('child_process')
    spawnSync('xcrun', ['simctl', 'io', 'booted', 'screenshot', filename])
  })
})
