// @flow
import * as React from 'react'
import Hero from '../../components/Hero/Hero'
import { green } from '../../scss/partials/_variables.scss'

type Props = {}

class Home extends React.Component<Props> {
  render () {
    return (
      <Hero
        title={"Casa Q'enqo"}
        copy={'Help us help homeless children in Cusco'}
        imgSrc={
          'http://localhost/casaqenqo/wp-content/uploads/2018/05/IMG_1316.jpg'
        }
        overlay={green}
      />
    )
  }
}

export default Home
