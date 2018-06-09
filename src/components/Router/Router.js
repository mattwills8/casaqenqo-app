// @flow
import * as React from 'react'
import { Switch } from 'react-router-dom'
import ScrollToTop from './ScrollToTop/ScrollToTop'
import CQRoute from './CQRoute/CQRoute'
import Loadable from 'react-loadable'
import Loading from '../Loading/Loading'

const HomeLoadable = Loadable({
  loader: () => import('../../Pages/Home/Home'),
  loading: Loading
})

const AboutLoadable = Loadable({
  loader: () => import('../../Pages/About/About'),
  loading: Loading
})

const NewsLoadable = Loadable({
  loader: () => import('../../Pages/News/News'),
  loading: Loading
})

const ServicesLoadable = Loadable({
  loader: () => import('../../Pages/Services/Services'),
  loading: Loading
})

const PageLoadable = Loadable({
  loader: () => import('../../Pages/CustomPage/CustomPage'),
  loading: Loading
})

const BlogPostLoadable = Loadable({
  loader: () => import('../../Pages/BlogPost/BlogPost'),
  loading: Loading
})

type Props = {}

const Router = (props: Props) => {
  return (
    <ScrollToTop>
      <Switch>
        <CQRoute exact path="/" component={HomeLoadable} delayHeader />

        <CQRoute exact path="/about" component={AboutLoadable} />

        <CQRoute exact path="/news" component={NewsLoadable} />

        <CQRoute exact path="/fundraisers" component={ServicesLoadable} />

        <CQRoute exact path="/post/:slug" component={BlogPostLoadable} />

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

export default Router
