import React from 'react';
// import Feed from '../components/feed';
import cxs from 'cxs/lite';

export default class Main extends React.Component {
  render () {
    return (
      <div className={styles.root} />
    );
  }
}

const styles = {
  root: cxs({
    fontFamily: 'system, -apple-system, sans-serif',
  }),
};
//
