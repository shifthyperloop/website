import { ButtonTitle, LinkButton } from '../Button';
import React from 'react';
import { APPLY_URL } from '../../common/constants';
import styles from './JoinButton.module.css';

const ApplyButton = () => {
  return (
    <>
      <div className={styles.applyButton}>
        <LinkButton href={APPLY_URL}>
          <ButtonTitle>Apply!</ButtonTitle>
          Deadline: September 3rd
        </LinkButton>
      </div>
    </>
  );
};

export default ApplyButton;
