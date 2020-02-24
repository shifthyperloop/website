import Layout from '../components/Layout';
import Link from 'next/link';

export default function Blog() {
  return (
    <Layout>
      <div className="container">
        <div className="news-container">
          <img className="news-image" src="/high-speed-train.jpg" />
          <h1 className="title">
            CHINA ANNOUNCES PLANS FOR ‘FLYING TRAIN’ THAT CAN TRAVEL UP TO
            2,500MPH
          </h1>
        </div>
        <div className="text">
          <h2>
            Scientists are conducting research to develop the next generation of
            trains that can ‘fly on the ground’
          </h2>
          <p>
            The state-owned China Aerospace Science and Technology Corporation
            (CASC) has claimed it plans to develop the next generation of
            trains, which can travel at speeds of up to 2,500mph. Liu Shiquan, a
            deputy general manager at CASC, said their scientists would be
            looking to develop the super-fast trains of the future that could
            “fly on the ground”.
          </p>
          <img src="hyperloopconcept.jpg"></img>
          <p>
            “The corporation has built rich experience and accumulated
            technological know-how through major projects, and it has the
            capabilities in simulation, modelling and experimentation for
            large-scale projects, as well as the world-class design capability
            for supersonic aircraft, all of which lay the important ground for
            the super-fast train project,” state-owned website The Paper wrote
            of CASC’s plans. With connections to China’s defence ministry, CASC
            has already been involved in developing satellites, rockets and
            missiles; now plans are afoot to turn its futuristic tech closer to
            home. Read more Musk 'given approval' to build 760mph Hyperloop
            between NYC and DC China already has the largest network of high
            speed trains in the world, and is obviously keen to continue
            outstripping the competition. CASC officials have said they will
            work with more than 20 other research institutes, both domestic and
            international, in the quest to create the proposed 2,500mph trains.
            Although the ‘flying train’ may be a way off becoming a reality,
            Chinese scientists also announced plans for an intercity train that
            can travel at more than 600mph – clearly designed to compete with
            American Canadian inventor Elon Musk’s hyperloop concept, which uses
            air instead of wheels and could result in speeds of more than
            700mph. No date has been announced for when the hyperloop will be
            fully up and running, but earlier this week Musk shared footage of a
            test pod accelerating to 200mph in a few seconds as part of a
            competition to design pods for the high-speed system.
          </p>
        </div>
        <style jsx global>{`
          .text {
            max-width: 1200px;
            margin: 0 auto;
          }
          .container {
            position: center;
            align-content: center;
            justify-content: center;
            margin: 0 auto;
          }
          .news-container {
            position: relative;
            text-align: center;
            color: white;
            width: 100%;
            height: 100%;
            display: inline-flex;
            text-align: center;
            justify-content: center;
          }
          .news-image {
            width: 100%;
            height: 800px;
            object-fit: cover;
          }
          .news-container::before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
          }
          .title {
            position: absolute;
            font: 5em Georgia, Serif;
            bottom: -200px;
            left: 50%;
            transform: translate(-50%, -50%);
            text-shadow: 2px 2px #000;
            overflow: hidden;
          }
          h2,
          p {
            text-align: center;
          }
          img {
            margin: 0 auto;
            text-align: center;
            display: block;
          }
        `}</style>
      </div>
    </Layout>
  );
}
