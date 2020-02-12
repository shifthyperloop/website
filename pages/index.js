import Layout from '../components/Layout';
import Link from 'next/link';
import { FaLeaf } from 'react-icons/fa';

const Page = () => {
  return (
    <Layout>
      <div className="container">
        <div className="parallax"></div>
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
            <h1>Our Goals</h1>
            <div className="separate">
              <div className="enviorment">
                <FaLeaf />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
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
            height: 900px;
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

          .content {
            background-color: #202020;
            box-shadow: 1px 0.3px 10px #000;
            text-align: center;
            padding-top: 30px;
            padding-bottom: 40px;
          }
          .text {
            max-width: 1200px;
            margin: auto;
          }
        `}
      </style>
    </Layout>
  );
};

export default Page;
