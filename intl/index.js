const path = require('path');
const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['ru'],
  serverLanguageDetection: true,
  localePath: path.resolve(process.cwd(), 'public/locales'),
});
