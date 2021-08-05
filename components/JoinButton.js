import { ButtonTitle, LinkButton } from './Button';
import React from 'react';

const ApplyButton = () => {
  return(
    <>
      <div className="apply-button">
        <LinkButton>
          <ButtonTitle>Apply!</ButtonTitle>
          Application form coming soon
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
  )
};

export default ApplyButton;