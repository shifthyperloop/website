import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Page = () => {
  const router = useRouter();

  return (
    <Layout
      url="https://www.shifthyperloop.com/about"
      title="Shift Hyperloop | About"
    >
      <h1>{router.query.title}</h1>
      <div className="about">
        <div className="col-lg-5">
          <center>
            <img src="img/email_signatur.jpg" className="email" alt="" />
          </center>
        </div>
        <div className="col-lg-6">
          <h2>About Shift Hyperloop</h2>
          <br />
          <p>
            Shift is an independent non-profit organization founded in Trondheim
            by students from the Norwegian University of Science and Technology.
            Our goal is to drive the hyperloop technology forward and be in the
            forefront of developing the transportation technologies of tomorrow.
            To achieve our goal we design and build our own pods to compete in
            The Hyperloop Pod Competition hosted by SpaceX.
          </p>
        </div>
        <hr />
        <br />
        <p>
          If you don't know what hyperloop is or you want to get a feel for the
          competition, we encourage you to watch this; (You can thank us later)
        </p>
        <center>
          <iframe
            width="1100"
            height="620"
            src="https://www.youtube-nocookie.com/embed/AO0sPME3j2s"
            frameBorder="0"
            allow="accelerometer; autoplay; gyroscope; "
            allowFullScreen
          ></iframe>
        </center>
        <br />
        <hr />
        <style jsx global>
          {`
            body {
              text-align: center;
              width: 100%;
            }
            .email {
              max-width: 65%;
            }
            .about {
              max-width: 1200px;
              display: flex;
              flex-flow: column nowrap;
              margin: auto;
            }
          `}
        </style>
      </div>
    </Layout>
  );
};

export default Page;
