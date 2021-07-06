import React from 'react';
import styles from './Booking.module.scss';
import PropTypes from 'prop-types';

const Booking = props => (
  <div className={styles.component}>
    <h2>Booking View</h2>
    <h3>{props.match.params.id}</h3>
  </div>
);

Booking.propTypes ={
  match: PropTypes.any,
};

export default Booking;