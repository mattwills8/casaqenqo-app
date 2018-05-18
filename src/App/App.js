// @flow
import * as React from 'react'
import type { ScreenSize } from '../lib/contexts/screenSize_context'
import Media from 'react-media'
import {
  mobilemaxwidthpx,
  tabletmaxwidthpx
} from '../scss/partials/_variables.scss'
import { ScreenSizeProvider } from '../lib/contexts/screenSize_context'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Router from '../components/Router/Router'

import '../scss/main.scss'

type Props = {}

type State = {
  screenSize: ScreenSize
}

class App extends React.Component<Props, State> {
  render () {
    return (
      <Media query={{ maxWidth: mobilemaxwidthpx }}>
        {isMobile => {
          return (
            <Media query={{ maxWidth: tabletmaxwidthpx }}>
              {isTablet => {
                let screenSize = 'desktop'
                if (isMobile) {
                  screenSize = 'mobile'
                } else if (isTablet) {
                  screenSize = 'tablet'
                }

                return (
                  <ScreenSizeProvider value={{ screenSize }}>
                    <Header />

                    <Router />

                    <Footer />
                  </ScreenSizeProvider>
                )
              }}
            </Media>
          )
        }}
      </Media>
    )
  }
}

export default App
