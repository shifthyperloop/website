import Layout from '../../components/Layout/Layout';
import { CMS_BASE_URL } from '../../common/constants';
import fetch from 'isomorphic-unfetch';
import { useWindowSize } from '../../common/hooks';
import styles from './PostPage.module.css';
import PageTop from '../../components/PageTop/PageTop';
import Button from '../../components/Button/Button';
import Image from 'next/image';

const PostPage = ({ title, front_page, files }) => {
  const windowSize = useWindowSize();

  const fileUrl = CMS_BASE_URL + files;

  return (
    <Layout>
      <PageTop title={title} />
      <div className={styles.container}>
        {windowSize.width > 1250 ? (
          <>
            <Button small download href={fileUrl}>
              Download
            </Button>
            <iframe
              className={styles.iframePdf}
              src={'https://pdf-viewer.now.sh/?pdf=' + fileUrl}
            />
          </>
        ) : (
          <a download href={fileUrl}>
            <div className={styles.mobileNewsletterFrontpage}>
              <Image
                src={CMS_BASE_URL + front_page}
                alt={title + ' frontpage'}
                layout="fill"
                objectFit="contain"
                objectPosition="top"
              />
            </div>
          </a>
        )}
      </div>
    </Layout>
  );
};

PostPage.getInitialProps = async function (context) {
  const { pid } = context.query;
  const res = await fetch(
    'https://shifthyperloop02.it.ntnu.no/strapi/posts/' + pid
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
      'https://shifthyperloop02.it.ntnu.no/strapi',
      'https://shifthyperloop.com'
    ),
  };
};

export default PostPage;
