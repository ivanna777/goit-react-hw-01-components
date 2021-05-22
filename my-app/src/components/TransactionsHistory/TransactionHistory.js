import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Transaction.module.css";

const TransactionHistory = ({items}) => (
    <table className={styles.transactionHistory}>
  <thead>
    <tr className={styles.rowName}>
      <th className={styles.name}>Type</th>
      <th className={styles.name}>Amount</th>
      <th className={styles.name}>Currency</th>
    </tr>
  </thead>

  <tbody>
  {items.map((item) => (
    <tr>
      <td className={styles.transaction}>{item.type}</td>
      <td className={styles.transaction}>{item.amount}</td>
      <td className={styles.transaction}>{item.currency}</td>
    </tr>
    ))}
  </tbody>
</table>
);
TransactionHistory.propTypes = {
    item: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string,
          amount: PropTypes.number,
          currency:PropTypes.string,
        })
      ),
}

export default TransactionHistory;