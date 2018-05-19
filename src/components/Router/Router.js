// @flow
import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from '../Loading/Loading'

const HomeLoadable = Loadable({
  loader: () => import('../../Pages/Home/Home'),
  loading: Loading
})

const PageLoadable = Loadable({
  loader: () => import('../../Pages/CustomPage/CustomPage'),
  loading: Loading
})

/* const PostLoadable = Loadable({
  loader: () => import('../../Pages/Post/Post'),
  loading: Loading
}) */

type Props = {}

const Router = (props: Props) => {
  return (
    <Switch>
      <Route exact path="/" component={HomeLoadable} />

      <Route exact path="/:slug" component={PageLoadable} />
    </Switch>
  )
}

/*
<Route
  exact
  path="/post/:slug"
  render={() => {
    return (
      <React.Fragment>
        <Header />
        <RouterInner />
      </React.Fragment>
    )
  }}
/>

<Route
  exact
  path="/services"
  render={() => {
    return (
      <React.Fragment>
        <Header />
        <RouterInner />
      </React.Fragment>
    )
  }}
/>
*/

export default Router
