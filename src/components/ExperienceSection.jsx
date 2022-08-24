import React, { Component } from 'react';

export default class ExperienceSection extends Component {
  render() {
    const {
      experience, handleChange, addItem,
    } = this.props;

    const experienceItems = experience.map((item, i) => {
      const {
        company, city, position, description, from, to, key,
      } = item;

      return (
        <div className="experience-item" key={key}>
          <label htmlFor="company">
            <span className="field-label">Company:</span>
            <input type="text" name="company" id="company" className="field-input" value={company} onChange={(e) => handleChange(e, i)} />
          </label>
          <label htmlFor="city">
            <span className="field-label">City:</span>
            <input type="text" name="city" id="city" className="field-input" value={city} onChange={(e) => handleChange(e, i)} />
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
            <button className="delete" type="button">Delete</button>
            {i === experience.length - 1 && <button className="add" type="button" onClick={addItem}>Add</button>}
          </div>
        </div>
      );
    });

    return (
      <section className="ExperienceSection">
        <h2>Experience</h2>
        {experienceItems}
      </section>
    );
  }
}