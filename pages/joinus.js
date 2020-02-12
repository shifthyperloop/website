import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Page = () => {
  const router = useRouter();

  return (
    <Layout
      url="https://www.shifthyperloop.com/about"
      title="Shift Hyperloop | About"
    >
      <h1 className="join">Join Us</h1>
      <div className="join-container">
        <div className="general-information"></div>
        <div className="groups">
          <div className="board group left">
            <div className="imagetest">
              <img className="board image" src="/stock/boss.jpg" />
            </div>
            <div className="group-info">
              <h3>Board</h3>
              <p>
                {' '}
                The board, the bosses, the guys and gals at the top. These are
                the people that look at the long term development of the team,
                and are responsible for the completion of the project. You will
                encounter a lot of responsibility.
              </p>
              <div className="button-container">
                <button></button>
                <button></button>
              </div>
            </div>
          </div>
          <div className="magnetics group right">
            <div className="group-info">
              <h3>Magnetics</h3>
              <p>
                {' '}
                Want to make something taken straight out of an sci-fi show? Or
                maybe you just want to engineer something that simply looks like
                magic? Look no further! In the magnetics group you will join the
                team in making the brand new magnetic levitation engine!
              </p>
              <div className="button-container">
                <button></button>
                <button></button>
              </div>
            </div>
            <div className="imagetest">
              <img className="board image" src="/stock/levitation.jpg" />
            </div>
          </div>
          <div className="relations group left">
            <div className="imagetest">
              <img className="relations image" src="/stock/designer.jpg"></img>
            </div>
            <div className="group-info">
              <h3>Design, Media, Web & Relations</h3>
              <p>
                {' '}
                As a member of the relations group you are a part of the team
                that this organization simply could not do without. You are the
                backone of this organization and we would rely on you to
                maintain a good relationship with our partners and sponsors. In
                addition to making promotional material such as videos,
                pictures, website and a lot more!
              </p>
              <div className="button-container">
                <button></button>
                <button></button>
              </div>
            </div>
          </div>
          <div className="mechanical group right">
            <div className="group-info">
              <h3>Mechanical</h3>
              <p>
                {' '}
                Ah, the member group that need no introduction, the mechanical
                group. As a part of the mechanical group you would be
                responsible for the mechanical parts like suspension, chassis,
                earo-elements among other things. You will learn how to
                optimize, design, produce, simulate and test your parts.This is
                engineering!
              </p>
              <div className="button-container">
                <button></button>
                <button></button>
              </div>
            </div>
            <div className="imagetest">
              <img className="mechanical image" src="/stock/engine.jpg"></img>
            </div>
          </div>
          <div className="electronics group left">
            <div className="imagetest">
              <img
                className="electronics image"
                src="/stock/electronics.jpg"
              ></img>
            </div>
            <div className="group-info">
              <h3>Electronics</h3>
              <p>
                {' '}
                Have a way with the soldering iron, or maybe you just thing PCBs
                look cool? Whatever the reason, this is the group where you
                would design and make electronics to control, gather data and
                power the pod!
              </p>
              <div className="button-container">
                <button></button>
                <button></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          body {
            text-align: center;
            width: 100%;
          }
          .join {
            text-align: center;
          }
          .imagetest {
            max-width: 600px;
            text-align: center;
          }
          .image {
            width: 80%;
            border-radius: 5.5px;
          }
          .left {
            padding: 20px 0px 20px;
            background-color: #0003;
          }
          .right {
            padding: 20px 0px 20px;
            background-color: #fff1;
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
          }
        `}
      </style>
    </Layout>
  );
};

export default Page;
