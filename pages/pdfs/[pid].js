import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { CMS_BASE_URL } from '../../common/constants';
import fetch from 'isomorphic-unfetch';
import ReactMarkdown from 'react-markdown';

const Page = ({ pid, title, files: { url: fileUrl = '', name: pdfSrc = '' } }) => {
  const router = useRouter();
  return (
    <div>
      <div className="container">
        <h1>{title}</h1>
        <div
          className="flip-book-container solid-container"
           src={'https://shifthyperloop.com/' + pdfSrc}
        ></div>
      </div>
      {/*<script src="http://3dflipbook.net/js/jquery.min.js"></script>
      <script src="http://3dflipbook.net/js/html2canvas.min.js"></script>
      <script src="http://3dflipbook.net/js/three.min.js"></script>
      <script src="http://3dflipbook.net/js/pdf.min.js"></script>
      <script src="http://3dflipbook.net/js/3dflipbook.min.js"></script>*/}
    </div>
  );
};

Page.getInitialProps = async function(context) {
  const { pid } = context.query;
  const res = await fetch(`https://shifthyperloop01.it.ntnu.no/strapi/${pid}`);
  const post = await res.json();

  return {
    pid: post.id,
    title: post.title,
    files: post.files[0] || {},
  };
};

export default Page;
