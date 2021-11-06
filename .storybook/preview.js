import '../src/styles/index.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
  },
}

// Mock Next.js <Image/> component in storybook
// https://github.com/vercel/next.js/issues/18393#issuecomment-783269086
import * as NextImage from 'next/image'
const OriginalNextImage = NextImage.default
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

// Mock MapContext
import React from 'react'
import { MapProvider, MockReducerState } from '../src/contexts/mapContext'

export const decorators = [
  (Story) => (
    <MapProvider defaultState={MockReducerState}>
      <Story />
    </MapProvider>
  ),
]
