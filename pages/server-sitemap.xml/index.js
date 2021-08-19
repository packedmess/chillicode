//Add when Strapi content is ready
// import {getServerSideSitemap} from 'next-sitemap';

// export const getServerSideProps = async ctx => {
//   // Method to source urls from cms

//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cases?_locale=all`);
//   const cases = await res.json();

//   const fields = cases.map(item => {
//     return {
//       loc: `${process.env.NEXT_PUBLIC_API_BASE_URL}/?case=${item.slug}`,
//       lastmod: new Date().toISOString(),
//     };
//   });

//   return getServerSideSitemap(ctx, fields);
// };

// Default export to prevent next.js errors
export default () => {};
