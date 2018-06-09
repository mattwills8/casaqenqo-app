// @flow
import * as React from 'react'
import Services from '../../components/Services/Services'
import TitleArea from '../../components/TitleArea/TitleArea'
import style from './Services.scss'

type Props = {}

const ServicesPage = (props: Props) => {
  return (
    <div className={style.ServicesPage}>
      <TitleArea
        title={'Fundraisers'}
        tagline={
          'Explore Peru whilst helping us raise the funds to support homeless children in Cusco'
        }
        align={'center'}
        marginBottom
      />
      <Services numberToShow={10} style={'2'} />
    </div>
  )
}

export default ServicesPage
