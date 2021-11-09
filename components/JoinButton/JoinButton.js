import Button from '../Button/Button';
import React from 'react';
import { APPLY_URL } from '../../common/constants';
import styles from './JoinButton.module.css';

const ApplyButton = () => {
  return (
    <>
      <div className={styles.applyButton}>
        <Button href={APPLY_URL}>
          <h3>Apply!</h3>
        </Button>
      </div>
    </>
  );
};

export default ApplyButton;
