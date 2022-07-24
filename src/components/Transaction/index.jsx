import ProTypes from 'prop-types';
import css from './Transaction.module.css'

const Transaction = ({ id, type, amount, currency }) => {

  return (
    <tbody className={css.transactionTb}>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
};

Transaction.prototype = {
  type: ProTypes.string.isRequired,
  amount: ProTypes.number.isRequired,
  currency: ProTypes.string.isRequired,
};

export default Transaction;
