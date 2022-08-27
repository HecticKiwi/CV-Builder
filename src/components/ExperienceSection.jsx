import React from 'react';
import '../styles/FormSection.scss';

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
        <div className="form-item" key={key}>
          <label htmlFor="company">
            <span className="field-label">Company:</span>
            <input type="text" name="company" id="company" className="field-input" value={company} onChange={(e) => handleChange(e, i)} />
          </label>
          <label htmlFor="position">
            <span className="field-label">Position:</span>
            <input type="text" name="position" id="position" className="field-input" value={position} onChange={(e) => handleChange(e, i)} />
          </label>
          <label htmlFor="description">
            <span className="field-label">Description:</span>
            <input type="text" name="description" id="description" className="field-input" value={description} onChange={(e) => handleChange(e, i)} />
          </label>
          <div className="period">
            <label htmlFor="from">
              <span className="field-label">From:</span>
              <input className="field-input" type="date" name="from" id="from" value={from} onChange={(e) => handleChange(e, i)} />
            </label>
            <label htmlFor="to">
              <span className="field-label field-label--to">To:</span>
              <input className="field-input" type="date" name="to" id="to" value={to} onChange={(e) => handleChange(e, i)} />
            </label>
          </div>
          <div className="button-group">
            <button className="delete" type="button" onClick={deleteItem}>Delete</button>
            {i === experience.length - 1 && <button className="add" type="button" onClick={addItem}>Add</button>}
          </div>
        </div>
      );
    });
  } else {
    content = (
      <div className="button-group">
        <button className="add" type="button" onClick={addItem}>Add</button>
      </div>
    );
  }

  return (
    <section className="form-section">
      <h2>Experience</h2>
      {content}
    </section>
  );
}
