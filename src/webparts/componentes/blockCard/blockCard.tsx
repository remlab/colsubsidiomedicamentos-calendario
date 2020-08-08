import * as React from 'react';

import styles from './blockCard.module.scss';

const BlockCard = ({ children, margin, padding }) => {
  return (
    <div>
      <div className={styles.card} style={{margin: `${margin}rem`, padding: `${padding}rem`}}>
          { children }
      </div>
    </div>
  );
};

BlockCard.defaultProps = {margin: 1, padding: 1};

export default BlockCard;


