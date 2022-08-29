import React from 'react';
import s from '../styles/FormSection.module.scss';

export default function GeneralSection({ general, handleChange }) {
  const {
    name, title, email, phoneNumber, description,
  } = general;

  return (
    <section className={s.section}>
      <h2>General</h2>
      <label htmlFor="name">
        <span className={s.fieldLabel}>Name:</span>
        <input className={s.fieldInput} type="text" name="name" id="name" value={name} onChange={handleChange} />
      </label>
      <label htmlFor="title">
        <span className={s.fieldLabel}>Title:</span>
        <input className={s.fieldInput} type="text" name="title" id="title" value={title} onChange={handleChange} />
      </label>
      <label htmlFor="email">
        <span className={s.fieldLabel}>Email:</span>
        <input className={s.fieldInput} type="email" name="email" id="email" value={email} onChange={handleChange} />
      </label>
      <label htmlFor="phone-number">
        <span className={s.fieldLabel}>Phone Number:</span>
        <input className={s.fieldInput} type="text" name="phoneNumber" id="phone-number" value={phoneNumber} onChange={handleChange} />
      </label>
      <label htmlFor="description">
        <span className={s.fieldLabel}>Description:</span>
        <input className={s.fieldInput} type="text" name="description" id="description" value={description} onChange={handleChange} />
      </label>
    </section>
  );
}
