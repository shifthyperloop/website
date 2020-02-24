import Layout from '../components/Layout';
import Link from 'next/link';
import { FaLeaf, FaAngleDown } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';
import { GiTrophy } from 'react-icons/gi';

const Page = () => {
  return (
    <Layout>
      <div className="container">
        <div className="parallax">
          <div className="arrow">
            <FaAngleDown size={35} />
          </div>
        </div>
        <div className="content">
          <div className="text">
            <h1>About Shift</h1>
            <p>
              Shift Hyperloop was officially founded 1. February 2019 by 10
              students with a common goal, developing a green and efficient
              transportation method, using the engineers of tomorrow.Taking
              inspiration from the many other student organisations at NTNU,
              Shift Hyperloop works on a 1-year cycle where each year we take up
              a completely new team that are tasked with designing and building
              a hyperloop pod to be tested at SpaceX Hyperloop Pod Competition
              in California. While Shift hyperloop is not directly connected to
              NTNU, we enjoy a close and mutually beneficial relationship with
              the university. While NTNU attracts and educates the sharpest
              minds in Norway, which Shift employs, Shift enriches the study
              course by giving students hands-on experience that is normally
              unavailable for engineering students. We also provide the
              university with bachelor- and master-theses for graduating
              students to write about.{' '}
              <p>
                Shift Hyperloop is primarily an organisation meant to teach and
                educate NTNU students, however we are also the youth that have
                to solve the massive challenges the world is facing. As such you
                can expect to see Shift advocating for green measures and
                further research on how we can combat climate change. Shift is
                an independent non-profit organization founded in Trondheim by
                students from the Norwegian University of Science and
                Technology. The team currently consists of about 50 members from
                various programs.
              </p>
            </p>
          </div>
        </div>
        <div className="goals">
          <div className="text">
            <h1 className="our-goals">Our Goals</h1>
            <div className="separate">
              <div className="enviorment goal">
                <FaLeaf size={35} className="icon" />
                <h4>Enviorment</h4>
                <p className="goal-text">
                  The world is facing massive challenges tied to climate change.
                  Transportation is a big contributer to CO2 emissions. With
                  hyperloop we can reduce those emissions along with
                  transportation time, both for humans and goods. One of our big
                  long term goals is also to look at hyperloop solutions in
                  Norway.
                </p>
              </div>
              <div className="member goal">
                <IoMdPerson size={35} className="icon" />
                <h4>Personal Development</h4>
                <p className="goal-text">
                  While lectures is a decent way to learn, all members at Shift
                  can attest to that nothing beats proper working experience. At
                  Shift we are big advocates for increasing the number of
                  technical student organisations at all universities. Our
                  members learn leadership, efficiency and how to work in a team
                  while also learning to be independend.
                </p>
              </div>
              <div className="competition goal">
                <GiTrophy size={35} className="icon" />
                <h4>Competiton</h4>
                <p className="goal-text">
                  Every year starting from 2015 SpaceX has held a hyperloop
                  competition in California. Shift is planning on competing this
                  year and our goal is to become one of the best student teams
                  in the world. As of now we are the only fully magnetic team.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hyperloop-container">
          <h1> What is a hyperloop?</h1>
          <div className="separate">
            <div className="flex-container">
              <div className="flex1">
                <img className="hyperloop-image" src="/hyperloopAlpha.jpg" />
              </div>
              <p className="text flex1">
                Hyperloop is a new transportation concept. The hyperloop was
                made popular by Elon Musk when he published his paper Hyperloop
                Alpha, but the concept is heavily based on Robert Goddards
                vactrain and have existed for a long time. The basis of the
                hyperloop concept is to move a vehicle, often referred to as a
                'pod', as fast and efficiently as possible along a track by
                minimizing drag and friction. This is achieved by using magnetic
                levitation to elevate the pod from the tracks and run the pod in
                a vacuum tube. Although many have estimated how fast the pod can
                travel under such conditions, no one really knows.
              </p>
            </div>
          </div>
        </div>
        <div className="competition-container">
          <h1> Hyperloop competition </h1>
          <div className="separate">
            <div className="flex1">
              <p>
                The Hyperloop Pod Competition is an annual competition sponsored
                by SpaceX from 2015–2019 in which a number of student and
                non-student teams participate to design—and for some, build—a
                subscale prototype transport vehicle in order to demonstrate
                technical feasibility of various aspects of the Hyperloop
                concept. The competitions have been open to participants
                globally, although all competitions and judging has occurred in
                the United States. The 2020 competition is planned on a much
                longer 10 km (6.2 mi) track, ten times as long as the 1 km track
                used in the first several years of the annual competition
              </p>
            </div>
            <iframe
              src="https://www.youtube-nocookie.com/embed/AO0sPME3j2s"
              frameBorder="0"
              className="flex1"
              allow="accelerometer; autoplay; gyroscope; "
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .competition-container {
            min-height: 400px;
            background-attachment: fixed;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            background-color: #fff2;
            box-shadow: 1px 0.3px 10px #000;
            text-align: center;
            padding-top: 30px;
            padding-bottom: 40px;
          }
          .arrow {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translate(-50%, -50%);
            background-attachment: fixed;
          }
          .flex1 {
            flex: 1 1 500px;
            margin: 50px;
            text-align: justify;
          }
          .hyperloop-image {
            width: 100%;
          }
          .separate {
            display: flex;
            flex-flow: row wrap;
            max-width: 1200px;
            margin: auto;
            justify-content: center;
            margin-top: ;
          }
          iframe {
            width: 50%;
          }

          .flex-container {
            display: flex;
            flex-flow: row wrap;
          }
          .icon {
            width: 50px;
          }
          h1 {
            margin-bottom: 30px;
            font-size: 40px;
          }
          .container {
            display: flex;
            flex-direction: column;
          }
          .goal {
            max-width: 350px;
            width: 100%;
            margin-left: 20px;
            margin-right: 20px;
          }
          .goal-text {
            text-align: justify;
          }
          .parallax {
            background-image: url('/Shift1.png');

            height: 900px;
            background-attachment: fixed;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
          }
          .text-container {
            max-width: 1200px;
            margin: auto;
          }
          .goals {
            min-height: 400px;
            background-attachment: fixed;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            background-color: #fff2;
            box-shadow: 1px 0.3px 10px #000;
            text-align: center;
            padding-top: 30px;
            padding-bottom: 40px;
          }

          .content,
          .hyperloop-container {
            background-color: #202020;

            box-shadow: 1px 0.3px 10px #000;
            text-align: center;
            padding-top: 30px;
            padding-bottom: 40px;
          }
          .text {
            max-width: 1200px;
            min-height: 120px;
            margin: auto;
          }
          @media (max-width: 640px) {
            .parallax {
              background-position: center;
              max-width: 100%;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default Page;
