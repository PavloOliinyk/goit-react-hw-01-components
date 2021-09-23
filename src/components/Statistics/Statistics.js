import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title = 'Upload stats', stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={s.item}
            style={{ backgroundColor: setRandomBgColor() }}
          >
            <span className="label">{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

function setRandomBgColor() {
  return `rgb(${Math.round(Math.random() * (255 - 0) + 1)}, ${Math.round(
    Math.random() * (255 - 0) + 1,
  )}, ${Math.round(Math.random() * (255 - 0) + 1)})`;
}

export default Statistics;
