import React from 'react';
import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => (
  <table className={styles['transaction-history']}>
    <thead className={styles.tableHead}>
      <tr>
        <th className={styles.tableCell}>Type</th>
        <th className={styles.tableCell}>Amount</th>
        <th className={styles.tableCell}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr key={item.id} className={styles.tableBody}>
          <td className={styles.tableCell}>{item.type}</td>
          <td className={styles.tableCell}>{item.amount}</td>
          <td className={styles.tableCell}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};
export default TransactionHistory;
