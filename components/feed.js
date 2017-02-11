export default ({ className, posts }) => (
  <div className={className}>
    {posts.map(post => (
      <div key={post.id}>
        {post.thumbnails.uncropped &&
          <img alt={post.name} src={post.thumbnails.uncropped} />
        }
        <div>
          {post.link ?
            <a href={post.link}><p>{post.name}</p></a> :
            <p>{post.name}</p>
          }
          {post.description &&
            <p>{post.description}</p>
          }
          <h5>Added at {post.created_at}</h5>
        </div>
      </div>
      ))
    }
  </div>
);
