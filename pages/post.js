import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import POST_URL from './posts';

const Post = ({ title, picture, description }) => {
  return (
    <div className="sponsor-list">
      {posts.map((post) => (
        <Post key={post.title} {...post} />
      ))}
    </div>
  );
};

const Page = ({ posts }) => {
  const router = useRouter();

  return (
    <Layout
      url="https://www.shifthyperloop.com/posts"
      title="Shift Hyperloop | Posts"
    >
      <a className="posts page-container" onClick={(POST_URL = post.title)}>
        {posts.map((post) => (
          <Post key={post.title} {...post} />
        ))}
      </a>
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

Page.getInitialProps = async function () {
  const res = await fetch(
    'https://shifthyperloop01.it.ntnu.no/strapi/posts?_sort=published:desc'
  );
  const data = await res.json();

  return {
    posts: data.map((post) => {
      return {
        title: post.title,
        picture: post.picture.url,
        description: post.description,
      };
    }),
  };
};

export default Page;
