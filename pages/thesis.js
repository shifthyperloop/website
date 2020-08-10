import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../components/Layout';
import { CMS_BASE_URL } from '../common/constants';
import fetch from 'isomorphic-unfetch';

const Page = ({ posts }) => {
  const router = useRouter();

  return (
    <Layout
      url="https://www.shifthyperloop.com/thesis"
      title="Shift Hyperloop | Thesis"
    >
      <h1 className="headline">Thesis?</h1>
      <hr />
      <div className="text-container">
        <h3>
          On this page you will find our application from and a more detailed
          description of the positions we are offering this year. We are
          recruiting students from all fields of study regardless of year and
          prior knowledge. Working with Shift will give you experience that
          makes you attractive for your future employers. You will get a large
          network of new friends in the technical community at NTNU. A year at
          Shift will be educational and fun! Admission for the team 2021 is open
          and you should check if something is for you! Don’t hesitate to
          contact us if you have questions.
        </h3>
        <img src="\aeroshell.jpg"></img>
      </div>
      <style jsx>{`
        .headline {
          text-align: center;
        }
        .text-container {
          max-width: 1200px;
          width: 100%;
          margin: auto;
        }
        h3 {
          text-align: center;
        }
        hr {
          margin-bottom: 40px;
        }
        img {
          width: 100%;
          max-width: 1200px;
        }
      `}</style>
    </Layout>
  );
};

export default Page;
