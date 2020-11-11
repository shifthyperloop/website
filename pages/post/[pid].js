import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { CMS_BASE_URL } from '../../common/constants';
import fetch from 'isomorphic-unfetch';
import ReactMarkdown from 'react-markdown';
import { useWindowSize } from '../../common/hooks';

const Page = ({
  pid,
  title,
  picture: { url = '', name: picSrc = ''},
  description,
  published,
  updated_at,
  content,
  front_page: { url: frontUrl = '', name: frontSrc = '' },
  is_pdf,
  files: { url: fileUrl = '', name: pdfSrc = ''},
}) => {
  const router = useRouter();
  const windowSize = useWindowSize();

  return (
    <Layout>
      <div className="container">
        {!is_pdf ? (
          <>
            <div className="news-container">
              <img className="news-image" src={'/' + picSrc} />
              <h1 className="title">{title}</h1>
            </div>
            <div className="text">
              <h2>{description}</h2>
              <ReactMarkdown source={content} />
            </div>
          </>
        ) : (
          <div className="newsletter">
            <h1>{title}</h1>
            {windowSize.width > 1000 ? (
              <iframe
  id="iframepdf"
  src={'/' + pdfSrc}
  />
            ) : (
              <a
                className="newsletter-download"
                download
                href={'/' + pdfSrc}
              >
                <img src={'/' + frontSrc} />
              </a>
            )}
          </div>
        )}
        <style jsx global>{`
          .text {
            max-width: 1200px;
            margin: 0 auto;
          }
          #iframepdf {
            border: none;
            width: 1200px;
            height: 1050px;
            margin-bottom: 30px;
          }
          .newsletter {
            max-width: 1200px;
            margin: auto;
            text-align: center;
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
            max-width: 90%;
          }
        `}</style>
      </div>
    </Layout>
  );
};

Page.getInitialProps = async function(context) {
  const { pid } = context.query;
  const res = await fetch(`http://shifthyperloop01.it.ntnu.no:1337/posts/${pid}`);
  const post = await res.json();

  return {
    pid: post.id,
    title: post.title,
    picture: post.picture || {},
    description: post.description,
    published: post.published,
    updated_at: post.updated_at,
    front_page: post.front_page || {},
    files: post.files[0] || {},
    is_pdf: post.is_pdf || false,
    content: (post.content || '').replace(
      'http://localhost:1337',
      'https://shifthyperloop.com'
    ),
  };
};

export default Page;
