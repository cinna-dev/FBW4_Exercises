import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';

import PropTypes from 'prop-types';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    //nextProps == props incomming
    nextProps.posts.unshift(nextProps.newPost);
  }

  render() {
    const postItems = this.props.posts.map((
      post //usee parantheses when returning whole package // when useing braces it needs a return
    ) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <>
        <h1>Posts</h1>
        {postItems}
      </>
    );
  }
}

Posts.protoType = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

// add the (state) from redux to the (props) of Posts.jsx
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});
//adds  mapStateToProps and fetchPosts to props
export default connect(mapStateToProps, { fetchPosts })(Posts); //cennect the store state and fetchpost to Posts

// Boilerplate
