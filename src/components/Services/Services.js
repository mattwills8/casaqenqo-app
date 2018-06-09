// @flow
import * as React from 'react'
import type { Post } from '../../lib/flow-typed/post_types'
import ServiceApiClient from '../../api/service_client'
import { sortIntoRows } from '../../lib/cq_jsx'
import Loading from '../../components/Loading/Loading'
import ServiceStyle1 from './Style1/Style1.js'
// import Style2 from './Style2/Style2.js'
import style from './Services.scss'

type Props = {
  numberToShow: number,
  style: '1' | '2',
  addHeaderMargin?: boolean
}

type State = {
  services: Array<Post>,
  loading: boolean
}

class Services extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = { services: [], loading: true }
  }

  componentDidMount () {
    this.getServices()
  }

  renderServices () {
    if (!this.state.services.length) {
      return
    }

    return this.state.services.map((service, index) => {
      return <ServiceStyle1 key={index} service={service} />
    })
  }

  render () {
    console.log(this.state)

    if (this.state.loading) {
      return <Loading />
    }
    return (
      <div
        className={`row ${style.services} ${
          this.props.addHeaderMargin ? style.addHeaderMargin : ''
        }`}>
        {this.renderServices()}
      </div>
    )
  }

  async getServices () {
    this.setState({ loading: true })

    try {
      const response = await ServiceApiClient.getLatest(
        1,
        this.props.numberToShow
      )

      console.log(response)

      this.setState({ services: response.data, loading: false })
    } catch (error) {
      console.log(error)
      this.setState({ services: [], loading: false })
    }
  }
}

export default Services
