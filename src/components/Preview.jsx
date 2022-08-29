import React from 'react';
import s from '../styles/Preview.module.scss';

const emailSVG = require('../img/email.svg').default;
const phoneSVG = require('../img/phone.svg').default;

export default function Preview(props) {
  const { general, experience, education } = props;
  const {
    name, title, email, phoneNumber, description,
  } = general;

  const experienceItems = experience.map((item) => (
    <div className={s.item} key={item.key}>
      <div className={s.item__header}>
        <div>
          <span className={s.item__title}>{item.position}</span>
          <span className={s.item__company}>
            {' at '}
            {item.company}
          </span>
        </div>
        <div className={s.item__period}>
          {item.from}
          {' to '}
          {item.to}
        </div>
      </div>
      <p>{item.description}</p>
    </div>
  ));

  const educationItems = education.map((item) => (
    <div className={s.item} key={item.key}>
      <div className={s.item__header}>
        <div>
          <span className={s.item__title}>{item.degree}</span>
          <span className={s.item__company}>
            {' at '}
            {item.university}
          </span>
        </div>
        <div className={s.item__period}>
          {item.from}
          {' to '}
          {item.to}
        </div>
      </div>
    </div>
  ));

  return (
    <div className={s.Preview}>
      <header className={s.header}>
        <div>
          <h1>{name}</h1>
          <span className={s.title}>{title}</span>
        </div>
        <address className={s.contact}>
          <div className={s.email}>
            <img src={emailSVG} alt="" />
            <span>{email}</span>
          </div>
          <div className={s.phone}>
            <img src={phoneSVG} alt="" />
            <span>{phoneNumber}</span>
          </div>
        </address>
      </header>
      <main className={s.main}>
        <section className={s.description}>
          <p>{description}</p>
        </section>
        <section className={s.experience}>
          <h2 className={s.sectionTitle}>Experience</h2>
          {experienceItems}
        </section>
        <section className={s.experience}>
          <h2 className={s.sectionTitle}>Education</h2>
          {educationItems}
        </section>
      </main>
    </div>
  );
}
