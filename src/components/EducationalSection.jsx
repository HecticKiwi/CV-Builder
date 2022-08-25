import React from 'react';

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
        <section className="form-item" key={key}>
          <label htmlFor="university">
            <span className="field-label">University:</span>
            <input className="field-input" type="text" name="university" id="university" value={university} onChange={(e) => handleChange(e, i)} />
          </label>
          <label htmlFor="degree">
            <span className="field-label">Degree:</span>
            <input className="field-input" type="text" name="degree" id="degree" value={degree} onChange={(e) => handleChange(e, i)} />
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
            <button className="delete" type="button" onClick={() => deleteItem(i)}>Delete</button>
            {i === education.length - 1 && <button className="add" type="button" onClick={addItem}>Add</button>}
          </div>
        </section>
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
    <section className="EducationalSection">
      <h2>Education</h2>
      {content}
    </section>
  );
}
