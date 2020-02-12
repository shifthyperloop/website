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
              Shift is an independent non-profit organization founded in
              Trondheim by students from the Norwegian University of Science and
              Technology. The team currently consists of about 50 members from
              various programs.
            </p>
            <p>
              Our goal is to drive the hyperloop technology forward and be in
              the forefront of developing the transportation technologies of
              tomorrow. To achieve our goal we design and build our own pods to
              compete in The Hyperloop Pod Competition hosted by SpaceX.
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
              </div>
              <div className="member goal">
                <IoMdPerson size={35} className="icon" />
                <h4>Personal Development</h4>
              </div>
              <div className="competition goal">
                <GiTrophy size={35} className="icon" />
                <h4>Competiton</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="hyperloop-container">
          <h1> What is a hyperloop?</h1>
        </div>
      </div>
      <style jsx>
        {`
          .arrow {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translate(-50%, -50%);
            background-attachment: fixed;
          }

          .separate {
            display: flex;
            flex-direction: row;
            max-width: 1200px;
            margin: auto;
            justify-content: center;
            margin-top: ;
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
            max-width: 400px;
            width: 100%;
          }
          .parallax {
            background-image: url('/Shift1.png');

            height: 900px;
            background-attachment: fixed;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
          }
          .goals {
            height: 400px;
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
        `}
      </style>
    </Layout>
  );
};

export default Page;
