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

// Mock context providers
import React from 'react'
import { MapProvider, MockReducerState } from '../src/contexts/mapContext'
import { SpotsProvider } from '../src/contexts/spotsContext'
import { ExportProvider } from '../src/contexts/exportContext'

export const decorators = [
  (Story) => (
    <ExportProvider>
      <SpotsProvider>
        <MapProvider defaultState={MockReducerState}>
          <Story />
        </MapProvider>
      </SpotsProvider>
    </ExportProvider>
  ),
]
