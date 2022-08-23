import React, { Component } from 'react';

export default class EducationalSection extends Component {
  render() {
    return (
      <section className="EducationalSection">
        <h2>Education</h2>
        <label htmlFor="company-name">
          <span className="field-label">University:</span>
          <input className="field-input" type="text" name="company-name" id="company-name" />
        </label>
        <label htmlFor="degree">
          <span className="field-label">Degree:</span>
          <input className="field-input" type="text" name="degree" id="degree" />
        </label>
        <div className="study-period">
          <label htmlFor="from">
            <span className="field-label">From:</span>
            <input className="field-input" type="date" name="from" id="from" />
          </label>
          <label htmlFor="to">
            <span className="field-label field-label--to">To:</span>
            <input className="field-input" type="date" name="to" id="to" />
          </label>
        </div>
        <div className="button-group">
          <button className="delete" type="button">Delete</button>
          <button className="add" type="button">Add</button>
        </div>
      </section>
    );
  }
}
