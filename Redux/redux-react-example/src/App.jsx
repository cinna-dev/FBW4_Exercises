import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from './components/Posts.jsx';
import PostForm from './components/PostForm.jsx';

// nmp i redux react-redux redux-thunk
import { Provider } from 'react-redux'; // includes nested components
import store from './store';

class App extends Component {
  render() {
    //redux needs all components be wrapped in the Provider
    return (
      <Provider store={store}>
        {' '}
        {/* adds store as an attribute // makes the store visibil for all components */}
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h2>Welcome to Redux-React example</h2>
          </header>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
