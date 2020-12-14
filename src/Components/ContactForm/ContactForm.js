import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

function ContactForm({ getFormData }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const formRefs = e.currentTarget;
    if (name.trim() === '' || number.trim() === '') {
      alert('Please fill all fields!');
      formRefs[formRefs.length - 1].blur();
      return;
    }
    getFormData(name.trim(), number.trim());
    setName('');
    setNumber('');
    formRefs[formRefs.length - 1].blur();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        <input
          className={styles.addField}
          type="text"
          value={name}
          name="name"
          placeholder="name"
          onChange={e => setName(e.currentTarget.value)}
        />
      </label>
      <label>
        <input
          className={styles.addField}
          type="text"
          value={number}
          name="number"
          placeholder="xxxx-xx-xx"
          onChange={e => setNumber(e.currentTarget.value)}
        />
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </label>
    </form>
  );
}

ContactForm.propTypes = {
  getFormData: PropTypes.func.isRequired,
};

export default ContactForm;
