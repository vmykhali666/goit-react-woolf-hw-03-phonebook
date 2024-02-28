import React from 'react';
import clsx from 'clsx';
import styles from 'styles/Filter.module.css';

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <input
      type="text"
      className={clsx(styles.input)}
      name="search"
      value={filter}
      onChange={onFilterChange}
      placeholder="Search by name"
    />
  );
};
