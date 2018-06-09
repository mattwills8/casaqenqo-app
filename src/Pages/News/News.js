// @flow
import * as React from 'react'
import Posts from '../../components/Posts/Posts'
import TitleArea from '../../components/TitleArea/TitleArea'
import style from './News.scss'

type Props = {}

const News = (props: Props) => {
  return (
    <div className={style.newsPage}>
      <TitleArea
        title={'Latest News'}
        tagline={"Keep up to date with the latest from Casa Q'enqo"}
        align={'center'}
        marginBottom
      />
      <Posts numberToShow={10} />
    </div>
  )
}

export default News
