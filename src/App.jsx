import React, { Component } from 'react';
import GeneralSection from './components/GeneralSection';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>CV Application</h1>
        </header>
        <main>
          <div className="form">
            <GeneralSection />
          </div>
          <div className="preview" />
        </main>
        <footer>
          <p>
            By
            {' '}
            <a href="https://hectickiwi.github.io/">HecticKiwi</a>
          </p>
        </footer>
      </div>
    );
  }
}
