import Document, { Head, Main, NextScript } from 'next/document';
import cxs from 'cxs';

const styles = {
  backgroundColor: '#f2f2f2',
  boxSizing: 'border-box',
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
