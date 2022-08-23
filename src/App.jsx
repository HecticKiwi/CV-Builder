import React, { Component } from 'react';
import './styles/App.scss';
import GeneralSection from './components/GeneralSection';
import EducationalSection from './components/EducationalSection';
import Preview from './components/Preview';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="main-header">CV Application</h1>
        </header>
        <main>
          <div className="form">
            <GeneralSection />
            <EducationalSection />
          </div>
          <div className="preview">
            <Preview />
          </div>
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
