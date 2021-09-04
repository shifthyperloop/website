import { ButtonTitle, LinkButton } from './Button';
import React from 'react';
import { APPLY_URL } from '../common/constants';

const ApplyButton = () => {
  return (
    <>
      <div className="apply-button">
        <LinkButton href={APPLY_URL}>
          <ButtonTitle>Apply!</ButtonTitle>
        </LinkButton>
      </div>
      <style jsx>
        {`
          .apply-button {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};

export default ApplyButton;
