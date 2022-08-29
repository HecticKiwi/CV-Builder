import React from 'react';
import s from '../styles/FormSection.module.scss';

export default function EducationalSection({
  education, handleChange, addItem, deleteItem,
}) {
  let content;
  if (education.length > 0) {
    content = education.map((item, i) => {
      const {
        university, degree, from, to, key,
      } = item;

      return (
        <section className={s.formItem} key={key}>
          <label htmlFor="university">
            <span className={s.fieldLabel}>University:</span>
            <input className={s.fieldInput} type="text" name="university" id="university" value={university} onChange={(e) => handleChange(e, i)} />
          </label>
          <label htmlFor="degree">
            <span className={s.fieldLabel}>Degree:</span>
            <input className={s.fieldInput} type="text" name="degree" id="degree" value={degree} onChange={(e) => handleChange(e, i)} />
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
            <button className={s.delete} type="button" onClick={() => deleteItem(i)}>Delete</button>
            {i === education.length - 1 && <button className={s.add} type="button" onClick={addItem}>Add</button>}
          </div>
        </section>
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
      <h2>Education</h2>
      {content}
    </section>
  );
}
