const fetch = require('isomorphic-unfetch');

module.exports = {
  basePath: '/home',
  exportTrailingSlash: true,
  target: 'serverless',
  exportPathMap: async function () {
    const paths = {
      '/': { page: '/home'},
      '/posts': { page: '/posts' },
      '/contact': { page: '/contact' },
      '/partners': { page: '/partners' },
      '/team': { page: '/team/2021' },
      '/team2021': { page: '/team/2021' },
      '/team2020': { page: '/team/2020' },
      '/team2019': { page: '/team/2019' },
      '/joinus': { page: '/joinus' },
    };

    const res = await fetch('http://shifthyperloop01.it.ntnu.no:1337/posts');
    const data = await res.json();
    data.forEach(({ id: pid }) => {
      paths['/post/' + pid] = { page: '/post/[pid]', query: { pid } };
    });

    return paths;
  },
  images: {
    domains: ['shifthyperloop01.it.ntnu.no'],
  },
};
