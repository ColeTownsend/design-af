require('dotenv').config();
import React from 'react';
import 'isomorphic-fetch';
import { filter } from 'ramda';
import cxs from 'cxs';
import Feed from '../components/feed';
import ResizeDiv from '../components/resizeableDiv';
import Spacing from '../styles/spacing';
import Colors from '../styles/colors';
import { System } from '../styles/fontFamily';
import ArtboardStyles from '../styles/artboard';

// stuff for dropmark
const isPost = post => (post.type === 'image' || post.type === 'link') && post.collection_id !== 396722;
const dataName = { 'data-name': 'Artboard 1' };
const activityURL = `https://twnsndco.dropmark.com/activity.json?key=${process.env.DROPMARK_KEY}`;

export default class Index extends React.Component {
  static async getInitialProps () {
  // eslint-disable-next-line no-undef
    const response = await fetch(activityURL);
    const json = await response.json();

    return {
      posts: filter(isPost, json),
    };
  }

  render () {
    return (
      <div className={cx.root}>
        <header {...dataName} className={cx.mainArtboard}>
          <div className={cx.content}>
            <div>
              <h1 className={cx.fraktur}>Design af</h1>
              <span className={cx.sectra}>is a collection of web and mobile
              design inspiration.</span>
            </div>
            <ResizeDiv />
          </div>
          <nav className={cx.nav}>
            <a className={cx.link} href="https://twitter.com/twnsndco">Submit your stuff</a>
            <a className={cx.link} href="https://twitter.com/twnsndco">Want to interview?</a>
          </nav>
        </header>
        <Feed className={cx.feed} posts={this.props.posts} />
      </div>
    );
  }
}

Index.propTypes = {
  posts: React.PropTypes.arrayOf(React.PropTypes.object),
};

Index.defaultProps = {
  posts: [],
};

const cx = {
  root: cxs({
    fontFamily: 'system, -apple-system, sans-serif',
    color: 'black',
    fontSize: 15,
    userSelect: 'none',
    background: '#F2F2F2',
  }),
  nav: cxs({
    position: 'absolute',
    top: Spacing.large,
    left: `calc(50vw - ${Spacing.headerWidth})`,
    maxWidth: Spacing.headerWidth,
    width: '100%',
  }),
  link: cxs({
    color: Colors.OffWhite,
    textDecoration: 'none',
    fontSize: 14,
    fontFamily: System,
    marginRight: Spacing.medium,
    '-webkit-font-smoothing': 'antialiased',
    'font-smooth': 'always',
    ':hover': {
      color: Colors.Red,
    },
  }),
  mainArtboard: cxs({
    ...ArtboardStyles,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: Spacing.large,
    paddingTop: Spacing.xLarge,
    paddingBottom: Spacing.xLarge,
    minHeight: 320,
    backgroundColor: Colors.Black,
  }),
  feed: cxs({
    margin: Spacing.large,
    display: 'flex',
    maxWidth: '100%',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  }),
  content: cxs({
    maxWidth: Spacing.headerWidth,
    color: Colors.OffWhite,
  }),
  sectra: cxs({
    fontFamily: 'GT Sectra Fine, GT Sectra Fine Trial, Eczar, serif',
    fontSize: 50,
    display: 'inline',
  }),
  fraktur: cxs({
    fontFamily: 'UnifrakturMaguntia',
    fontSize: 50,
    fontWeight: '300',
    display: 'inline',
  }),
};
