import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import { CMS_BASE_URL } from '../../common/constants';
import fetch from 'isomorphic-unfetch';
import Image from 'next/image';
import styles from './PostPage.module.css';

const Post = ({ title, pid, picture, description }) => {
  return (
    <>
      <Link href={'/post/' + pid}>
        <a className="post">
          <Image
            src={CMS_BASE_URL + picture}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
          <div className="post-text">
            <h2 className="post-title">{title}</h2>
            <p className="post-description">
              {description}
              <br />
              <br />
            </p>
          </div>
        </a>
      </Link>
      <style jsx>{`
        .post {
          background-size: cover;
          background-position: center center;
          border-radius: 5.5px;
          height: 300px;
          flex: 1 1 500px;
          margin: 16px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          position: relative;
          overflow: hidden;
        }
        .post:first-child {
          flex-basis: 100%;
          height: 400px;
        }
        .post-text {
          background-color: #0009;
          padding: 16px 32px;
          position: absolute;
          top: calc(100% - 60px);
          left: 0;
          right: 0;
          bottom: 0;
          transition: top 0.2s;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        .post-title {
          margin: 16px auto;
          white-space: pre;
          min-height: 2rem;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
        }
        .post-description {
          margin: 0;
          text-align: justify;
          padding: 0 calc(50% - 300px);
          overflow-y: hidden;
          max-height: 186px;
          mix-blend-mode: screen;
          position: relative;
        }
        .post-description:after {
          position: absolute;
          content: '';
          left: 0;
          right: 0;
          bottom: 0;
          height: 30px;
          background: linear-gradient(transparent, #000);
        }
        .post:hover > .post-text {
          top: 0;
        }
      `}</style>
    </>
  );
};

const PostsPage = ({ posts }) => {
  const router = useRouter();

  return (
    <Layout
      url="https://www.shifthyperloop.com/posts"
      title="Shift Hyperloop | Newsletters"
    >
      <div className={styles.title}>
        <h1>Newsletters</h1>
        <hr className={styles.blueLine} />
      </div>
      <div className={`${styles.posts}`}>
        {posts.map((post) => (
          <Post key={post.title} {...post} />
        ))}
      </div>
      <div className={styles.bottomMargin} />
    </Layout>
  );
};

PostsPage.getInitialProps = async function () {
  const res = await fetch(CMS_BASE_URL + '/posts?_sort=published:desc');
  const data = await res.json();

  return {
    posts: data.map((post) => {
      return {
        pid: post.id,
        title: post.title,
        picture: post.picture.url || {},
        description: post.description,
      };
    }),
  };
};

export default PostsPage;
