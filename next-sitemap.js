module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    //Add when Strapi content is ready
    // additionalSitemaps: [`${process.env.NEXT_PUBLIC_API_BASE_URL}/server-sitemap.xml`],
  },
};
