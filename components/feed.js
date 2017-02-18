import moment from 'moment';
import cxs from 'cxs';
import Spacing from '../styles/spacing';
import ArtboardStyles from '../styles/artboard';

// eslint-disable-next-line
export default function({ className, posts }) {
  return (
    <div className={className}>
      {posts.map((post, i) => (
        <div
          className={cx.post}
          {...{ 'data-name': `Artboard ${i + 2}` }}
          key={post.id}
          style={i % 2 === 0 ? { marginRight: Spacing.medium } : { marginLeft: Spacing.medium }}
        >
          {post.thumbnails.cropped &&
            <img alt={post.name} src={post.thumbnails.cropped} />
          }
          <div>
            {post.link ?
              <a href={post.link}><p>{post.name}</p></a> :
              <p>{post.name}</p>
            }
            {post.description &&
              <p>{post.description}</p>
            }
            <h5>Added at {moment(post.created_at).fromNow()}</h5>
          </div>
        </div>
        ))
      }
    </div>
  );
}

const cx = {
  post: cxs({
    ...ArtboardStyles,
    width: `calc(50% - ${Spacing.large}px)`,
    overflow: 'hidden',
    marginBottom: Spacing.large,
  }),
  image: cxs({
    width: '100%',
    height: 'auto',
  }),
};
