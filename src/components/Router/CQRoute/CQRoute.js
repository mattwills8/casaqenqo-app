// @flow
import * as React from 'react'
import { Route } from 'react-router-dom'
import Header from '../../Header/Header'

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

export default CQRoute
