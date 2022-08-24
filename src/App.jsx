import React, { useState } from 'react';
import './styles/App.scss';
import uniqid from 'uniqid';
import GeneralSection from './components/GeneralSection';
import EducationalSection from './components/EducationalSection';
import ExperienceSection from './components/ExperienceSection';
import Preview from './components/Preview';

export default function App() {
  const [general, setGeneral] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });
  const [education, setEducation] = useState([{
    university: '',
    degree: '',
    from: '',
    to: '',
    key: uniqid(),
  }]);
  const [experience, setExperience] = useState([{
    company: '',
    city: '',
    position: '',
    description: '',
    from: '',
    to: '',
    key: uniqid(),
  }]);

  const generalChange = (e) => {
    const { name, value } = e.target;
    setGeneral((prev) => ({ ...prev, [name]: value }));
  };

  const educationChange = (e, i) => {
    const { name, value } = e.target;
    setEducation((prev) => {
      const items = [...prev];
      items[i] = { ...items[i] };
      items[i][name] = value;
      return items;
    });
  };

  const addEducationItem = () => {
    setEducation((prev) => [...prev, {
      university: '',
      degree: '',
      from: '',
      to: '',
      key: uniqid(),
    }]);
  };

  const deleteEducationItem = (i) => {
    setEducation((prev) => [...prev].splice(i, 1));
  };

  const experienceChange = (e, i) => {
    const { name, value } = e.target;
    setExperience((prev) => {
      const items = [...prev];
      items[i] = { ...items[i] };
      items[i][name] = value;
      return items;
    });
  };

  const addExperienceItem = () => {
    setExperience((prev) => [...prev, {
      company: '',
      city: '',
      position: '',
      description: '',
      from: '',
      to: '',
      key: uniqid(),
    }]);
  };

  return (
    <div className="App">
      <header>
        <h1 className="main-header">CV Application</h1>
      </header>
      <main>
        <div className="form">
          <GeneralSection
            general={general}
            handleChange={generalChange}
          />
          <EducationalSection
            education={education}
            handleChange={educationChange}
            addItem={addEducationItem}
            deleteItem={deleteEducationItem}
          />
          <ExperienceSection
            experience={experience}
            handleChange={experienceChange}
            addItem={addExperienceItem}
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
