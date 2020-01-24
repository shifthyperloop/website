import withLayout from '../components/Layout';
import Layout from '../components/Layout';

const Page = () => <p>This is the about page</p>;

export default function About() {
  return (
    <Layout>
      <div className="image-container">
        <img className="woodwork" src="/woodshop.jpg" />
        <h1 className="headline">Pod version 0.8</h1>
      </div>
      <div className="information">
        <h2>Exciting things will show up here throughout the spring</h2>
      </div>
      <style jsx global>
        {`
          h1,
          h2 {
            text-align: center;
          }
          .image-container {
            position: relative;
            text-align: center;
            color: white;
          }
          .woodwork {
            width: 100%;
          }
          .headline {
            position: absolute;
            bottom: calc(40% + 50px);
            left: 50%;
            transform: translate(-50%, -50%);
            text-shadow: 2px 2px #000;
            overflow: hidden;
            white-space: nowrap;
          }
        `}
      </style>
    </Layout>
  );
}
