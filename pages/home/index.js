import Layout from '../../components/Layout/Layout';
import { FaLeaf } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';
import { GiTrophy } from 'react-icons/gi';
import TopImage from '../../components/TopImage/TopImage';
import styles from './Page.module.css';

const Page = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div>
          <TopImage
            image="/images/homePage/topImage.png"
            brightness={1}
            fixedOnMobile={false}
            joinButton={true}
            infoMeetingInfo={true}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.text}>
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
        <div className={styles.goals}>
          <div className={styles.text}>
            <h1>Our Goals</h1>
            <div className={styles.separate}>
              <div className={`${styles.goal}`}>
                <FaLeaf size={35} className={styles.icon} />
                <h4>Environment</h4>
                <p className={styles.goalText}>
                  The world is facing massive challenges tied to climate change.
                  Transportation is a big contributor to CO₂ emissions. With
                  hyperloop we can reduce those emissions along with
                  transportation time, both for humans and goods. One of our big
                  long-term goals is to evaluate the implementation of hyperloop
                  in Norway.
                </p>
              </div>
              <div className={styles.goal}>
                <IoMdPerson size={35} className={styles.icon} />
                <h4>Personal Development</h4>
                <p className={styles.goalText}>
                  While lectures are a decent way to learn, all members at Shift
                  can attest to that nothing beats proper working experience. At
                  Shift we are big advocates for increasing the number of
                  technical student organisations at all universities. Our
                  members learn leadership, efficiency and how to work in a team
                  while also learning to be independent.
                </p>
              </div>
              <div className={styles.goal}>
                <GiTrophy size={35} className={styles.icon} />
                <h4>Competition</h4>
                <p className={styles.goalText}>
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
        <div className={styles.hyperloopContainer}>
          <h1> What is a hyperloop?</h1>
          <div className={styles.separate}>
            <div className={styles.flexContainer}>
              <div className={styles.flex1}>
                <img
                  className={styles.hyperloopImage}
                  src="/images/homePage/hyperloopAlpha.jpg"
                  alt="Hyperloop alpha sketch"
                />
              </div>
              <p className={`${styles.text} ${styles.flex1}`}>
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
        <div className={styles.competitionContainer}>
          <h1> Hyperloop competition </h1>
          <div className={styles.separate}>
            <div className={styles.flex1}>
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
              className={`${styles.flex1} ${styles.video}`}
              allow="accelerometer; autoplay; gyroscope; "
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
