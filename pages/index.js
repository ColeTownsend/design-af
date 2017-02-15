 import React from 'react';
 import 'isomorphic-fetch';
 import { filter, propEq } from 'ramda';
 import cxs from 'cxs/lite';
 import Feed from '../components/feed';

 const key = '4e12c280ec9217ecaf61';

// const categories = {
//   random: 396722,
//   mobile: 396721,
//   web: 396720,
// };
//
// function createCategoryURL (category) {
//   return `http://twnsndco.dropmark.com/${category}.json`;
// }

 const activityURL = `https://twnsndco.dropmark.com/activity.json?key=${key}`;

 export default class Main extends React.Component {
   static async getInitialProps () {
    // eslint-disable-next-line no-undef
     const response = await fetch(activityURL);
     const json = await response.json();
     return {
       posts: filter(propEq('type', 'link'), json),
     };
   }

   render () {
     return (
       <div className={styles.root}>
         <header>
           <div>
             <h1 className={styles.fraktur}>Design as fuck</h1> <span className={styles.sectra}>is a
            collection of platform agnostic inspiration.</span>
           </div>
         </header>
         <Feed posts={this.props.posts} />
       </div>
     );
   }
}

 Main.propTypes = {
   posts: React.PropTypes.arrayOf(React.PropTypes.object),
 };

 Main.defaultProps = {
   posts: [],
 };

 const styles = {
   root: cxs({
     fontFamily: 'system, -apple-system, sans-serif',
   }),
   sectra: cxs({
     fontFamily: 'GT Sectra Fine Trial',
     fontSize: 50,
   }),
   fraktur: cxs({
     fontFamily: 'UnifrakturMaguntia',
     fontSize: 50,
     fontWeight: '300',
   }),
 };
