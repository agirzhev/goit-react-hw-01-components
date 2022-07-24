import StatisticsList from '../StatisticsList/index';
import css from './Statistics.module.css';

const Statistics = ({ userStatistic }) => {
  const title = 'UPLOAD STATS';
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <StatisticsList userStatistic={userStatistic} />
    </section>
  );
};

export default Statistics;
