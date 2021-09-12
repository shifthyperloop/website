import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';
import { CMS_BASE_URL } from '../../common/constants';
import fetch from 'isomorphic-unfetch';
import styles from './PostsPage.module.css';
import Post from '../../components/page/posts/Post/Post';
import PageTop from '../../components/PageTop/PageTop';

const PostsPage = ({ posts }) => {
  const router = useRouter();

  return (
    <Layout
      url="https://www.shifthyperloop.com/posts"
      title="Shift Hyperloop | Newsletters"
    >
      <PageTop
        title="Newsletters"
      />
      <div className={styles.postsContainer}>
        {posts.map((post) => (
          <Post key={post.title} {...post} />
        ))}
      </div>
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
