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
      '/team': { page: '/team' },
      '/team2019': { page: '/team2019' },
      '/joinus': { page: '/joinus' },
    };

    const res = await fetch('https://cms.shifthyperloop.no/posts');
    const data = await res.json();
    data.forEach(({ id: pid }) => {
      paths['/post/' + pid] = { page: '/post/[pid]', query: { pid } };
    });

    return paths;
  },
};
