import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Layout from '/components/Layout/Layout';
import ApplyButton from '/components/JoinButton/ApplyButton';
import groupPositions from '/common/groupPositions';
import styles from '/pages/joinus/JoinUsPage.module.css';
import PageTop from '/components/PageTop/PageTop';
import Image from 'next/image';

const JoinUsPage = () => {
  const [modal, setModal] = useState({ group: null });

  // const PositionsButton = (props) => {
  //   return (
  //     <div className={styles.positionsButton}>
  //       <Button
  //         onClick={() =>
  //           setModal({
  //             group: props.group,
  //           })
  //         }
  //       >
  //         View positions
  //       </Button>
  //     </div>
  //   );
  // };

  return (
    <Layout
      url="https://www.shifthyperloop.com/joinus"
      title="Shift Hyperloop | Join us"
    >
      <PageTop
        title="Join Us"
        description={
          'On this page you will find our application from and a more detailed ' +
          'description of the positions we are offering this year. We are ' +
          'recruiting students from all fields of study regardless of year and ' +
          'prior knowledge. Working with Shift will give you experience that makes ' +
          'you attractive for your future employers. You will get a large network ' +
          'of new friends in the technical community at NTNU. A year at Shift will ' +
          'be educational and fun! Don’t hesitate to contact us if you have questions.' +
          '\n\n' +
          'Primarily Shift enrolls new members to the team two ' +
          'times a year. During the spring, the management and group leader positions are filled. The ' +
          'rest of the team positions are filled in august/september at the start ' +
          'of the semester. However, any student feeling they have something to ' +
          'contribute to the team should not hesitate to contact us any time of the ' +
          'year.'
        }
      />
      <ApplyButton />
      <br />
      <div className={styles.joinContainer}>
        <div className={styles.groups}>
          {groupPositions.map((group) => (
            <div className={styles.group} key={group.name}>
              <div className={styles.groupImage}>
                <Image
                  src={'/images/joinus/' + group.image}
                  alt={group.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className={styles.groupName}>{group.name}</p>
              <p className={styles.positionDescription}>{group.description}</p>
              <ApplyButton hideDeadline />
              {/* <PositionsButton group={group} /> */}
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
              <Image
                src={'/images/joinus/' + modal.group.image}
                alt={modal.group.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className={styles.positionDescription}>
              {modal.group.description}
            </p>
            {modal.group.positions.map((position) => (
              <div className={styles.position} key={position.name}>
                <h2 className={styles.positionName}>{position.name}</h2>
                <hr className={styles.blueLineThin} />
                <p className={styles.positionDescription}>
                  {position.description}
                </p>
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
