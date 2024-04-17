import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getPosts, createPosts, deletePosts } from './api/requests';

function App() {

  useEffect(() => {
    //getPosts.then(res => console.log(res)).catch(err => console.log(err));
    getPosts();
    createPosts();
    deletePosts();
    //console.log(getPosts());
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
