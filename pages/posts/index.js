import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';
import { CMS_BASE_URL } from '../../common/constants';
import fetch from 'isomorphic-unfetch';
import styles from './PostPage.module.css';
import Post from './components/Post/Post';

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
