const fetch = require('isomorphic-unfetch');

module.exports = {
  exportTrailingSlash: true,
  target: 'serverless',
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/posts': { page: '/posts' },
      '/pod': { page: '/pod' },
      '/contact': { page: '/contact' },
      '/partners': { page: '/partners' },
      '/team': { page: '/team2021' },
      '/team2021': { page: '/team2021' },
      '/team2020': { page: '/team2020' },
      '/team2019': { page: '/team2019' },
      '/joinus': { page: '/joinus' },
    };

    const res = await fetch('http://shifthyperloop01.it.ntnu.no:1337/posts');
    const data = await res.json();
    data.forEach(({ id: pid }) => {
      paths['/post/' + pid] = { page: '/post/[pid]', query: { pid } };
    });

    return paths;
  },
};
