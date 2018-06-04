// @flow
import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import Header from '../Header/Header'
import Loadable from 'react-loadable'
import Loading from '../Loading/Loading'

const HomeLoadable = Loadable({
  loader: () => import('../../Pages/Home/Home'),
  loading: Loading
})

const NewsLoadable = Loadable({
  loader: () => import('../../Pages/News/News'),
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
    <ScrollToTop>
      <Switch>
        <CQRoute exact path="/" component={HomeLoadable} delayHeader />

        <CQRoute exact path="/news" component={NewsLoadable} />

        <CQRoute exact path="/:slug" component={PageLoadable} delayHeader />
      </Switch>
    </ScrollToTop>
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

type CQRouteProps = {
  delayHeader?: boolean,
  // react router route props, so far we cant get this from flow typed
  component?: React$ComponentType<*>,
  path?: string,
  exact?: boolean,
  strict?: boolean
}

const CQRoute = (props: CQRouteProps) => {
  const { delayHeader, component, ...routeProps } = props
  return (
    <Route
      {...routeProps}
      render={renderProps => {
        return (
          <React.Fragment>
            <Header delayHeader={delayHeader} {...renderProps} />

            {props.component && <props.component {...renderProps} />}
          </React.Fragment>
        )
      }}
    />
  )
}

export default Router
