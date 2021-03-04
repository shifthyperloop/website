import Layout from '../components/Layout';
import Link from 'next/link';
import { FaLeaf } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';
import { GiTrophy } from 'react-icons/gi';
import TopImage from '../components/TopImage';

const Page = () => {
  return (
    <Layout>
      <div className="container">
        <div>
          <TopImage
            image="./homePage.png"
            brightness={1}
            fixedOnMobile={false}
            after={false}
            joinbutton={true}
            backgroundPosition={"center 30%"}
          />
        </div>

        <div className="content">
          <div className="text">
            <h1>About Shift</h1>
            <p>
              Shift Hyperloop is an independent non-profit organization founded
              in Trondheim by students from the Norwegian University of Science
              and Technology (NTNU). The team currently consists of about 80
              members from various fields of study. Shift was officially founded
              1. February 2019 by 10 students with the goal of developing a
              green and efficient transportation method, using the engineers of
              tomorrow. Shift Hyperloop takes inspiration from many of the other
              student organisations at NTNU. As such Shift Hyperloop operates on
              a 1-year cycle where each year we enlist a completely new team
              that are tasked with designing and building a hyperloop pod. In
              2021 Shift Hyperloop will test out our pod for the first time in
              the European Hyperloop Week in Spain, and we hope to test out the
              pod in SpaceX Hyperloop Pod Competition in the future.
            </p>
            <p>
              Shift Hyperloop enjoys a close and mutually beneficial
              relationship with NTNU. Shift consists entirely of NTNU students
              and gives them an opportunity to have a hands-on experience that
              is normally unavailable for engineering students. We also provide
              the university with potential bachelor- and master-theses for
              graduating students.
            </p>
            <p>
              Shift Hyperloop is primarily an organisation meant to teach and
              educate NTNU students, however we are also students who seek to
              help solve the massive challenges the world is facing. As such you
              can expect to see Shift advocating for green measures and further
              research on how we can combat climate change.
            </p>
          </div>
        </div>
        <div className="goals">
          <div className="text">
            <h1 className="our-goals">Our Goals</h1>
            <div className="separate">
              <div className="environment goal">
                <FaLeaf size={35} className="icon" />
                <h4>Environment</h4>
                <p className="goal-text">
                  The world is facing massive challenges tied to climate change.
                  Transportation is a big contributor to CO₂ emissions. With
                  hyperloop we can reduce those emissions along with
                  transportation time, both for humans and goods. One of our big
                  long-term goals is to evaluate the implementation of hyperloop
                  in Norway.
                </p>
              </div>
              <div className="member goal">
                <IoMdPerson size={35} className="icon" />
                <h4>Personal Development</h4>
                <p className="goal-text">
                  While lectures are a decent way to learn, all members at Shift
                  can attest to that nothing beats proper working experience. At
                  Shift we are big advocates for increasing the number of
                  technical student organisations at all universities. Our
                  members learn leadership, efficiency and how to work in a team
                  while also learning to be independent.
                </p>
              </div>
              <div className="competition goal">
                <GiTrophy size={35} className="icon" />
                <h4>Competition</h4>
                <p className="goal-text">
                  In 2021 European Hyperloop Week will be hosted for the first
                  time in Valencia, Spain where Shift will participate. In the
                  future we hope to compete in the annual SpaceX Hyperloop Pod
                  Competition which has been hosted every year since 2015.
                  Shift's goal is to become one of the best student teams in the
                  world.
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
                <img className="hyperloop-image" src="/hyperloopAlpha.jpg" alt="Hyperloop alpha sketch" />
              </div>
              <p className="text flex1">
                Hyperloop is a new transportation concept. The hyperloop was
                made popular by Elon Musk when he published his paper Hyperloop
                Alpha, but the concept is heavily based on Robert Goddards
                vactrain and has existed for a long time. The basis of the
                hyperloop concept is to move a vehicle, often referred to as a
                'pod', as fast and efficiently as possible along a track by
                minimizing resistance to movement. This is achieved by using
                magnetic levitation to elevate the pod from the tracks and run
                the pod in a vacuum tube. Although many have estimated how fast
                the pod can travel under such conditions, no one really knows.
                In 2020 Virgin Hyperloop underwent the world's first passenger
                test using Hyperloop technology.
              </p>
            </div>
          </div>
        </div>
        <div className="competition-container">
          <h1> Hyperloop competition </h1>
          <div className="separate">
            <div className="flex1">
              <h2>European Hyperloop Week:</h2>
              <p>
                In 2021 the European Hyperloop Week will be hosted for the very
                first time. European Hyperloop week aims to create a platform
                where student organisations get together to change the idea of
                Hyperloop to a more forward-looking approach. Teams get to
                compete by presenting their pods and system designs and get
                challenged to more ambitious goals. The track at EHW will be 160
                meters long.
              </p>
              <h2>SpaceX Hyperloop Pod Competition:</h2>
              <p>
                The Hyperloop Pod Competition is an annual competition arranged
                by SpaceX since 2015 in which a number of student and
                non-student teams participate to design and for some to build a
                subscale prototype transport vehicle in order to demonstrate
                technical feasibility of various aspects of the Hyperloop
                concept. The competition is open to participants globally,
                however it is always hosted in the United States.
              </p>
            </div>
            <iframe
              src="https://www.youtube-nocookie.com/embed/AO0sPME3j2s"
              frameBorder="0"
              className="flex1"
              allow="accelerometer; autoplay; gyroscope; "
              allowFullScreen
            />
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
            max-width: 330px;
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

            /**/
            box-shadow: 1px 0.3px 10px #000; /**/
            text-align: center;
            padding-top: 30px;
            padding-bottom: 40px;
          }
          .text {
            max-width: 1200px;
            min-height: 120px;
            margin: auto;
            padding: 1.5em;
            box-sizing: border-box;
          }
          @media (max-width: 640px) {
            .parallax {
              background-position: center;
              max-width: 100%;
            }
          }

          .join-buttons {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-flow: row nowrap;
            width: 100%;
            max-width: 1200px;
          }
        `}
      </style>
    </Layout>
  );
};

export default Page;
