import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

const Order = props => (
  <div className={styles.component}>
    <h2>Order View</h2>
    <h3>{props.match.params.id}</h3>
  </div>
);

Order.propTypes ={
  match: PropTypes.any,
};


export default Order;
