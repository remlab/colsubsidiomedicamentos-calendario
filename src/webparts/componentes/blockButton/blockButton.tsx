import * as React from 'react';

import styles from './blockButton.module.scss';

export default ({ children, data_url, margin }) => {
  return (
    <div>
      <div className={styles.cta} style={{margin: `${margin}rem`}}>
        <a href={data_url}> {children} </a>
      </div>
    </div>
  );
};