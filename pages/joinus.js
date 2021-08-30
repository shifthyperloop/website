import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { IoMdClose } from 'react-icons/io';
import { SmallButton } from '../components/Button';
import ApplyButton from '../components/JoinButton';
import groups from '../common/groupPositions';

const Page = () => {
  const router = useRouter();
  const [modal, setModal] = useState({ group: null });

  const PositionsButton = (props) => {
    return (
      <div className="button-container">
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
      <h1 className="center">Join Us</h1>
      <hr />
      <h3 className="page-info">
        On this page you will find our application from and a more detailed
        description of the positions we are offering this year. We are
        recruiting students from all fields of study regardless of year and
        prior knowledge. Working with Shift will give you experience that makes
        you attractive for your future employers. You will get a large network
        of new friends in the technical community at NTNU. A year at Shift will
        be educational and fun! Admission for the team 2021 is open and you
        should check if something is for you! Don’t hesitate to contact us if
        you have questions.
        {/* Primarily Shift enrolls new members to the team two
        times a year. In May the team leader and board positions are filled. The
        rest of the team positions are filled in august/september at the start
        of the semester. However, any student feeling they have something to
        contribute to the team should not hesitate to contact us any time of the
       year. */}
      </h3>
      <div className="info-meeting-info">
        <a className="center" href="https://fb.me/e/19LY89XOf">
          Learn more at our info meeting September 2nd!
        </a>
      </div>
      <ApplyButton />
      <br />
      <div className="join-container">
        <h2 className="center">Groups:</h2>
        <div className="groups">
          {groups
            .map((group) => (
              <div className="group">
                <img src={'/images/joinus/' + group.image} alt={group.name} />
                <p className="group-name">{group.name}</p>
                <PositionsButton group={group} />
              </div>
            ))}
        </div>
      </div>
      {modal.group && (
        <div className="modal-container">
          <div className="modal-content">
            <a
              className="close-button"
              onClick={() => setModal({ group: null })}
            >
              <IoMdClose />
            </a>
            <h1 className="modal-group-name">{modal.group.name}</h1>
            <hr className="blue-line-thick" />
            <div className="modal-image-wrapper">
              <img
                src={'/images/joinus/' + modal.group.image}
                alt={modal.group.name}
              />
            </div>
            {modal.group.positions.map((position) => (
              <div className="position">
                <h2 className="position-name">{position.name}</h2>
                <hr className="blue-line-thin" />
                <p className="position-description">{position.description}</p>
              </div>
            ))}
            <ApplyButton />
          </div>
        </div>
      )}

      <style jsx>
        {`
          .info-meeting-info {
            margin: 10px auto;
            text-align: center;
            font-size: 1.2em;
          }

          body {
            text-align: center;
            width: 100%;
          }
          .group-name {
            font-weight: bold;
            font-size: 1.1em;
          }
          .center {
            text-align: center;
          }
          .modal-container {
            display: ${modal.title !== '' ? 'block' : 'none'};
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0, 0, 0); /* Fallback color */
            background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
          }

          .blue-line-thick {
            width: 80%;
            border-width: 2px;
            border-style: solid;
            border-radius: 2.5px;
            border-color: #0080c9;
            margin-bottom: 10px;
          }
          .blue-line-thin {
            width: 100%;
            border-width: 0.3px;
            border-style: solid;
            border-radius: 2.5px;
            border-color: #0080c9;
            margin-bottom: 10px;
          }

          .modal-group-name {
            text-align: center;
          }

          .modal-image-wrapper {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .modal-image-wrapper > img {
            width: 80%;
            max-width: 400px;
            height: 200px;
            object-fit: cover;
          }

          .position-name {
            margin-top: 40px;
          }

          .position-description {
            color: #fff9;
            display: flex;
            flex-flow: row wrap;
            margin-bottom: 20px;
            white-space: pre-line;
          }
          hr {
            width: 80%;
            border-width: 1px;
            border-style: solid;
            border-radius: 2.8px;
            border-color: #fff5;
            margin-top: -10px;
            margin-bottom: 40px;
          }
          .page-info {
            padding: 10px;
          }
          .modal {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0, 0, 0); /* Fallback color */
            background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
          }

          /* Modal Content/Box */
          .modal-content {
            background-color: #161616;
            margin: 100px auto; /* 100px from the top and centered */
            padding: 20px;
            border: 1px solid #888;
            width: 80%; /* Could be more or less, depending on screen size */
          }

          /* The Close Button */
          .close-button {
            color: #ffffff;
            float: right;
            font-size: 28px;
          }

          .close-button:hover,
          .close:focus {
            color: #aaa;
            text-decoration: none;
            cursor: pointer;
          }

          h3 {
            text-align: center;
            max-width: 1200px;
            margin: auto;
          }
          .join-container {
            max-width: 1200px;
            margin: auto;
          }
          .groups {
            margin: 20px auto;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .group {
            margin: 15px;
            display: flex;
            background: #333;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 1px 0.3px 10px #000;
          }
          .group > img {
            height: 140px;
            width: 100%;
            object-fit: cover;
          }
          .group > p {
            text-align: center;
          }
          @media (max-width: 900px) {
            .groups {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 600px) {
            .groups {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default Page;
