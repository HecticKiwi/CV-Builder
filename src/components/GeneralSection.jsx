import React from 'react';

export default class GeneralSection extends React.Component {
  render() {
    return (
      <section className="general">
        <h2>General</h2>
        <label htmlFor="name">
          <span className="field-label">Name:</span>
          <input className="field-input" type="text" name="name" id="name" />
        </label>
        <label htmlFor="email">
          <span className="field-label">Email:</span>
          <input className="field-input" type="email" name="email" id="email" />
        </label>
        <label htmlFor="phone-number">
          <span className="field-label">Phone Number:</span>
          <input className="field-input" type="text" name="phone-number" id="phone-number" />
        </label>
      </section>
    );
  }
}
