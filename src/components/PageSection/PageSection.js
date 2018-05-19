// @flow
import * as React from 'react'
import Background from '../Background/Background'
import style from './PageSection.scss'

type Props = {
  alignment?: 'left' | 'right',
  imgSrc?: string,
  overlay: string,
  contentWidth?: '1' | '2' | '3' | '4',
  renderContent: () => React.Node
}

class PageSection extends React.Component<Props> {
  render () {
    const width = this.props.contentWidth || '2'

    return (
      <div className={`row ${style.PageSection}`}>
        <Background
          imageSrc={this.props.imgSrc}
          customOverlayColor={this.props.overlay}
          imageOpacity={0.33}
        />
        <div
          style={{
            float: this.props.alignment === 'right' ? 'right' : 'left'
          }}
          className={`col1 col${width}-tablet ${style.content}`}>
          {this.props.renderContent()}
        </div>
      </div>
    )
  }
}

export default PageSection
