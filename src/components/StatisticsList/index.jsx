import StatisticsItem from '../StatisticsItem/index';
import css from './StaticsList.module.css';

const StatisticsList = userStatistic => {
  return (
    <ul className={css.statList}>
      {userStatistic.userStatistic.map(({ id, label, percentage }) => (
        <StatisticsItem key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
};

export default StatisticsList;
