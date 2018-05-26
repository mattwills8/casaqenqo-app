// @flow
import * as React from 'react'
import type { Match } from 'react-router-dom'
import type { Page } from '../../lib/flow-typed/post_types'
import ReactHtmlParser from 'react-html-parser'
import PageApiClient from '../../api/page_client'
import Hero from '../../components/Hero/Hero'
import Loading from '../../components/Loading/Loading'
import PageSection from '../../components/PageSection/PageSection'
import { green } from '../../scss/partials/_variables.scss'
import style from './CustomPage.scss'

type Props = {
  match: Match
}

type State = {
  page: Page,
  loading: boolean
}

class CustomPage extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = { page: {}, loading: true }
  }

  componentDidMount () {
    this.getPage()
  }

  componentDidUpdate (prevProps: Props, prevState: State) {
    if (this.props.match.params.slug !== prevProps.match.params.slug) {
      this.getPage()
    }
  }

  render () {
    console.log(this.state)

    if (this.state.loading || !this.state.page) {
      return <Loading />
    }
    return (
      <React.Fragment>
        <Hero
          title={this.state.page.title && this.state.page.title.rendered}
          copy={this.state.page.excerpt.rendered || ''}
          imgSrc={this.state.page['featured_image'] || ''}
          overlay={
            (this.state.page['post-meta-fields']['page_overlay'] &&
              this.state.page['post-meta-fields']['page_overlay'][0]) ||
            green
          }
        />
        <PageSection
          contentWidth={'1'}
          renderContent={() => {
            return (
              <div className={style.content}>
                {ReactHtmlParser(this.state.page.content.rendered || '')}
              </div>
            )
          }}
        />
      </React.Fragment>
    )
  }

  async getPage () {
    if (!this.props.match.params.slug) {
      return
    }

    this.setState({ loading: true })

    try {
      const slug = this.props.match.params.slug
      const response = await PageApiClient.getBySlug(slug)

      console.log(response)

      this.setState({ page: response.data[0], loading: false })
    } catch (error) {
      console.log(error)
    }
  }
}

export default CustomPage
