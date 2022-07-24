import Transaction from '../Transaction/index';
import css from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.transactionTh}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => (
        <Transaction key={id} type={type} amount={amount} currency={currency} />
      ))}
    </table>
  );
};

export default TransactionHistory;
