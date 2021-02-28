import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { IoMdClose } from 'react-icons/io';
import { APPLY_URL } from "../common/constants";
import { LinkButton, Button } from '../components/Button';

const Page = () => {
  const router = useRouter();
  const [modal, setModal] = useState({ title: '' });

  const PositionsButton = (props) => {
    return <div className="button-container">
      <Button
        onClick={() =>
          setModal({
            title: props.modalTitle,
          })
        }
      >
        View available positions
      </Button>
      <style jsx>
        {`
        .button-container {
          display: flex;
          justify-content: center;
        }
      `}
      </style>
    </div>
  }

  return (
    <Layout
      url="https://www.shifthyperloop.com/joinus"
      title="Shift Hyperloop | Join us"
    >
      <h1 className="join">Join Us</h1>
      <hr />
      <h3 className="join-description">
        On this page you will find our application form and a more detailed description 
        of the leader positions we are offering for the Team 2022. We are recruiting students 
        from all fields of study regardless of year and prior knowledge. Working with Shift will 
        give you experience that makes you attractive for your future employers. You will get a 
        large network of new friends in the technical community at NTNU. A year at Shift will be 
        educational and fun! Admission for the team 2022 is open and you should check if something 
        is for you! Don’t hesitate to contact us if you have questions.
        {/* Primarily Shift enrolls new members to the team two
        times a year. In May the team leader and board positions are filled. The
        rest of the team positions are filled in august/september at the start
        of the semester. However, any student feeling they have something to
        contribute to the team should not hesitate to contact us any time of the
       year. */}
      </h3>
      <div className="apply-button">
        <LinkButton href={APPLY_URL}>
          Apply now!
        </LinkButton>
      </div>
      <br />
      <div className="join-container">
        <div className="general-information"></div>
        <div className="groups">
          <div className="board group left">
            <div className="imagetest mirror">
              <img className="board image" src="/stock/boss.jpg" />
            </div>
            <div className="group-info">
              <h3>Management</h3>
              <p>
                {' '}
                Management is responsible for deciding strategy for the whole organization. 
                You will hold a close contact with the group leaders to be sure that 
                organisation will come to the goals that were set. 
              </p>
              <PositionsButton modalTitle="Management positions" />
            </div>
          </div>
          <div className="board group right">
            <div className="group-info">
              <h3>Group Leaders</h3>
              <p>
                {' '}
                Group Leaders carries responsibility for the progress and makes 
                sure that the organization follows the guidelines set by the board. 
                They also do the administrative work for the organization. 
                The most important task of the leaders is to encourage and support Shifts members when needed. 
              </p>
              <PositionsButton modalTitle="Group Leaders" />
            </div>
            <div className="imagetest">
              <img className="board image" src="/stock/boss.jpg" />
            </div>
          </div>
        </div>
        <p></p>
        <div className="modal-container">
          <div id="modal-content">
            <a
              className="close-button"
              onClick={() => setModal({ title: '', description: '' })}
            >
              <IoMdClose />
            </a>
            <h1 className="group-title">{modal.title}</h1>
            <hr id="blue-line-thick" />
            {modal.title == 'Management positions' ? (
              <>
                <h2 id="undergroup-title"> CEO - Chief Executive Officer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                As CEO you will be the project manager and head of the organization’s
                administration, supported by four board members and a large
                group of mentors. Your main objective is to inspire the
                organization and lead us to the SpaceX competition in
                California and European Hyperloop Week in Spain.
                </p>
                <h2 id="undergroup-title"> CFO / Deputy Project Manager</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                As CFO you will handle the finance within the organization. 
                This includes budgeting and accounting. You will also 
                be the deputy project manager and lead the organization 
                together with the CEO and the rest of the board. 
                Exactly what your role as deputy project manager will be, 
                is something you and the rest of the leaders for 
                Team 2022 will figure out together. 
                </p>
                <h2 id="undergroup-title"> CCO - Chief Creative Officer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                As CCO you will be developing a strategy for how
                the Hyperloop concept could be implemented in Norway. 
                You will work closely with the group leader of concept, 
                and represent the group at the board. 
                </p>
                <h2 id="undergroup-title"> CMO - Chief Marketing Officer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                As CMO you are in charge of all marketing matters within the organization. 
                You will be developing the marketing strategy for the whole organization 
                along with the board. As CMO you will work closely with the 
                relations group leader to make sure that the marketing 
                strategy will be implemented as effectively as possible. 
                </p>
                <h2 id="undergroup-title"> CTO - Chief Technical Officer</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                As CTO you will oversee all the technical groups in Shift. 
                As either a mechanical or electronics CTO you will coordinate 
                with the group leaders within your field, and help them overcome challenges. 
                You will represent the technical part of Shift at the board 
                and help develop the organization.
                </p>
              </>
            ) : null}
            {modal.title == 'Group Leaders' ? (
              <>
                <h2 id="undergroup-title">Group Leader Concept</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  As head of the concept group you will administer and organize the 
                  day to day business within the group. You will help the group members 
                  with tasks regarding the implementation of Hyperloop, such as city 
                  planning, design and station, and road planning.
                </p>

                <h2 id="undergroup-title">Relations Lead</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  You will be the head of the relations group which consists of marketing 
                  coordinators, graphic designers, web developers and more. During the year 
                  you will be contacting sponsors, host seminars and social events, promote 
                  Shift to the world, as well as you will organize and administer the relations group.
                </p>
                
                <h2 id="undergroup-title">Software Lead</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  The software lead will manage the groups progress and accomplishments, 
                  however the software lead is much more involved in the day to day 
                  development work compared to the other groups.
                </p>
                
                <h2 id="undergroup-title">Electronics Lead</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  The electronics lead will manage the groups progress and accomplishments. 
                  It is a unique opportunity to work with multiple systems and guide your members 
                  through the most crucial challenges. Relevant experience with software development 
                  and PCB design is valued, but not a requirement.
                </p>

                <h2 id="undergroup-title">Battery Lead</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  The battery lead will manage the groups progress and accomplishments. The position 
                  is a unique opportunity to work with multiple systems and guide your members 
                  through the most crucial challenges.
                </p>

                <h2 id="undergroup-title">Powertrain Lead</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  The powertrain lead will manage the groups progress and accomplishments. It is a unique 
                  opportunity to manage a group responsible for one of the most defining principles for 
                  the hyperloop concept; magnetic propulsion.
                </p>

                <h2 id="undergroup-title">Levitation Lead</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  The levitation lead will manage the groups progress and accomplishments. The levitation 
                  system involves magnets and is the reason why Hyperloop is unique. The position offers 
                  a unique opportunity to learn about maglev and how it can be used for hyperloop applications.
                </p>

                <h2 id="undergroup-title">Mechanical Lead</h2>
                <hr id="blue-line-thin" />
                <p id="undergroup-description">
                  The mechanical lead will manage the groups progress and accomplishments. It is an unique 
                  opportunity to guide your members through the most crucial challenges. Relevant experience 
                  with for example CAD, simulations or with production is an advantage.
                </p>
              </>
            ) : null}
            {modal.title != 'Research & Development' ? (
              <div className="apply-button">
                <LinkButton href={APPLY_URL}>
                  Apply now!
                </LinkButton>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          body {
            text-align: center;
            width: 100%;
          }
          .group-title {
            color: #fff9;
            text-align: center;
          }
          .apply-button {
            display: flex;
            justify-content: center;
          }
          .group-description {
            color: black;
          }
          .join {
            text-align: center;
          }
          .imagetest {
            max-width: 600px;
            text-align: center;
          }
          .modal-container {
            display: ${modal.title != '' ? 'block' : 'none'};
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

          .mirror {
            transform: scaleX(-1);
          }

          #blue-line-thick {
            width: 80%;
            border-width: 2px;
            border-style: solid;
            border-radius: 2.5px;
            border-color: #0080c9;
            margin-bottom: 75px;
          }
          #blue-line-thin {
            width: 100%;
            border-width: 0.3px;
            border-style: solid;
            border-radius: 2.5px;
            border-color: #0080c9;
            margin-bottom: 10px;
          }
          
          #undergroup-title {
            margin-top: 40px;
          }

          #undergroup-title,
          #undergroup-description {
            color: #fff9;
          }

          #undergroup-description {
            display: flex;
            flex-flow: row wrap;
            margin-bottom: 20px;
          }

          /* Modal Content/Box */
          #modal-content {
            background-color: #161616;
            margin: 15% auto; /* 15% from the top and centered */
            padding: 20px;
            border: 1px solid #888;
            width: 80%; /* Could be more or less, depending on screen size */
          }

          .bullet-point {
            margin: 10px 10px;
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
          button {
            cursor: pointer;
            position: relative;
            padding: 0.25rem 0.25rem;
            line-height: 1rem;
            font-size: 15px;
            font-weight: 600;

            border: 1px solid #012880;
            background-image: linear-gradient(
              -180deg,
              #0092d9 0%,
              #005e95 100%
            );
          }
          .join-description {
            margin-bottom: 20px;
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
            background-color: #fefefe;
            text-align: center;
            margin: 15% auto; /* 15% from the top and centered */
            padding: 20px;
            border: 1px solid #888;
            width: 60%; /* Could be more or less, depending on screen size */
          }

          /* The Close Button */
          .close-button {
            color: #FFFFFF;
            float: right;
            font-size: 28px;
          }

          .close-button:hover,
          .close:focus {
            color: #aaa;
            text-decoration: none;
            cursor: pointer;
          }

          button span {
            color: transparent;
            background-image: linear-gradient(0deg, #fff 0%, #fefafd 100%);
            -webkit-background-clip: text;
            background-clip: text;
            filter: drop-shadow(0 2px 2px hsla(290, 100%, 20%, 1));
          }

          button::before {
            content: '';
            display: block;
            height: 0.25rem;
            position: absolute;
            top: 0.5rem;
            left: 50%;
            transform: translateX(-50%);
            width: calc(100% - 7.5rem);

            border-radius: 100%;

            opacity: 0.7;
          }

          button::after {
            content: '';
            display: block;
            height: 0.25rem;
            position: absolute;
            bottom: 0.75rem;
            left: 50%;
            transform: translateX(-50%);
            width: calc(100% - 7.5rem);

            border-radius: 100%;
            margin: 0 50px;
            filter: blur(1px);
            opacity: 0.05;
          }
          h3 {
            text-align: center;
            max-width: 1200px;
            margin: auto;
          }
          .image {
            width: 80%;
            border-radius: 5.5px;
          }
          .left {
            padding: 20px 0px 20px;
            background-color: #202020;
            box-shadow: 1px 0.3px 10px #000;
            padding-right: 40px;
          }
          .right {
            padding: 20px 0px 20px;
            background-color: #fff2;
            box-shadow: 1px 0.3px 10px #000;
            padding-left: 40px;
          }
          .join-container {
            max-width: 1200px;
            margin: auto;
          }
          .Join-us {
            margin-top: -18px;
            height: 800px;
            background-color: red;
            align-content: center;
          }
          .group {
            display: flex;
            flex-direction: row;
          }
          .groups {
            margin: auto;
          }
          .imagetest,
          .group-info {
            width: 50%;
            text-align: center;
            margin: auto;
          }
        `}
      </style>
    </Layout>
  );
};

export default Page;
