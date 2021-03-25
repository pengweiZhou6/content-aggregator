import React from 'react';
import ContentCard from '../components/ContentCard'

const ContentStyle = {
  marginTop: 30,
  width: '100%'
}

class Content extends React.Component {
  render() {
    return (
      <div className="Content" style={ContentStyle}>
        {this.props.posts && this.props.posts.map(post =>
          <ContentCard key={post.id} {...post} 
          />)}
      </div>
    );
  }
}

export default Content;
