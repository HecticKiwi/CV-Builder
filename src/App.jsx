import React, { Component } from 'react';
import './styles/App.scss';
import GeneralSection from './components/GeneralSection';
import EducationalSection from './components/EducationalSection';
import Preview from './components/Preview';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        name: '',
        email: '',
        phoneNumber: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { general } = this.state;
    const { name, value } = e.target;
    this.setState({ general: { ...general, [name]: value } });
    console.log(general.name, general.email, general.phoneNumber);
  }

  render() {
    const { general } = this.state;

    return (
      <div className="App">
        <header>
          <h1 className="main-header">CV Application</h1>
        </header>
        <main>
          <div className="form">
            <GeneralSection
              name={general.name}
              email={general.email}
              phoneNumber={general.phoneNumber}
              handleChange={this.handleChange}
            />
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
