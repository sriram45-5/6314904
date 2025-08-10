import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div style={{ border: '1px solid #ccc', padding: 10, margin: 10 }}>
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default Post;
