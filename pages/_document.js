// Vendor
import React from 'react';
import NextDocument, {Html, Head, Main, NextScript} from 'next/document';
// Internals
import VendorScripts from 'components/VendorScripts';

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return {
      ...initialProps,
      lang: ctx?.req?.language,
    };
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <VendorScripts />
        </body>
      </Html>
    );
  }
}
