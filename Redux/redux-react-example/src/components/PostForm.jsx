import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/postAction';

class PostForm extends Component {
  submitHandler = e => {
    e.preventDefault();
    const post = {
      title: e.target.title.value,
      body: e.target.body.value
    };
    this.props.createPost(post);
  };

  render() {
    return (
      <>
        <h1>Add Post</h1>
        <form onSubmit={this.submitHandler}>
          <div>
            <label htmlFor='title'>Title</label>
            <br />
            <input name='title' type='text' />
          </div>
          <br />
          <div>
            <label htmlFor='body'>Body</label>
            <br />
            <input name='body' type='text' />
          </div>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </>
    );
  }
}

// not applying store to props so use null as first parameter insted fo mapStateToProps
export default connect(null, { createPost })(PostForm);
