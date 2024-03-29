module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '/',
  siteMetadata: {
    siteTitle: 'Activities Map',
    siteUrl: 'https://xmoutdoor.com',
    // logo: 'https://avatars3.githubusercontent.com/u/6956444?s=460&u=97e1062227c4088db3c987146455245c6fa78441',
    //logo: 'https://s2.loli.net/2023/03/07/SGt8NUagCoOD6j9.jpg',
    logo: 'https://temposs-1311201927.cos.accelerate.myqcloud.com/img/vue-color-avatar-square.png',
    description: 'Personal Activities Page',
    keywords: 'workouts, running, cycling, riding, hiking',
    navLinks: [
      // {
      //   name: 'Blog',
      //   url: 'https://www.baidu.com?run=abc',
      // },
      {
        name: 'About',
        url: 'https://xmoutdoor.com/about',
      },
    ],
  },
  plugins: [
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/static/',
      },
    },
    {
      resolve: "gatsby-plugin-vercel",
      options: {
        // (optional) Prints metrics in the console when true
        debug: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-alias-imports',
      options: {
        rootFolder: './',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#e1e1e1',
        theme_color: '#e1e1e1',
        display: 'standalone',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        runtimeCaching: [
          {
            urlPattern: /^https?:.*\/icons\/.*\.png/,
            handler: `CacheFirst`,
          },
          {
            urlPattern:
              /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `StaleWhileRevalidate`,
          },
          {
            urlPattern: /^https?:\/\/api\.mapbox\.com\//,
            handler: `StaleWhileRevalidate`,
          },
          {
            urlPattern: /^https?:.*\/page-data\/.*\.json/,
            handler: `StaleWhileRevalidate`,
          },
        ],
        skipWaiting: true,
        clientsClaim: true,
      },
    },
  ],
};
