import * as React from 'react';

import styles from './blockTitle.module.scss';

const blockTitle = ({ children, type }) => {
  return (
    <div>
      <div className={styles[type]}>
        <h2>
          { children }
        </h2>
      </div>
    </div>
  );
};

blockTitle.defaultProps = {type: styles.title__left};

export default blockTitle;