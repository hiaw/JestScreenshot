import { captureScreen } from 'react-native-view-shot'

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should have welcome screen', async () => {
    await expect(element(by.text('Welcome to React Native!'))).toBeVisible()
  })

  it('should have capture screen', async () => {
    captureScreen({
      format: 'jpg',
      quality: 0.8,
    }).then(
      uri => console.log('Image saved to', uri),
      error => console.error('Oops, snapshot failed', error),
    )
  })
})
