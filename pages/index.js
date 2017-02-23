import React from 'react';
import 'isomorphic-fetch';
// import ReactGA from 'react-ga';
import { filter } from 'ramda';
import cxs from 'cxs';
import { configureAnalytics, logPageView } from '../utils/analytics';
import Feed from '../components/feed';
import ResizeDiv from '../components/resizeableDiv';
import Spacing from '../styles/spacing';
import ArtboardStyles from '../styles/artboard';

// stuff for dropmark
const key = '4e12c280ec9217ecaf61';
const isPost = post => (post.type === 'image' || post.type === 'link') && post.collection_id !== 396722;
const dataName = { 'data-name': 'Artboard 1' };
const activityURL = `https://twnsndco.dropmark.com/activity.json?key=${key}`;

// google analytics
configureAnalytics();

export default class Index extends React.Component {
  static async getInitialProps () {
  // eslint-disable-next-line no-undef
    const response = await fetch(activityURL);
    const json = await response.json();

    return {
      posts: filter(isPost, json),
    };
  }

  componentWillMount () {
    logPageView();
  }

  render () {
    return (
      <div className={cx.root}>
        <header {...dataName} className={cx.mainArtboard}>
          <div className={cx.content}>
            <div>
              <h1 className={cx.fraktur}>Design as fuck </h1>
              <span className={cx.sectra}>is a collection of web and mobile design inspiration.</span>
            </div>
            <ResizeDiv />
          </div>
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
  }),
  body: cxs({
    background: 'red',
  }),
  sectra: cxs({
    fontFamily: 'GT Sectra Fine Trial',
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
