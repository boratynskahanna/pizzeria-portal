import React from 'react';
import PropTypes from 'prop-types';
import styles from './Event.module.scss';

const Event = props => (
  <div className={styles.component}>
    <h2>Event View</h2>
    <h3>{props.match.params.id}</h3>
  </div>
);

Event.propTypes ={
  match: PropTypes.any,
};


export default Event;