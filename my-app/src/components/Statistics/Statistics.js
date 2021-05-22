import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Statistics.module.css";

function randColor() {
  var r = Math.floor(Math.random() * (256)),
      g = Math.floor(Math.random() * (256)),
      b = Math.floor(Math.random() * (256));
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

const Statistics = ({title, stats}) => (
    <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.statList}>
        {stats.map(
          item =>
            <li className={styles.item} key={item.id} style={{ backgroundColor: randColor() }}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.percentage}>{item.percentage + ' %'}</span>
            </li>
            
        )}
            
  </ul>
</section>
)

Statistics.defaultProps = {
    title: null,
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        percentage: PropTypes.number,
      })
    ),
  };

export default Statistics;