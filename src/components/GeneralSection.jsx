import React from 'react';

export default class GeneralSection extends React.Component {
  render() {
    return (
      <section className="general">
        <label htmlFor="name">
          <span>Name:</span>
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="email">
          <span>Email:</span>
          <input type="email" name="nname" id="name" />
        </label>
        <label htmlFor="phone-number">
          <span>Phone Number:</span>
          <input type="phone-number" email="name" id="name" />
        </label>
      </section>
    );
  }
}
