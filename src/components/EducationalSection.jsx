import React, { Component } from 'react';

export default class EducationalSection extends Component {
  render() {
    const { education, handleChange, addItem } = this.props;

    const educationItems = education.map((item, i) => {
      const {
        university, degree, from, to, key,
      } = item;

      return (
        <div className="education-item" key={key}>
          <label htmlFor="university">
            <span className="field-label">University:</span>
            <input className="field-input" type="text" name="university" id="university" value={university} onChange={(e) => handleChange(e, i)} />
          </label>
          <label htmlFor="degree">
            <span className="field-label">Degree:</span>
            <input className="field-input" type="text" name="degree" id="degree" value={degree} onChange={(e) => handleChange(e, i)} />
          </label>
          <div className="study-period">
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
            <button className="delete" type="button">Delete</button>
            {i === education.length - 1 && <button className="add" type="button" onClick={addItem}>Add</button>}
          </div>
        </div>
      );
    });

    return (
      <section className="EducationalSection">
        <h2>Education</h2>
        {educationItems}
      </section>
    );
  }
}
