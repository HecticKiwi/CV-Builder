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
    title: '',
    email: '',
    phoneNumber: '',
    description: '',
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
    position: '',
    description: '',
    from: '',
    to: '',
    key: uniqid(),
  }]);

  const changeGeneral = (e) => {
    const { name, value } = e.target;
    setGeneral((prev) => ({ ...prev, [name]: value }));
  };

  const changeEducation = (e, i) => {
    const { name, value } = e.target;
    setEducation((prev) => {
      const items = [...prev];
      items[i] = { ...items[i] };
      items[i][name] = value;
      return items;
    });
  };

  const addEducation = () => {
    setEducation((prev) => [...prev, {
      university: '',
      degree: '',
      from: '',
      to: '',
      key: uniqid(),
    }]);
  };

  const deleteEducation = (i) => {
    setEducation((prev) => {
      const items = [...prev];
      items.splice(i, 1);
      return items;
    });
  };

  const changeExperience = (e, i) => {
    const { name, value } = e.target;
    setExperience((prev) => {
      const items = [...prev];
      items[i] = { ...items[i] };
      items[i][name] = value;
      return items;
    });
  };

  const addExperience = () => {
    setExperience((prev) => [...prev, {
      company: '',
      position: '',
      description: '',
      from: '',
      to: '',
      key: uniqid(),
    }]);
  };

  const deleteExperience = (i) => {
    setExperience((prev) => {
      const items = [...prev];
      items.splice(i, 1);
      return items;
    });
  };

  return (
    <div className="App">
      <header>
        <h1 className="main-header">CV Application</h1>
      </header>
      <main className="app-main">
        <div className="form">
          <GeneralSection
            general={general}
            handleChange={changeGeneral}
          />
          <EducationalSection
            education={education}
            handleChange={changeEducation}
            addItem={addEducation}
            deleteItem={deleteEducation}
          />
          <ExperienceSection
            experience={experience}
            handleChange={changeExperience}
            addItem={addExperience}
            deleteItem={deleteExperience}
          />
          <div className="buttons">
            <button className="export-to-pdf" type="button">Export to PDF</button>
            <button className="load-example" type="button">Load Example</button>
            <button className="reset" type="button">Reset</button>
          </div>
        </div>
        <Preview
          general={general}
          experience={experience}
          education={education}
        />
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
