import Layout from '../components/Layout/Layout';
import { FaLeaf } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';
import { GiTrophy } from 'react-icons/gi';
import TopImage from '../components/TopImage/TopImage';
import styles from './HomePage.module.css';
import ImageTextSection from '../components/page/home/ImageSection/ImageSection';
import TextSection from '../components/page/home/TextSection/TextSection';
import Timeline from '../components/Timeline/Timeline';
import timelineEvents from '../common/timelineEvents';

const HomePage = () => {
  return (
    <Layout>
      <div>
        <TopImage
          image="/images/homePage/PodTop.jpg"
          brightness={1}
          fixedOnMobile={false}
          joinButton
        />
      </div>
      <ImageTextSection
        src="/images/homePage/valkyrje.png"
        alt="Shift hyperloop pod Meili"
        imageRight
      >
        <TextSection
          title="ABOUT SHIFT"
          moreUrl="/about"
          text={`
            Shift Hyperloop is an independent non-profit organization founded by
            students at the Norwegian University of Science and Technology (NTNU)
            in Trondheim. We operate on a 1-year cycle where each year we enlist 
            a new team that are tasked with designing and building a hyperloop pod
            that will compete in the European Hyperloop Week (EHW).
          `}
        />
      </ImageTextSection>
      <ImageTextSection
        src="/images/homePage/hyperloopAlpha.jpg"
        alt="Hyperloop"
        link="/abouthyperloop"
      >
        <TextSection
          title="WHAT IS HYPERLOOP?"
          moreUrl="/abouthyperloop"
          text={`
            Hyperloop is a technology where a vehicle, called a "pod", moves
            through a tube with low air pressure by levitating over the tracks.
            This minimizes the friction losses, something that makes the
            technology very energy efficient. The technology will make it possible
            to transport humans and cargo at speeds of about 1000 km/h. That makes
            it possible to travel a distance equal to Oslo-Trondheim in under half
            an hour!
          `}
        />
      </ImageTextSection>
      <ImageTextSection
        src="/images/homePage/EHW.jpg"
        alt="European Hyperloop Week"
        imageRight
      >
        <TextSection
          title="HYPERLOOP COMPETITION"
          text={`
            European Hyperloop Week is the most important competition 
            for Shift. In EHW we get to showcase our hyperloop prototype and 
            prove ourselves in competition against other hyperloop teams. 
            It’s hosted a different place in Europe every year, and in 2022 
            it will be hosted in the Netherlands.
          `}
        />
      </ImageTextSection>
      <div className={styles.goals}>
        <div className={styles.text}>
          <h1 className={styles.fadein}>Our Goals</h1>
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
                technical student organisations at all universities. Our members
                learn leadership, efficiency and how to work in a team while
                also learning to be independent.
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
                Shift&apos;s goal is to become one of the best student teams in
                the world.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className={styles.timelineHeader}>A year of Shift</h1>
      <Timeline events={timelineEvents} />
    </Layout>
  );
};

export default HomePage;
