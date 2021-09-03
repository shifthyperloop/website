import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { IoMdClose } from 'react-icons/io';
import { SmallButton } from '../../components/Button';
import ApplyButton from '../../components/JoinButton/JoinButton';
import groups from '../../common/groupPositions';
import styles from './JoinUsPage.module.css';
import PageTop from '../../components/PageTop/PageTop';

const JoinUsPage = () => {
  const router = useRouter();
  const [modal, setModal] = useState({ group: null });

  const PositionsButton = (props) => {
    return (
      <div className={styles.buttonContainer}>
        <SmallButton
          onClick={() =>
            setModal({
              group: props.group,
            })
          }
        >
          View available positions
        </SmallButton>
        <style jsx>
          {`
            .button-container {
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
          `}
        </style>
      </div>
    );
  };

  return (
    <Layout
      url="https://www.shifthyperloop.com/joinus"
      title="Shift Hyperloop | Join us"
    >
      <PageTop
        title="Join Us"
        description="
          On this page you will find our application from and a more detailed
          description of the positions we are offering this year. We are
          recruiting students from all fields of study regardless of year and
          prior knowledge. Working with Shift will give you experience that makes
          you attractive for your future employers. You will get a large network
          of new friends in the technical community at NTNU. A year at Shift will
          be educational and fun! Admission for the team 2022 is open and you
          should check if something is for you! Don’t hesitate to contact us if
          you have questions.
        "
        /* Primarily Shift enrolls new members to the team two
        times a year. In May the team leader and board positions are filled. The
        rest of the team positions are filled in august/september at the start
        of the semester. However, any student feeling they have something to
        contribute to the team should not hesitate to contact us any time of the
       year. */
      />
      <ApplyButton />
      <br />
      <div className={styles.joinContainer}>
        <h2 className={styles.center}>Groups:</h2>
        <div className={styles.groups}>
          {groups
            .map((group) => (
              <div className={styles.group}>
                <img src={'/images/joinus/' + group.image} alt={group.name} />
                <p className={styles.groupName}>{group.name}</p>
                <PositionsButton group={group} />
              </div>
            ))}
        </div>
      </div>
      {modal.group && (
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <a
              className={styles.closeButton}
              onClick={() => setModal({ group: null })}
            >
              <IoMdClose />
            </a>
            <h1 className={styles.modalGroupName}>{modal.group.name}</h1>
            <hr className={styles.blueLineThick} />
            <div className={styles.modalImageWrapper}>
              <img
                src={'/images/joinus/' + modal.group.image}
                alt={modal.group.name}
              />
            </div>
            {modal.group.positions.map((position) => (
              <div className={styles.position}>
                <h2 className={styles.positionName}>{position.name}</h2>
                <hr className={styles.blueLineThin} />
                <p className={styles.positionDescription}>{position.description}</p>
              </div>
            ))}
            <ApplyButton />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default JoinUsPage;
