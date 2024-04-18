import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getPosts, createPosts, deletePosts, getCats, getPostsController } from './api/requests';

function App() {

  useEffect(() => {
    getPosts();
    getPostsController.abort();
    createPosts();
    deletePosts();
    getCats();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
