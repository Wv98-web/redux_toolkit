import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { postUpdated } from './postsSlice';

export default function EditPostForm() {
  const { id } = useParams();

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === id)
  );

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: id, title, content }));
      navigate(`/posts/${id}`, { replace: true });
    }
  };

  return (
    <section>
      <h2>编辑帖子</h2>
      <form>
        <label htmlFor='postTitle'>帖子标题：</label>
        <input
          type='text'
          id='postTitle'
          name='postTitle'
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor='postContent'>内容：</label>
        <textarea
          id='postContent'
          name='postContent'
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button type='button' onClick={onSavePostClicked}>
        保存帖子
      </button>
    </section>
  );
}
