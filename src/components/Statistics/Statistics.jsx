import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';
import randomColor from './randomColor';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles['stat-list']}>
      {stats.map(stat => (
        <li
          key={stat.id}
          className={styles.item}
          style={{ backgroundColor: randomColor() }}
        >
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};

export default Statistics;
