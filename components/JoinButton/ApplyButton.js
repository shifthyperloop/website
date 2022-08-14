import Button from '/components/Button/Button';
import React from 'react';
import { APPLY_URL, APPLY_DEADLINE } from '/common/constants';
import styles from './ApplyButton.module.css';

const ApplyButton = ({ hideDeadline }) => {
  return (
    <>
      <div className={styles.applyButton}>
        <Button href={APPLY_URL} newTab>
          <h3>Apply!</h3>
          {hideDeadline || APPLY_DEADLINE}
        </Button>
      </div>
    </>
  );
};

export default ApplyButton;
