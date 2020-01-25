import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { CMS_BASE_URL } from '../common/constants';
import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';

const Post = ({ title, picture: { url = '' }, description }) => {
  return (
    <>
      <div className="post">
        <img className="post-image" src={CMS_BASE_URL + url} alt={title} />
        <div className="post-text">
          <h2 className="post-title">{title}</h2>
          <p className="post-description">
            {description}
            <br />
            <br />
          </p>
        </div>
      </div>
      <style jsx>{`
        .post {
          background-size: cover;
          background-position: center center;
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
          transition: top 2s;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        .post-title {
          margin: 16px 0;
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
    <Layout>
      <div className="posts page-container">
        {posts.map(post => (
          <Post key={post.title} {...post} />
        ))}
      </div>
      <style jsx>{`
        .posts {
          display: flex;
          flex-flow: row wrap;
          padding: 16px;
        }
      `}</style>
    </Layout>
  );
};

Page.getInitialProps = async function() {
  const res = await fetch('https://cms.shifthyperloop.com/posts');
  const data = await res.json();

  return {
    posts: data.map(post => {
      return {
        title: post.title,
        picture: post.picture,
        description: post.description,
      };
    }),
  };
};

export default Page;
