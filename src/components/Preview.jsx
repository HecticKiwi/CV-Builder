import React from 'react';
import '../styles/Preview.scss';

const emailSVG = require('../img/email.svg').default;
const phoneSVG = require('../img/phone.svg').default;

export default function Preview(props) {
  const { general, experience, education } = props;
  const {
    name, title, email, phoneNumber, description,
  } = general;

  const experienceItems = experience.map((item) => (
    <div className="list-item" key={item.key}>
      <div className="list-item__header">
        <span>
          <span className="list-item__title">{item.position}</span>
          <span className="list-item__company">
            {' at '}
            {item.company}
          </span>
        </span>
        <span className="list-item__period">
          {item.from}
          {' to '}
          {item.to}
        </span>
      </div>
      <p>{item.description}</p>
    </div>
  ));

  const educationItems = education.map((item) => (
    <div className="list-item" key={item.key}>
      <div className="list-item__header">
        <span>
          <span className="list-item__title">{item.degree}</span>
          <span className="list-item__company">
            {' at '}
            {item.university}
          </span>
        </span>
        <span className="list-item__period">
          {item.from}
          {' to '}
          {item.to}
        </span>
      </div>
    </div>
  ));

  return (
    <div className="Preview">
      <header className="header">
        <div className="name-title">
          <h1>{name}</h1>
          <span className="title">{title}</span>
        </div>
        <address className="contact">
          <div className="email">
            <img src={emailSVG} alt="" />
            <span>{email}</span>
          </div>
          <div className="phone">
            <img src={phoneSVG} alt="" />
            <span>{phoneNumber}</span>
          </div>
        </address>
      </header>
      <main className="preview-main">
        <section className="description">
          <p>{description}</p>
        </section>
        <section className="experience">
          <h2 className="section-title">Experience</h2>
          {experienceItems}
        </section>
        <section className="experience">
          <h2 className="section-title">Education</h2>
          {educationItems}
        </section>
      </main>
    </div>
  );
}
