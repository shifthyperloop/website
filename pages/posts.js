import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../components/Layout';
import { CMS_BASE_URL } from '../common/constants';
import fetch from 'isomorphic-unfetch';

const Post = ({ title, pid, picture: { url = '', name: picSrc = '' }, description }) => {
  return (
    <>
      <Link href={"/post/" + pid}>
        <a className="post">
          <img className="post-image" src={'/' + picSrc} alt={title} />
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
        .post-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
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

const Page = ({ posts }) => {
  const router = useRouter();

  return (
    <Layout
      url="https://www.shifthyperloop.com/posts"
      title="Shift Hyperloop | Posts"
    >
      <div className="title">
        <h1>Newsletters and blog posts</h1>
        <hr />
      </div>
      <div className="posts page-container">
        {posts.map(post => (
          <Post key={post.title} {...post} />
        ))}
      </div>
      <div className="bottom-margin"></div>
      <style jsx>{`
        .title {
          margin-top: 50px;
        }
        .posts {
          display: flex;
          flex-flow: row wrap;
          box-sizing: border-box;
          padding: 16px;
        }
        .bottom-margin {
          height: 40px;
        }
        hr {
          width: 80%;
          border-width: 1px;
          border-style: solid;
          border-radius: 2.8px;
          border-color: #0080c9;
          margin-bottom: 40px;
        }
      `}</style>
    </Layout>
  );
};

Page.getInitialProps = async function() {
  const res = await fetch('http://shifthyperloop01.it.ntnu.no:1337' + '/posts?_sort=published:desc');
  const data = await res.json();

  return {
    posts: data.map(post => {
      return {
        pid: post.id,
        title: post.title,
        picture: post.picture || {},
        description: post.description,
      };
    }),
  };
};

export default Page;
