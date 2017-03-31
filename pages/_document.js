import Document, { Head, Main, NextScript } from 'next/document';
import cxs from 'cxs';

const styles = {
  backgroundColor: '#f2f2f2',
  boxSizing: 'border-box',
  webkitFontSmoothing: 'antialiased',
};

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage();
    const style = cxs.getCss();
    return { ...page, style };
  }

  render () {
    return (
      <html lang="en">
        <Head>
          <title>Design AF</title>
          <meta name="description" content="A collection of web and mobile design inspiration by Cole Townsend." />
          <meta name="google-site-verification" content="KmiQk9kASHM1q_TMkUX0LSONkRrv-UoTqv6WG0KUyaM" />
          <link href="https://fonts.googleapis.com/css?family=Eczar|UnifrakturMaguntia" rel="stylesheet" />
          <style dangerouslySetInnerHTML={{ __html: this.props.style }} />
        </Head>
        <body style={styles}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
