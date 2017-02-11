import React from 'react';
import 'isomorphic-fetch';
import { filter, propEq } from 'ramda';
import Feed from '../components/feed';

const key = '4e12c280ec9217ecaf61';

const categories = {
  random: 396722,
  mobile: 396721,
  web: 396720,
};

function createCategoryURL (category) {
  return `http://twnsndco.dropmark.com/${category}.json`;
}

const activityURL = `https://twnsndco.dropmark.com/activity.json?key=${key}`;
const filterPosts = filter(propEq('type', 'link'));

export default class FeedPage extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const response = await fetch(activityURL);
    const json = await response.json();
    // http://codepen.io/ColeTownsend/pen/GrwbvL?editors=1112
    return { posts: json };
  }

  render () {
    console.log('posts: ', this.props.posts);

    return (
      <div>
        <h1>Yes I am feed</h1>
        <Feed post={this.props.posts} />
      </div>
    );
  }
}

Feed.propTypes = {
  posts: React.PropTypes.arrayOf(React.PropTypes.object),
  className: React.PropTypes.string,
};

Feed.defaultProps = {
  posts: [],
  className: null,
};
