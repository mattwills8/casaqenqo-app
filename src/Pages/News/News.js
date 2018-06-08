// @flow
import * as React from 'react'
import Posts from '../../components/Posts/Posts'
import style from './News.scss'

type Props = {}

const News = (props: Props) => {
  return (
    <div className={style.newsPage}>
      <Posts numberToShow={10} addHeaderMargin />
    </div>
  )
}

export default News
