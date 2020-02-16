const fetch = require('isomorphic-unfetch');

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/posts': { page: '/posts' },
      '/pod': { page: '/pod' },
      '/contact': { page: '/contact' },
      '/partners': { page: '/partners' },
      '/team': { page: '/team' },
      '/joinus': { page: '/joinus' },
    };

    const res = await fetch('https://cms.shifthyperloop.com/posts');
    const data = await res.json();
    data
      .map(post => post.id)
      .forEach(pid => {
        paths['/post/' + pid] = { page: '/post/[pid]', query: { pid } };
      });

    return paths;
  },
};
