import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';
import { CMS_BASE_URL } from '../../common/constants';
import fetch from 'isomorphic-unfetch';
import ReactMarkdown from 'react-markdown';
import { useWindowSize } from '../../common/hooks';
import styles from './PostPage.module.css';

const PostPage = ({
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
      <div className={styles.container}>
        {!is_pdf ? (
          <>
            <div className={styles.newsContainer}>
              <img className={styles.newsImage} src={CMS_BASE_URL + picture} />
              <h1 className={styles.title}>{title}</h1>
            </div>
            <div className={styles.text}>
              <h2>{description}</h2>
              <ReactMarkdown source={content} />
            </div>
          </>
        ) : (
          <div className={styles.newsletter}>
            <h1>{title}</h1>
            {windowSize.width > 1000 ? (
              <iframe
                className={styles.iframePdf}
                src={'https://pdf-viewer.now.sh/?pdf=' + CMS_BASE_URL + files}
              ></iframe>
            ) : (
              <a
                className={styles.newsletterDownload}
                download
                href={CMS_BASE_URL + files}
              >
                <img
                  className={styles.mobileNewsletterFrontpage}
                  src={CMS_BASE_URL + front_page}
                />
              </a>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

PostPage.getInitialProps = async function (context) {
  const { pid } = context.query;
  const res = await fetch(
    'https://shifthyperloop01.it.ntnu.no/strapi/posts/' + pid
  ).catch();
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

export default PostPage;
