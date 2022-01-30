import Button from '/components/Button/Button';
import React from 'react';
import { APPLY_URL, APPLY_DEADLINE } from '/common/constants';
import styles from './ApplyButton.module.css';

const ApplyButton = () => {

  // TODO: remove this line to enable ApplyButton next application period
  return (<></>);

  return (
    <>
      <div className={styles.applyButton}>
        <Button href={APPLY_URL}>
          <h3>Apply!</h3>
          { APPLY_DEADLINE && `Deadline: ${APPLY_DEADLINE}` }
        </Button>
      </div>
    </>
  );
};

export default ApplyButton;
