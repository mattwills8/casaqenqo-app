// @flow
import * as React from 'react'
import Services from '../../components/Services/Services'
import style from './Services.scss'

type Props = {}

const ServicesPage = (props: Props) => {
  return (
    <div className={style.ServicesPage}>
      <Services numberToShow={10} style={'2'} addHeaderMargin />
    </div>
  )
}

export default ServicesPage
