import Post from './post';

// eslint-disable-next-line
export default function({ className, posts }) {
  return (
    <div className={className}>
      {posts.map((post, i) => (
        <Post artboard={i + 2} key={post.id} post={post} />
      ))
      }
    </div>
  );
}
