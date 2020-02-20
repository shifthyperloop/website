import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Page = () => {
  const router = useRouter();

  return (
    <Layout
      url="https://www.shifthyperloop.com/joinus"
      title="Shift Hyperloop | Join us"
    >
      <h1 className="join">Join Us</h1>
      <hr />
      <h3>
        Primarily Shift enrolls new members to the team two times a year. In May
        the team leader and board positions are filled. The rest of the team
        positions are filled in august/september at the start of the semester.
        However, any student feeling they have something to contribute to the
        team should not hesitate to contact us any time of the year.
      </h3>
      <br />
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
                {/*<button>
                  <span>Learn more</span>
                </button>
                <button>Apply</button>*/}
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
                {/*<button>
                  <span>Learn more</span>
                </button>
                <button>Apply</button>*/}
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
                {/*<button>
                  <span>Learn more</span>
                </button>
                <div id="myModal" className="modal">
                  <div className="modal-content">
                    <span className="close">&times;</span>
                    <p>Some text in the Modal..</p>
                  </div>
                </div>
                <button>Apply</button>*/}
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
                {/*<button>
                  <span>Learn more</span>
                </button>
                <button>Apply</button>*/}
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
                Have a way with the soldering iron, or maybe you just think PCBs
                look cool? Whatever the reason, this is the group where you
                would design and make electronics to control, gather data and
                power the pod!
              </p>
              <div className="button-container">
                {/*<button>
                  <span>Learn more</span>
                </button>
                <button>Apply</button>*/}
              </div>
            </div>
          </div>
        </div>
        <p></p>
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
            margin: 15% auto; /* 15% from the top and centered */
            padding: 20px;
            border: 1px solid #888;
            width: 80%; /* Could be more or less, depending on screen size */
          }

          /* The Close Button */
          .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
          }

          .close:hover,
          .close:focus {
            color: black;
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
            background: #fff;
            border-radius: 100%;

            opacity: 0.7;
            background-image: linear-gradient(
              -270deg,
              rgba(255, 255, 255, 0) 0%,
              #ffffff 20%,
              #ffffff 80%,
              rgba(255, 255, 255, 0) 100%
            );
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
            background: #fff;
            border-radius: 100%;
            margin: 0 50px;
            filter: blur(1px);
            opacity: 0.05;
            background-image: linear-gradient(
              -270deg,
              rgba(255, 255, 255, 0) 0%,
              #ffffff 20%,
              #ffffff 80%,
              rgba(255, 255, 255, 0) 100%
            );
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
