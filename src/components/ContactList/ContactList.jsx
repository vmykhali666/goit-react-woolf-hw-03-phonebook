import React from 'react';
import styles from 'styles/ContactList.module.css';

export const ContactList = ({ contacts, onRemove }) => {
  return (
    <ul className={styles.contactsList}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.element}>
          {contact.name + ' : ' + contact.number}
          <button
            onClick={() => onRemove(contact.id)}
            className={styles.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
