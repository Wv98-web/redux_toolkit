import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUserById } from '../users/usersSlice';

export const PostAuthor = ({ userId }) => {
  const author = useSelector((state) => selectUserById(state, userId));

  return (
    <>
      <span>
        by{' '}
        <Link to={`/users/${author.id}`}>
          {author ? author.name : 'Unknown author'}
        </Link>
      </span>
    </>
  );
};
