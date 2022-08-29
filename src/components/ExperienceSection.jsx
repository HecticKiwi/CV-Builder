import React from 'react';
import s from '../styles/FormSection.module.scss';

export default function ExperienceSection({
  experience, handleChange, addItem, deleteItem,
}) {
  let content;
  if (experience.length > 0) {
    content = experience.map((item, i) => {
      const {
        company, position, description, from, to, key,
      } = item;

      return (
        <div className={s.formItem} key={key}>
          <label htmlFor="company">
            <span className={s.fieldLabel}>Company:</span>
            <input type="text" name="company" id="company" className={s.fieldInput} value={company} onChange={(e) => handleChange(e, i)} />
          </label>
          <label htmlFor="position">
            <span className={s.fieldLabel}>Position:</span>
            <input type="text" name="position" id="position" className={s.fieldInput} value={position} onChange={(e) => handleChange(e, i)} />
          </label>
          <label htmlFor="description">
            <span className={s.fieldLabel}>Description:</span>
            <input type="text" name="description" id="description" className={s.fieldInput} value={description} onChange={(e) => handleChange(e, i)} />
          </label>
          <div className={s.period}>
            <label htmlFor="from">
              <span className={s.fieldLabel}>From:</span>
              <input className={s.fieldInput} type="month" name="from" id="from" value={from} onChange={(e) => handleChange(e, i)} />
            </label>
            <label htmlFor="to">
              <span className={`${s.fieldLabel} ${s.fieldLabel_to}`}>To:</span>
              <input className={s.fieldInput} type="month" name="to" id="to" value={to} onChange={(e) => handleChange(e, i)} />
            </label>
          </div>
          <div className={s.buttonGroup}>
            <button className={s.delete} type="button" onClick={deleteItem}>Delete</button>
            {i === experience.length - 1 && <button className={s.add} type="button" onClick={addItem}>Add</button>}
          </div>
        </div>
      );
    });
  } else {
    content = (
      <div className={s.buttonGroup}>
        <button className={s.add} type="button" onClick={addItem}>Add</button>
      </div>
    );
  }

  return (
    <section className={s.section}>
      <h2>Experience</h2>
      {content}
    </section>
  );
}
