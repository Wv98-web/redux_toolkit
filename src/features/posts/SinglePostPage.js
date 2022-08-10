import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { PostAuthor } from './PostAuthor';

export default function SinglePostPage() {
  const { id } = useParams();

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === id)
  );

  if (!post) {
    return (
      <section>
        <h2>页面未找到！</h2>
      </section>
    );
  }

  return (
    <section>
      <article className='post'>
        <h2>{post.title}</h2>
        <p className='post-content'>{post.content}</p>
        <p>
          <PostAuthor userId={post.userId} />
        </p>
        <Link to={`/editpostform/${post.id}`} className='button'>
          Edit Post
        </Link>
      </article>
    </section>
  );
}
