import React, { Component } from 'react';
import './styles/App.scss';
import uniqid from 'uniqid';
import GeneralSection from './components/GeneralSection';
import EducationalSection from './components/EducationalSection';
import ExperienceSection from './components/ExperienceSection';
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
      education: [{
        university: '',
        degree: '',
        from: '',
        to: '',
        key: uniqid(),
      }],
      experience: [{
        company: '',
        city: '',
        position: '',
        description: '',
        from: '',
        to: '',
        key: uniqid(),
      }],
    };

    this.generalChange = this.generalChange.bind(this);
    this.educationChange = this.educationChange.bind(this);
    this.addEducationItem = this.addEducationItem.bind(this);
    this.deleteEducationItem = this.deleteEducationItem.bind(this);
    this.experienceChange = this.experienceChange.bind(this);
    this.addExperienceItem = this.addExperienceItem.bind(this);
  }

  generalChange(e) {
    const { general } = this.state;
    const { name, value } = e.target;
    this.setState({ general: { ...general, [name]: value } });
  }

  educationChange(e, i) {
    const { education } = this.state;
    const { name, value } = e.target;
    const items = [...education];
    items[i] = { ...items[i] };
    items[i][name] = value;
    this.setState({ education: items });
  }

  addEducationItem() {
    const { education } = this.state;
    this.setState({
      education:
        [...education, {
          university: '',
          degree: '',
          from: '',
          to: '',
          key: uniqid(),
        },
        ],
    });
  }

  deleteEducationItem(i) {
    const { education } = this.state;
    this.setState({ education: education.filter((_, j) => i !== j) });
  }

  experienceChange(e, i) {
    const { experience } = this.state;
    const { name, value } = e.target;
    const items = [...experience];
    items[i] = { ...items[i] };
    items[i][name] = value;
    this.setState({ experience: items });
  }

  addExperienceItem() {
    const { experience } = this.state;
    this.setState({
      experience: [
        ...experience, {
          company: '',
          city: '',
          position: '',
          description: '',
          from: '',
          to: '',
          key: uniqid(),
        },
      ],
    });
  }

  render() {
    const { general, education, experience } = this.state;

    return (
      <div className="App">
        <header>
          <h1 className="main-header">CV Application</h1>
        </header>
        <main>
          <div className="form">
            <GeneralSection
              general={general}
              handleChange={this.generalChange}
            />
            <EducationalSection
              education={education}
              handleChange={this.educationChange}
              addItem={this.addEducationItem}
              deleteItem={this.deleteEducationItem}
            />
            <ExperienceSection
              experience={experience}
              handleChange={this.experienceChange}
              addItem={this.addExperienceItem}
            />
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
