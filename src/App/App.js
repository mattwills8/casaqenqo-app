// @flow
import * as React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Router from '../components/Router/Router'

type Props = {}

class App extends React.Component<Props> {
  render () {
    return (
      <React.Fragment>
        <Header />

        <Router />

        <Footer />
      </React.Fragment>
    )
  }
}

export default App
