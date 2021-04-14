import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { CMS_BASE_URL } from '../../common/constants';
import fetch from 'isomorphic-unfetch';
import ReactMarkdown from 'react-markdown';
import { useWindowSize } from '../../common/hooks';

const Page = ({
  pid,
  title,
  picture,
  description,
  published,
  updated_at,
  content,
  front_page,
  is_pdf,
  files,
}) => {
  const router = useRouter();
  const windowSize = useWindowSize();

  return (
    <Layout>
      <div className="container">
        {!is_pdf ? (
          <>
            <div className="news-container">
              <img className="news-image" src={CMS_BASE_URL + picture} />
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
                src={'https://pdf-viewer.now.sh/?pdf=' + CMS_BASE_URL + files}
              ></iframe>
            ) : (
              <a
                className="newsletter-download"
                download
                href={CMS_BASE_URL + files}
              >
                <img className={"mobile-newsletter-frontpage"} src={CMS_BASE_URL + front_page} />
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
          img.mobile-newsletter-frontpage, img.news-image {
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
  const res = await fetch('https://shifthyperloop01.it.ntnu.no/strapi/posts/' + pid).catch();
  const post = await res.json();

  return {
    pid: post.id,
    title: post.title,
    picture: post.picture.url || {},
    description: post.description,
    published: post.published,
    updated_at: post.updated_at,
    front_page: post.front_page.url || {},
    files: post.files[0].url || {},
    is_pdf: post.is_pdf || false,
    content: (post.content || '').replace(
      'https://shifthyperloop01.it.ntnu.no/strapi',
      'https://shifthyperloop.com'
    ),
  };
};

export default Page;
