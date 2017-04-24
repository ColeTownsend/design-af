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
          <link href="https://fonts.googleapis.com/css?family=Eczar|UnifrakturMaguntia" rel="stylesheet" />
          <link rel="icon" href="/static/favicon.ico?v=1" />
          <link rel="mask-icon" href="/static/favicon.svg?v=1" color="#000000" />
          <style dangerouslySetInnerHTML={{ __html: this.props.style }} />
          <script
            dangerouslySetInnerHTML={{ __html: `
            !function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(
            arguments)};d=s.createElement(q);q=s.getElementsByTagName(q)[0];
              d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';q.parentNode.
              insertBefore(d,q)}(window,document,'script','_gs');

            _gs('GSN-862434-K');
            ` }}
          />
        </Head>
        <body style={styles}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
