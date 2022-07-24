import ProTypes from 'prop-types';
import css from './StatisticsItem.module.css';

const StatisticsItem = ({ id, label, percentage }) => {
  return (
    <li className={css.item}>
      <span className={css.label}>{label} </span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsItem.prototype = {
  label: ProTypes.string.isRequired,
  percentage: ProTypes.number.isRequired,
};

export default StatisticsItem;
