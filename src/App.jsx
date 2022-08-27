import React, { useState } from 'react';
import './styles/App.scss';
import uniqid from 'uniqid';
import GeneralSection from './components/GeneralSection';
import EducationalSection from './components/EducationalSection';
import ExperienceSection from './components/ExperienceSection';
import Preview from './components/Preview';

export default function App() {
  const baseGeneral = {
    name: '',
    title: '',
    email: '',
    phoneNumber: '',
    description: '',
  };
  const baseEducation = [];
  const baseExperience = [];

  const [general, setGeneral] = useState(baseGeneral);
  const [education, setEducation] = useState(baseEducation);
  const [experience, setExperience] = useState(baseExperience);

  const reset = () => {
    setGeneral(baseGeneral);
    setEducation(baseEducation);
    setExperience(baseExperience);
  };

  const loadExample = () => {
    setGeneral({
      name: 'Aaron Heiss',
      title: 'Software Developer',
      email: 'heiss@outlook.com',
      phoneNumber: '(123) 456-7890',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra. Imperdiet proin fermentum leo vel orci. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Nullam vehicula ipsum a arcu cursus vitae congue mauris.',
    });
    setEducation([{
      university: 'University of Awesome',
      degree: 'Bachelor of Engineering',
      from: '2008-07',
      to: '2012-04',
      key: uniqid(),
    },
    {
      university: 'The Odin Project',
      degree: 'Full Stack Web Development',
      from: '2013-05',
      to: '2013-02',
      key: uniqid(),
    }]);
    setExperience([{
      company: 'Google',
      position: 'Senior Web Developer',
      description: 'Quisque sed facilisis tortor. Morbi posuere luctus risus sit amet mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      from: '2019-01',
      to: '2022-03',
      key: uniqid(),
    },
    {
      company: 'Netflix',
      position: 'Junior Web Developer',
      description: 'Nulla ornare varius pharetra. Duis eget lacinia nibh. Aliquam dapibus eleifend diam, non tristique leo venenatis et. Proin condimentum nisi nunc, sed pharetra lectus tempor ac.',
      from: '2016-05',
      to: '2018-09',
      key: uniqid(),
    },
    {
      company: 'Spotify',
      position: 'QA Tester',
      description: 'Suspendisse arcu magna, faucibus nec tempor a, fermentum sed justo. Vivamus quis venenatis felis.',
      from: '2015-06',
      to: '2016-01',
      key: uniqid(),
    }]);
  };

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
        <h1 className="main-header">CV Builder</h1>
      </header>
      <main className="app-main">
        <div className="form">
          <GeneralSection
            general={general}
            handleChange={changeGeneral}
          />
          <ExperienceSection
            experience={experience}
            handleChange={changeExperience}
            addItem={addExperience}
            deleteItem={deleteExperience}
          />
          <EducationalSection
            education={education}
            handleChange={changeEducation}
            addItem={addEducation}
            deleteItem={deleteEducation}
          />
          <div className="buttons">
            <button className="load-example" type="button" onClick={loadExample}>Load Example</button>
            <button className="reset" type="button" onClick={reset}>Reset</button>
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
