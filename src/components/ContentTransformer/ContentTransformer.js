// @flow
import ReactHtmlParser from 'react-html-parser'

type Props = {
  content: string
}

const ContentTransformer = (props: Props) => {
  return ReactHtmlParser(props.content)
}

export default ContentTransformer
